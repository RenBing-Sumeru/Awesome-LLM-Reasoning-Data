报告的数据混合直接采用 ALFWorld 与 WebShop 训练集，使用 o3 和 Claude Sonnet 4 为 OS、Knowledge Graph 和 DB 采样、筛选 Self-Instruct 实例，并向 DB 加入 BIRD 训练样本。较小的任务数据集会复制到大致与最大任务相同的规模，然后按顺序交错；精确保留标识、复制次数和最终比例均为 unknown。rollout 引擎异步产生当前策略轨迹，而跨策略采样可从当前和旧策略引擎中选择动作步骤。报告的 GRPO 设置包括每次 rollout 八条轨迹、temperature 0.8、任务优势归一化、动态 batch、SGLang 推理和 FSDP 训练。控制器限制队列大小，并在每个步骤将轨迹转入训练以限制陈旧性。这是方法和框架披露，而不是静态语料发布、论文运行轨迹下载或固定运行时栈。

