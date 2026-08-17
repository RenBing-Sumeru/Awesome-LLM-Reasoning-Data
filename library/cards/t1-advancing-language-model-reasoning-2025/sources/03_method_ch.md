输入 → 构造 → 反馈 → 筛选 → 使用的流程如下。起点是 MATH-train 与 NuminaMath。每个 SFT 题目先由未具名 LLM 给出多个答案；各答案与标签比对；错误答案被要求获得 critique，正确答案被要求获得 verification；随后题目、尝试和反馈被合并为一条 chain；若只是罗列方案，则再改写为 trial-and-error 抽象。作者过滤有噪声/不准确标签及简单题。RL prompt 选择阶段对每题采样 16 个答案，仅保留 pass rate 严格位于 0 与 0.3 之间的题，形成文中所称的 30k prompt pool。（Appendix A。）

RL 对每个保留 prompt 以高温采样 K=64 条回复。最终答案正确性 reward 为 1/0，部分坏回复为 -1；reward 用 leave-one-out RLOO 归一化，加入 entropy，并用相对 EMA reference policy、跨 rollout 归一化的 KL 项。报告中每 32 个 prompt 更新一次。SFT 为 3 epochs、学习率 1e-5、cosine schedule；RL 报告学习率 1.5e-6、KL coefficient 2e-4。GLM-4-9B/Qwen2.5-14B 的最大生成长度为 10,240，Qwen2.5-32B 为 16,384。（Appendix B。）

声明的用途是 SFT、带可核验结果的 RL 和推理预算分析。评估为 MATH500、AIME 2024（每个模型平均 32 次运行）、Omni-MATH 与 GPQA 上的 greedy Pass@1。若要复现，还需未具名 teacher model、prompt、答案 parser、坏回复规则/perplexity 阈值、精确 seeds/decoding、optimizer/runtime 配置，以及发布行到构造和实验阶段的映射。检查到的 GitHub 仓库提供 README/LICENSE，而非这套完整可执行 scaffold。
