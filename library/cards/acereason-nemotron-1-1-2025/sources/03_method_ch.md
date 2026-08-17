输入与 SFT 构造：论文从 Qwen2.5-Math-7B 出发，将 `rope_theta` 从 10,000 改为 1,000,000，以支持其报告的 128K context。数学 prompt 来自 AceMath、NuminaMath 和 OpenMathReasoning，代码 prompt 来自 TACO、APPS、OpenCoder-Stage2 和 OpenCodeReasoning。流程先对 prompt 去重，移除与 benchmark 测试条目存在 9-gram 重叠的样本，再把较短的 DeepSeek-R1 response 视为较简单任务的代理并随机下采样。所得实验池包含 24.7 万个数学 prompt 与 13.6 万个代码 prompt。DeepSeek-R1 生成 SFT output，七种混合从 v1 的 3.6 万样本扩展到 v7 的 220 万样本。（论文 §3.1，图 3–5。）

已核查发布物并未按这七种混合序列化。AceReason-1.1-SFT 只公开一个训练 split，字段为 `category`、`source`、`input` 和 `output`，共有 2,668,741 行数学数据和 1,301,591 行代码数据。其 source 标签与 question 计数不能和论文最终 prompt 池一一对应，发布字段也不记录 v1-v7 归属、正确性检查、拒绝或模型 checkpoint。复现者因此必须固定公开发布 revision，并另行获得当前 unknown 的最终实际使用混合 manifest。

RL 流程：每个全局 batch 有 128 个 prompt；当前 policy 为每题采样 (G=8\) 或 (16) 个 response；规则 verifier 按 ground-truth answer 打分；组内标准化 score 形成 token-level advantage。veRL 在每个 batch 后执行一次 policy-gradient update，采用 token-level GRPO loss，并移除 KL 项。数学验证位于答案级；代码验证会编译生成程序并运行预定义测试。精确 parser、测试、环境、timeout、reward 代码、optimizer 设置与分阶段 temperature 均未披露。（论文 §3.2.1–3.2.2。）

课程与筛选：数学 RL 的 response limit 依次为 8K、16K 和 24K，逐步偏向更难任务，并在 24K 阶段保留约 2,500 道难题。随后代码 RL 使用 24K 与 32K；从 Code Stage-II 的第二个 epoch 起，会删除前一 checkpoint 下所有 rollout 都通过全部测试的任务。最终数学 32K 阶段同样保留并非所有 rollout 都能解出的任务。当 output 被截断时，"overlong filtering" 会屏蔽整个样本且不分配 reward；另一种做法则分配负 reward。论文显示，该选择依赖阶段，并非始终有利。

输出与用途：SFT 消费教师 demonstration；RLVR 消费 question-answer 记录与带程序化结果 reward 的临时 rollout 组；最终 artifact 是 AceReason-Nemotron-1.1-7B。复现需要精确 SFT 子集、各阶段 prompt manifest、8 与 16 的分配、temperature、答案 parser、代码测试与 runtime、overlong 策略、optimizer/硬件/随机种子和 checkpoint 序列。官方模型页提供权重、推理 prompt 与 evaluation toolkit 指针，而不是缺失的训练实现。
