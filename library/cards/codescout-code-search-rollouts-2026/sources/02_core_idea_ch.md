贡献可以概括为一句话：把 patch 衍生的代码位置变成确定性的终点 verifier，用它通过多次在线 rollout 训练 terminal-search agent，并发布由此产生的完整对话——包括失败的同组轨迹——而不是只给出经过筛选的成功集。

数据/反馈对象由四个相互连接的层次组成。第一，issue 与仓库状态定义搜索环境。第二，当前策略产生 terminal-tool 轨迹，其中包含 `rg`、`find`、`ls`、`grep`、`sed` 等命令及 observation。第三，`LocalizationFinish` 把预测位置序列化为对象列表，每个对象必须有 `file`，并可选 `class_name` 与 `function_name`。第四，程序化 verifier 比较预测集合与从 patch 抽取的 gold set，并记录标量奖励分量。

定位奖励为
\[
R_{\mathrm{loc}} = F1_{\mathrm{file}} + F1_{\mathrm{module}} + F1_{\mathrm{entity}},
\]
取值范围为 0 到 3。在发布中，三个分量名为 `file_reward`、`module_reward` 和 `entity_reward`，总和记录为 `multilevel_localization_f1_reward`。CodeScout-14B 还使用独立的二值 `multiturn_reward`：只有 rollout 恰好使用四轮时才为 1。公开 reward dictionary 分别存储这些分量，没有给出顶层训练总奖励字段。

终点契约比“提到一个看似合理的文件”更严格。生成器要求恰好出现一次有效 `LocalizationFinish` 动作，并进行最后一步 sanity check；缺失、重复、格式错误或与其他动作同时发出的 finish 调用都会得到零定位奖励。达到最大轮数仍未结束的 rollout 在训练中还会被 loss-mask，不过其零奖励对话可能继续保留在公开 artifact 中。中间步骤不由人工标注者、学习式 judge、测试执行或 process reward model 评分。

多次尝试发布与 verifier 本身同样重要。CodeScout-14B 有 9,760 个严格包含四行的分组。CodeScout-4B 有 1,979 个 instance-step 组：其中 1,973 个含八行，另有六个分别只含 1、2、3、4、5、6 行。14B 数据中有 1,448 个组同时出现零分与正分定位结果；4B 数据中这样的 mixed group 有 869 个。这些同组轨迹支持成功集无法提供的对照。

本 Card 严格区分直接用于 4B/14B RL 的 artifact 与论文中的 1.7B 路径。对于后者，CodeScout-14B 在 7.7K 个任务上采样，只保留三层定位均为满分的轨迹，得到 4K 条 rejection-sampling fine-tuning 样本；随后在与之不重叠的 800 个任务上进行 1.7B RL。已检查的 `CodeScout_Training_Rollouts` 发布没有 1.7B 配置，不能把它称作该成功筛选 RFT 集。
