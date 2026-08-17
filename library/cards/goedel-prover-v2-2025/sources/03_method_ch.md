Formalizer 构造先于 prover 训练。论文报告用 Claude Sonnet 4 生成初始 50K 条样本并附带推理轨迹，之后通过 expert iteration 改进 Goedel-Formalizer-V2：候选 Lean 陈述必须同时通过语法检查与多次 LLM 语义评估，才进入下一轮 SFT。在 300 道 OmniMath 对比中，Goedel-Formalizer-V2 有 228 道通过，Kimina-Autoformalizer 为 161 道；这是 formalizer 层面的评测，不是对训练池每条记录的质量证明。

Scaffolded synthesis 有两条路线。形式化路线对失败证明中的未解状态调用 Lean 的 `extract goal` tactic，把提取目标及其前提作为新陈述；由于该陈述未必可证，流程也将其否定作为候选。非形式化路线先让 Qwen3-32B 用自然语言尝试求解源问题，再为未解题生成较简单子题、为已解题生成较难变体；随后进行自动形式化、LLM 数学正确性与难度筛选，并按精确匹配去重。重复判断旨在降低误删难题的概率，但论文没有报告筛选错误率。

SFT 流程从教师生成且经 Lean 验证的完整证明 S1 开始。SFT-S1 和 DeepSeek-Prover-V2-671B 随后生成修正标注，其中后者的推理据报通过 NeMo-Skills 使用 144 张 H100。S2 将修正数据并入 S1；SFT-S2 与 Qwen3 base model 做参数平均后用于支架式生成，再在 S3 上微调，所得 SFT-S3-AVG 作为 RL 初始化。

RL 等比例混合完整证明 prompt 与首轮修正 prompt。附录报告准备 50K 个高难陈述和 50K 条自我修正样本；每个修正输入包含陈述、失败模型输出和错误信息。训练使用 VeRL 跑一个 epoch，batch size 128，`n=8` 并行 rollout 与 Lean 奖励调用，mini-batch size 32，并用三倍 batch 的过采样池。动态采样删除通过率为 0 或高于 0.75 的 prompt。最大 prompt/response 长度分别为 16K/24K，另有 4K overlong buffer 和系数 1；目标采用 token 平均 policy loss，不含 KL 或 entropy 项。生成温度、随机种子、定理来源精确比例和完整接受/拒绝计数仍为 unknown。

推理时，主自我修正配置在 40K 上下文内最多允许两轮修订：失败证明送入编译器，再将具体错误与先前推理一并返回模型。128K 上下文消融最多允许五轮。官方代码面向 Linux/Python 3.10，并使用 Lean 4.9 及相应 Mathlib；仓库固定了 mathlib4 子模块，但没有提供不可变容器摘要。

