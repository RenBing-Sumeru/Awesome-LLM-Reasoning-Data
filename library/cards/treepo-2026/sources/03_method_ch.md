主要在线RL提示混合被报告为约8,000条遵循SimpleRL的MATH level-3-to-5问题，加上40,000条DeepScaler样本。官方Hugging Face仓库包含`SimpleRL-simplelr_qwen_level3to5.train.parquet`及其test文件、`DeepScaler.train.parquet`、`DeepScaler.aime.parquet`，以及五个对齐后的评估Parquet。由于dataset card没有可用的YAML配置，默认viewer只把3,120条评估记录显示为一个自动生成的`train` split：AIME 60条、AMC 166条、MATH 1,000条、MINERVA 544条、OlympiadBench 1,350条。不能把这些viewer记录误认为在线rollout语料。

在线生成时，当前Qwen2.5-7B base策略接收问题根节点，并通过采用vLLM后端的veRL解码定长片段。树维护活跃提示队列、共享前缀token与KV cache、当前深度、每节点分支预算和已完成路径。内存中的`DataSampleTree`通过`tree_idx`记录标识与祖先关系，并保存输入及完整回答token ID、逐token和累计log-probability、`finished_reason`、状态及每步token数量。面向训练器的tensor包含提示、回答、输入ID、mask和position；非tensor字段则为已收集终局样本保留`tree_idx`、完成步与fallback计数。

一个片段在生成EOS或达到片段token上限时停止。一条路径可因生成合法boxed答案、到达EOS、触发重复检测、达到最大深度或达到回答token上限而终止。发布的辅助函数将同一个32字符子串重复八次判定为重复。这一阈值来自已核验代码；论文本身只描述了重复子串停止，没有公布这些精确数字。

树构造同时受每节点分支预算和目标宽度控制。论文报告的在线设置包括深度与片段长度组合`28x256`、`14x512`和`7x1024`，最大宽度为16，每层使用二叉分支。初始分叉因子可以固定，也可以从2到8采样。发布的主要recipe选用`14x512`、宽度16、固定逐步分叉因子2、最高为8的初始分叉，以及7,168 token回答上限。预算会在活跃路径之间重新分配。如果在收集到目标宽度的轨迹之前活跃路径已耗尽，深度优先fallback会选择符合条件的已停止候选；论文要求候选具有格式化答案或以EOS结束，而发布代码还提供多种可配置fallback策略。

每条终局轨迹都通过把boxed结果与发布的ground truth比较，获得规则式最终答案奖励。所报告的数学设置没有使用学习型judge，也没有标签能够证明中间片段正确。奖励全对或全错的根问题组会因缺乏奖励方差而被动态拒绝。论文报告会对512问题训练batch最多进行三倍采样，以保留512个有信息量的组；在线训练和验证中每题使用16条轨迹。

随后，TreePO依据共享前缀祖先划分每条轨迹。对于每个由祖先诱导出的后代子组，它计算“奖励减子组平均奖励”；一条轨迹的层级优势是各祖先层级子组优势的简单平均，之后执行全局方差归一化。按子组大小加权，以及拒绝全正或全负子组，都只是ablation，并非最终采用的方法。策略目标使用经DAPO修改的GRPO设置，包括token-mean loss、0.2/0.28裁剪边界、不使用KL reward或loss、学习率`1e-6`、10步warmup、batch size 512、gradient clip 1.0、FSDP，以及发布脚本中的最多20个epoch。

发布脚本还设置temperature 1.0、top-p 1.0和top-k -1。论文的16-rollout共享前缀示例使用temperature 0.8，因此这些数值属于不同实验语境。更重要的是，论文称训练batch形成时至多允许额外两个采样batch，而发布脚本把`algorithm.filter_groups.max_num_gen_batches`设置为10。官方来源没有解释这一“2对10”差异，也没有用不可变run manifest把每张报告表格绑定到具体配置。

主要训练设置报告使用64张GPU，但没有说明GPU型号。独立的离线效率实验使用一张H100 80GB、60%显存利用率、64个提示、每提示64条rollout，不使用tensor或data parallel，并把单轨迹预算设为7,000 token，且深度乘片段长度固定为7,000。评估覆盖AIME 2024、AMC 2023、MATH500、MINERVA和OlympiadBench，使用16条rollout与majority-vote accuracy；论文报告的指标通过1,000次采样重复估计。

发布工件与构造过程必须保持区分。采用Apache-2.0的GitHub仓库包含veRL/vLLM实现、启动recipe、脚本、测试和版本说明。Hugging Face collection包含`TreePO-Qwen2.5-7B`、固定分叉与启发式变体，以及`TreePO_data`。公开数据集schema包含`data_source`、双消息`prompt`、`ability`、`reward_model.{ground_truth,style}`和`extra_info.{index,split}`。其中没有生成推理轨迹、树边、逐分支奖励结果、剪枝决策、fallback谱系或被拒绝问题组记录。
