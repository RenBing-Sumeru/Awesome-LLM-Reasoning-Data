论文在七项任务和多种 GPT-2、T5 学生规模上报告了消融与对比。表格比较 full-thinking training、average chunking、Search-Based Chunking 与 Skip-Thinking Training；延迟分析则显示，提速取决于具体任务能够省略多少 chunk。作者还指出，Last Letter Concatenation 的各子任务几乎没有可移除的中间推理，因此会保留近乎完整的过程，Skip-Thinking 并不会对所有任务产生同等缩短。

这些实验支持的是较窄结论：在所研究设置中，该训练与删除流程可以在显式 rationale 长度和任务准确率之间形成取舍。它们不能证明每个被跳过的 chunk 都确属“非推理”，也不能证明教师 rationale 忠实或派生记录构成高质量可复用数据集。ACL Anthology 正式论文与引文已经核实；未确认官方代码仓库、rationale 包、chunk 标签、训练模型或条目级构造日志。
