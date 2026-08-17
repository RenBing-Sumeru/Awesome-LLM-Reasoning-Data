主要来源是 EMNLP 2025 主会论文，第 17135–17148 页（ACL Anthology 2025.emnlp-main.866；arXiv:2505.17829v1）。SRCA 提出一个具体的测试时搜索问题：模型已经花费计算量生成中间推理前缀时，能否从这些前缀中暴露有用的答案假设，而不是在 beam 改变或终止后立即丢弃它们？

论文指出 PRM 引导搜索的两个相连问题。第一，只选择局部高分 continuation 会使不同分支向同一答案或推理方向收敛。第二，传统 tree search 往往只返回少量完成路径，即使某个中间前缀已能支持正确答案，而后续推理反而可能退化。因而其对象不是公开训练数据集，而是一条在线、逐 prompt 的搜索记录：带步骤分隔的前缀、临时 checkpoint completion、PRM 分数、答案簇成员关系、被选 beam，以及可选的以该 checkpoint 结束的重构候选。

报告的评测面包括 GSM8K、MATH500、AIME1，以及 OlympiadBench 中英文数学、无图像的子集。它属于 `rollout_search_test_time_trace_data`，因为它规定了 rollout tree 在推理时如何扩展、打分、保留并变成最终答案。它不是新的过程监督语料或 policy-training recipe 的证据：未核验到 SRCA 代码、数据、轨迹归档或逐记录清单。（论文 §1、§3、§4.1、附录 A.1。）
