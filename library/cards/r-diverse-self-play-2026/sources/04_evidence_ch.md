Table 1 在七个数学与三个通用推理 benchmark 上报告：五轮 R-Diverse 将 Qwen3-4B-Base 的 Math AVG 从 42.58 提升到 52.59，将 Qwen3-8B-Base 从 49.18 提升到 56.46；三轮版本分别为 50.68 与 55.40。Overall AVG 在 4B 上从 27.10 变为 36.68，在 8B 上从 34.49 变为 40.75。除 AMC 与 AIME 使用 mean@32 外，评测采用 greedy pass@1。这些结果衡量作者协议下的训练模型，不能验证每个生成问题、伪标签、代码抽象或回放记录。（论文 Table 1、§4.1。）

Qwen3-4B 消融中，完整方法的 Math AVG 为 52.59，去除 MAP 后为 49.62，去除 memory replay 后为 51.18，去除 SAM 后为 50.50；同时去除 MAP 的最大与平均相似度项得到 49.88，去除 representation abstraction 得到 50.79，去除 embedding-based similarity 得到 51.05。这些比较支持各组件会影响报告结果，却不能把 record quality 与 optimizer dynamics 分离；论文没有报告 seed 与多次运行方差，也不能据此断言统计稳定性。（论文 Table 2。）

论文也测量了所提出的失效模式。R-Diverse 中，GPT-4o 对 top-3 历史近邻给出的 duplicate ratio 从 59% 降至 53%，Challenger entropy 从 0.64 升至 0.94；R-Zero 的 duplicate ratio 则从 71% 升至 84%。五轮各抽取 200 道题并用 GPT-4o 生成 ground-truth label，前一轮 Solver 在对应目标集合上的通过率沿对角线保持在预期的 50% 附近，范围为 47.5% 至 50.5%。这些分析与机制对齐，但 SAM embedding 与 GPT-4o judgment 仍是代理，而非公开的 record-level correctness evidence。（论文 §5.3–§5.4、Figure 4、Table 3。）

Artifact 证据明显更弱。2026-07-22 再次检查官方 GitHub 仓库时，页面仍显示一个 commit、README 与图片，没有实现、生成数据、model weight、memory bank、LICENSE、tag 或 release。README 中的 release plan 只是未来计划。因此，即使论文实验已有结果，accepted metadata 仍应保持 `status: partial` 与 `artifact_verified: false`。
