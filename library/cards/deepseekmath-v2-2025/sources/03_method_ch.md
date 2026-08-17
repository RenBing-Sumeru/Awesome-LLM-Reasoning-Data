已披露构造流水线如下：

1. **问题池。** 抓取 17,503 道 AoPS 竞赛题，优先选择奥赛、国家队选拔、2010 年后题目和明确要求证明的题目，并记作 `D_p`（论文 §2.1.1，第 3 页）。抓取 manifest、权利台账、重复策略和评测排除清单未发布。
2. **初始证明生成。** 一个 DeepSeek-V3.2-Exp-Thinking 变体生成自然语言候选证明，并经多轮迭代 refinement。Generator 身份、轮数、sampler、temperature、每题 candidate 数和保留策略均为 unknown。
3. **专家证明标签。** 跨数学类型随机抽样证明，由数学专家给出 `s ∈ {0, 0.5, 1}`，形成 `D_v={(X_i,Y_i,s_i)}`。专家人数、每条证明标签数、一致性、仲裁和数据集大小均未披露。
4. **Verifier RL。** 从一个使用未披露数学与代码 reasoning 数据训练的 DeepSeek-V3.2-Exp-SFT checkpoint 开始。Verifier 输出 issue analysis 和 boxed score。初始 reward 是 `R_format × R_score`，其中 `R_score=1-|s'-s|`；format check 只验证必需短语和 boxed 语法，不验证数学。
5. **Meta-verifier RL。** 专家用 `ms ∈ {0, 0.5, 1}` 评价 verifier analysis，形成 `D_mv={(X_i,Y_i,V_i,ms_i)}`。学习得到的 meta-verifier 对 analysis quality 评分。增强后的 verifier reward 是 `R_format × R_score × R_meta`，verifier 同时在两个数据集上训练。
6. **Generator RL 与 self-verification。** 用 verifier 的 proof score 作为 generator reward，要求 generator 输出证明、自分析和自评分。Reward 为 `R_format × (0.76 R_Y + 0.24 R_Z)`，其中 `R_Z` 将自评分与 verifier score 的一致性同 self-analysis 的 meta-verification 结合（§2.2.2）。
7. **迭代扩展与后两轮自动化。** 改进后的 generator 产生更难证明。早期 hard-proof 标注用多个 verifier analysis 辅助专家；最后两轮完全自动化：先生成 `n` 个独立 verifier analysis；对分数为 `0` 或 `0.5` 的 analysis 生成 `m` 个 meta-assessment，并以多数票确认所述缺陷。如果至少 `k` 个有效 analysis 同意最低分，就赋该分；若全部 `n` 次均未发现合法问题，则赋 `1`；否则丢弃或转人工（§2.3，第 5–6 页）。数值 `n`、`m`、`k`、产出率、类别平衡和人工转交率均为 unknown。
8. **优化序列。** 使用 GRPO，先优化 verification，再从该 checkpoint 初始化并优化 proof generator。从第二轮起，verifier 从一个 rejection-fine-tuned checkpoint 初始化，后者整合前一轮 verification 与 generation 能力（§3.1，第 6 页）。GRPO/RFT 代码、超参数、optimizer 细节、rollout 数、计算量和 checkpoint hash 均未发布。
9. **测试时用途。** One-shot 评测每题采样 8 份证明，并对 8 个 verifier analysis 做多数投票。Sequential refinement 每次最多 128K token，最多 8 次尝试、32 条 thread 和 32 个 verifier analysis；自评分达到 `1` 或预算耗尽时停止。High-compute search 初始生成 64 份证明，每份配 64 个 analysis，保留平均分最高的 64 个 candidate，每个再配 8 个选定 analysis，最多迭代 16 轮，或当某份证明通过全部 64 个 LLM-verifier attempt 时停止（§3.3）。

复现需要未发布的训练记录、专家 protocol、generator/verifier/meta-verifier 版本、`n/m/k`、采样及拒绝记录、reward 代码、GRPO/RFT 实现、split 与污染台账以及 checkpoint lineage。公开仓库提供 inference/evaluation template、部分竞赛输入和 prediction，以及模型权重；这些 artifact 不能重建训练，也不构成训练数据发布。
