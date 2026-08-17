正式记录为 Findings of the Association for Computational Linguistics: EMNLP 2025 论文（第 17124–17137 页）；arXiv v4 更新于 2025 年 9 月 12 日。论文追问：为何按 token 计算的最优 test-time scaling 策略不一定在延迟上最优。低请求量推理可能受内存带宽限制；拉长单条推理链虽可能提高 token efficiency，却未充分利用加速器算力，而并发生成多个分支在初始阶段可用很小的额外延迟换取更高吞吐。适用边界由作者明确给出：该论点面向设备端或工作站等小中规模负载，不覆盖同时处理数百或数千请求、主要受计算限制的大型服务器。（论文 §1、§3.1、§7；附录 A.4）

本卡关注的是评测记录，而非已发布训练集。一条可审计记录应包含 benchmark prompt 与答案、target/draft model 配对、输出长度预算、分支数、speculative-decoding draft length、候选答案、聚合规则、实测墙钟延迟及最终准确率。评测面包括 MATH-500（500 题）、AIME24（30 题）、AIME25（30 题）和 GPQA-Diamond（198 题）。由于候选分支集合、选择方式和测试时预算共同决定被评测行为，该工作归入 `rollout_search_test_time_trace_data`；它没有提供过程标签、学习式 reward 或公开候选轨迹语料。（论文 §4.1）

官方会议论文、表格和附录足以支持双语内容审查，但不足以回放实验：硬件、运行时版本、原始候选、逐题配置映射和计时日志仍不可得。
