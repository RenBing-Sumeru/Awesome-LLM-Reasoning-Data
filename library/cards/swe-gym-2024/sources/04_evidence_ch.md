arXiv 摘要验证了主要数量和 claim：2,438 个 Python task instance；每个实例包含 codebase、executable runtime environment、unit tests 和自然语言 task；作者报告在 SWE-bench Verified 与 Lite 上最高取得 19 个百分点的 resolve rate 绝对提升。

同一摘要还报告了用 SWE-Gym trajectory 训练 verifier 做 inference-time scaling，并在 open-weight SWE agent 上组合达到 SWE-bench Verified 32.0% 与 SWE-bench Lite 26.0%。

官方 GitHub README 验证了作者单位、ICML 格式引用、来自 11 个 Python 仓库的 2.4K 任务、234 实例 Lite split、Hugging Face 上的公开数据/模型、SWE-Bench-Fork 中的 environment constants、预构建 Docker images，以及 OpenHands 和 MoatlessTools 的复现文档。

对 artifact 存在性、任务形态和 headline result 的证据质量较高。精确的训练轨迹过滤、model checkpoint 和 verifier variant 在复用前仍需对照论文与 release revision。
