输入是推理模型 M、提示 x、采样数 n、随机解码参数和最大长度 L。Sync-FFS 为同一提示初始化 n 份轨迹，在一次 batch forward 中为每条活跃轨迹采样下一个 token，并在任一轨迹采到 EOS 时停止整个 batch。Async-FFS 启动 n 个解码任务，返回最先完成或达到长度上限的任务，并取消其余任务。流程不更新模型，也没有训练数据构造阶段。

报告的评测使用 n=4、temperature 0.6、top-p 0.95、zero-shot 提示；AIME 的最大生成长度为 32K token，GPQA Diamond 为 16K，并通过 deepinfra.com API 运行。模型包括 DeepSeek-R1、R1-Distill-Qwen-32B、QwQ-32B、Phi-4-Reasoning-Plus，以及作为非推理对照的 DeepSeek-V3。任务包括 AIME24、两个 AIME25 split 和 GPQA Diamond。accuracy 使用答案精确匹配；计算量分别报告并行轨迹总生成 token 和取得所选答案所需的最小顺序 token。

忠实复现应记录提示与 parser 版本、模型 endpoint、n、采样参数、每条部分轨迹及取消时 token 数、EOS 时间戳或解码步、调度模式、最大长度、所选轨迹和事后正确性。论文链接 https://github.com/Aradhye2002/reasoning_exps，但核验时仓库页面未展示实现文件或许可证。原始 rollouts、请求时序、seed 和版本化评测清单均未确认。
