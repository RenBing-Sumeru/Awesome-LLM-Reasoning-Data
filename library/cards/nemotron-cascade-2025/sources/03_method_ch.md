
SFT 分为两个长度阶段。Stage 1 在 16K 上训练一个 epoch，数据包括通用领域以及仅含 thinking 模式的数学、代码和科学回答。Stage 2 在 32K 上训练一个 epoch，把通用数据与更长的数学、代码、科学轨迹、工具调用对话、指令遵循记录，以及 SWE 定位、修复和测试生成样本重新混合。DeepSeek-R1 是 Stage 1 的主要推理生成器；DeepSeek-R1-0528 生成更长的 Stage 2 推理与 SWE 回答；DeepSeek-V3 系列提供通用领域的两种回答模式；Qwen3-235B-A22B 生成工具调用回答。

构造过程按领域分别设计。数学 SFT 使用源自 AceReason-Nemotron-1.1 的提示，进行长度筛选、多教师回答生成与 9-gram 基准过滤。代码 SFT 来自 TACO、APPS、OpenCoder-Stage-2 和 OpenCodeReasoning，先去重，再生成多个回答并执行 9-gram 过滤。科学部分结合 S1K 与 Llama-Nemotron 后训练来源，删除只分析选项的问题，合成较少见的问题变体，并进行基准过滤。SWE 使用 SWE-Bench-Train、SWE-Fixer-Train、SWE-reBench 与 SWE-Smith；来自 SWE-bench Verified 仓库的实例会被排除，跨来源重复项按仓库名与 base commit 匹配。

RL 框架是在 verl 中执行的严格 on-policy GRPO。每轮由当前策略采样一组回答并更新一次，因此重要性比率为一；目标使用组内归一化奖励、token 级损失且不含 KL 项。级联顺序为 RLHF -> IF-RL -> Math RL -> Code RL -> SWE RL。RLHF 从偏好数据中取提示，并排除数学与竞赛编程；IF-RL 使用两套逐渐变难的约束分类；Math RL 删除不适合验证、噪声、过易与不可解题目；Code RL 删除特殊评测、测试不足、重复、基准重叠、过易以及强难度模型也无法解出的任务。

SWE 根据 DeepSeek-R1-0528 多次采样后的补丁相似度，把较易实例分给 SFT、较难实例分给 RL。RL 提示包含人工定位文件，也可混入检索得到的噪声文件；过短提示会被删除。奖励结合词法相似度与 Kimi-Dev-72B 对人工补丁的语义相似度，因此 SWE RL 期间不使用 Docker 执行。8B 的输入上下文从 16K 扩展到 24K，输出保持 16K；14B 使用 32K 输入与 16K 输出。

公开 collection 可以核验多种输入与检查点，但不足以重放完整运行。当前可见工件包括 Stage-1/Stage-2 SFT、SFT-SWE、RL-Math、RL-SWE、RL-RLHF、RM-Training、最终权重、72B 奖励模型和 8B 中间检查点。专门的 IF-RL 与 Code-RL 数据集、精确 verl commit 与配置、策略 rollout 组、奖励分量、动态过滤账本、随机种子及优化器状态仍为 unknown。
