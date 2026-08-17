Orca 2 把教师模仿从复制一种通用风格，改成监督“按任务选择策略”的行为：作者先选策略，GPT-4 编写相应回答轨迹，再用 Prompt Erasing 删除策略说明，使 SFT 必须同时学习具体行为和何时调用它。相对 Orca 1 的通用 explanation tuning，最接近的变化是隐藏的任务—策略决策，而不是新的 optimizer。

Google Scholar 引用数：259（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Orca+2%3A+Teaching+Small+Language+Models+How+to+Reason&author=Arindam+Mitra&hl=en）

开源数据：没有。论文描述了约 817K 条新的 Orca 2 训练记录，但没有发布这些记录、文件格式或数据集许可证。官方入口 https://aka.ms/orca-lm 提供模型权重；权重不能替代底层的任务—prompt—回答数据。
