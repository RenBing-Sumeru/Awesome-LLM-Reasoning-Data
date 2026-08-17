本卡的首要论文来源是 2025 年 9 月的 arXiv:2509.06501v3。OpenReview 确认该工作曾投稿 ICLR 2026，但当前页面不能证明已被接收。arXiv PDF 与官方 GitHub/Hugging Face 引用均列出 15 位作者，其中包括 Zijia Wu；当前 OpenReview 元数据只列 14 位并遗漏该作者。因此，本卡采用论文中的 15 人作者表，同时保留这一差异，而不是静默合并版本。

论文处理的具体问题，是开放网页智能体缺少足够困难的信息检索问题和成功的长程搜索示范。作者指出，即便初始问题需要跨多个网站，只要含有直接搜索线索，对强模型仍然过于简单。WebExplorer 不再显式构图，而是从 Wikipedia 实体出发让模型探索信息空间，再在保持答案不变的前提下反复删除或模糊线索（论文 §§2.2–2.4；附录 B）。

这里必须区分三种相互关联的数据对象。第一，论文报告 WebExplorer-QA 含约 40K 条演化后的 query-answer 对。第二，监督微调使用约 13K 条经过 rejection sampling、只保留正确结果的 ReAct 轨迹，轨迹包含 thought、search/browse 调用、observation 与最终回答。第三，强化学习直接使用约 12K 条 QA，并在线生成 episode，再由格式合规性和 DeepSeek-V3 最终答案判断共同评分。然而，当前官方公开数据只有 100 条含 `id`、`query`、`answer` 的记录，并不是 SFT 或 RL 轨迹发布。

该工作属于 `environment_agent_trajectory_data`，因为论文明确了轨迹结构、实时 search/browse 底座、监督附着位置和 episode 奖励；但它不是封装好的可重置浏览器环境、过程标签数据集或完整公开轨迹语料。双语正文已达到可收集深度，但由于论文规模数据、split、teacher、训练代码、确定性 replay 与污染控制仍未解决，artifact 继续保留在 L3。
