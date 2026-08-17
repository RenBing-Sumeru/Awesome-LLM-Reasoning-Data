**输入 → 生成。** 输入来自 MATH-500、AIME24、AIME25 或 GPQA-Diamond 的题目与答案。target model 包括 s1.1-32B、LLaMA-3.1-8B-Instruct、DeepSeek-R1-Distill-Qwen-32B、QwQ-32B 和 s1.1-3B；对应报告的 draft partner 依次为 s1.1-7B、EAGLE3、DeepSeek-R1-Distill-Qwen-7B（供两个 32B 推理模型使用）以及 Qwen2.5-0.5B-Instruct。实验以 OpenR 为脚手架，budget forcing 将顺序生成的输出长度控制为 1,024、2,048、4,096 或 8,192 token。（论文 §4.1）

**并发搜索 → 候选。** 一个配置指定输出长度、分支数 `B` 与 speculative draft length。branch-wise scaling 并发产生多个回答候选；sequence-wise scaling 让 draft model 提议多个 token，再由 target model 验证。附录 A.2 对五组 target/draft 配对报告的汇总接受率分别为 0.831、0.897、0.781、0.904 和 0.701。其扫描包含 draft length `{2, 4, 5}` 与分支数 `{1, 4, 16, 64}`；按任务选出的最优配置使用 `{8, 16, 32}` 中的 `B` 和 `{3, 4, 5}` 中的 draft length。（附录 A.2，Figures 11–13）

**选择 → 评测。** 候选最终答案通常通过 majority voting 聚合。v4 消融把最小或平均 token confidence 与 max selection 或对相同答案的 voting 组合。系统记录准确率和墙钟延迟；Tables 1、3 报告三次重复实验的均值与标准差。答案抽取、归一化、平票处理、逐候选正确性和置信度记录均未发布。

**配置优化。** Algorithm 1 从 baseline 出发，分别评测 branch-wise 与 sequence-wise 扩展，在延迟预算内保留更有用的可行方向，并迭代至进一步扩展不再改善配置。分支数按 2 的幂增长，draft length 每次增加 1；Table 2 将其与 56 步 grid search 比较。该流程只用于评测和 test-time compute，不生成或使用 SFT/RL 数据。

复现时必须固定加速器与主机、target/draft checkpoint、OpenR/运行时版本、精度与 kernel、请求/批处理条件、prompt 顺序、解码参数、随机种子、答案 scorer 和计时协议。论文未披露这些细节及原始运行清单。
