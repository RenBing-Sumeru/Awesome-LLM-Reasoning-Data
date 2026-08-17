Verifier 证据来自 `D_v` 一个大小未说明的 validation split。加入 meta-verification 后，proof analysis 的平均质量分数从 0.85 提升到 0.96，该分数由学习得到的 meta-verifier 给出；proof-score prediction accuracy 据报告保持不变（论文 §2.1.2，第 4 页）。这对应预期变化——更忠实的问题描述——但 split 大小、置信区间、独立专家确认以及分类别假阳性/假阴性率均缺失。Evaluator 还是方法自身使用的 learned meta-verifier。

91 道内部 CNML-level 问题的 one-shot 结果，对每个模型每题采样 8 份证明，并对 final verifier 的 8 个 analysis 做多数投票。图 1 报告分领域 mean proof score，并显示在该 verifier 下 DeepSeekMath-V2 高于 GPT-5-Thinking-High 与 Gemini 2.5-Pro（§3.3.1，第 7 页）。对 31 道 ISL 2024 问题的 sequential refinement 使用单次 128K token 上限、32 条独立 thread、最多 8 次尝试和 32 个 final-verifier analysis。图 2 报告 Pass@1 从一次尝试的 0.15 升至八次尝试的 0.27，Best@32 从 0.26 升至 0.42；Best@32 由 generator self-score 选择（§3.3.2，第 7–8 页）。这些结果以 learned verifier 为条件，不是形式检查结果。

High-compute 竞赛结果使用同一个 final model 同时生成和验证。每道题从 64 个 proof sample 开始，每份证明配 64 个 verifier analysis；系统保留平均分最高的 64 个 candidate，每个配 8 个选定 analysis，最多迭代 16 轮，或当某份证明通过全部 64 个 LLM-verifier attempt 时停止。随后数学专家评估得分最高的证明（§3.3.3，第 8–9 页）。在这些条件下，表 1 报告 IMO 2025 六题完整解出五题，得分 83.3%；CMO 2024 完整解出四题并有一题获得部分分，得分 73.8%；Putnam 2024 十二题完整解出十一题，最后一题有小错误，得分 118/120，即 98.3%。“64/64”是完整候选证明上 verifier 一致通过的搜索停止条件，不是 Lean/Isabelle 证书。

对于 IMO-ProofBench，图 3 报告专家评分：DeepSeekMath-V2 Heavy 在 30 题 Basic 子集上为 99.0%，在 30 题 Advanced 子集上为 61.9%。DeepSeekMath-V2 证明由作者方专家按 benchmark guideline 评分，而 baseline 数字来自 Luong et al.；专家身份、盲评、agreement 和原始评分记录未发布。论文也指出最难的 IMO-level 问题仍具挑战。

官方仓库核验了模型与评测 artifact：prompt template、inference/search script、部分竞赛输入和带自动/人工 rating 的 JSONL prediction。官方 Hugging Face 页面核验了 685B 权重发布，以及模型/仓库的 Apache 2.0 条款。两个来源都没有发布 `D_p`、`D_v`、`D_mv`、自动 hard-proof 标签、RFT 数据、GRPO 训练代码、reward 实现或有许可的训练语料。上述结果是作者在明确预算和判分条件下的主张，本 Card 不声称独立复现。
