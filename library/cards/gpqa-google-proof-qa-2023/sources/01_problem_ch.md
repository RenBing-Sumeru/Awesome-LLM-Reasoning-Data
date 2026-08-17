GPQA 提供 448 道专家编写的 Google-proof 科学选择题，用于困难领域推理和 scalable oversight 评测。 主来源是arXiv 2311.12022 和官方 idavidrein/gpqa 仓库。

它回答的具体问题是：如何评测连有网页访问的高技能非专家都很难回答的科学问题。决策边界是专家编写的选择题评测，不是开放证明 benchmark 或训练轨迹发布。

数据对象或评测面是448 道由生物、物理、化学领域专家编写的选择题，包含选项、正确答案和验证元数据。它对 atlas 的价值在于把反馈契约说清楚：对 gold multiple-choice answer 做 exact match。
