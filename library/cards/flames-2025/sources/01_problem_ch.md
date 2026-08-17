ACL Anthology 官方记录将 FLAMES 列为 Findings of the Association for Computational Linguistics: EMNLP 2025 论文，2025 年 11 月发表，页码 24746–24766。可核验材料包括 21 页论文全文及附录、Responsible NLP Checklist、ACL BibTeX、DOI 与 arXiv:2508.16514。论文页和已检查的作者论文页都没有链接官方 FLAMES 数据集、构造代码仓库、模型或项目页。

FLAMES 研究的问题是：在其他选择保持不变时，合成数学数据管线中的单个决策如何影响学生模型。此前的题目合成工作使用不同 seed set、problem generator、solution teacher、filter、student 与评测设置，很难做跨论文归因。FLAMES 固定一套公共 scaffold，依次比较 10 个继承 agent 与 2 个新 agent、6 种质量控制、2 个 problem generator、2 个 solution generator、不同数据 mixture 和不同 student model。

一条预期 SFT record 包含一道合成数学题、一条 Qwen2.5-Math-7B-Instruct 作答过程以及可抽取的最终答案。在记录形成前，agent 可能读取 GSM8K/MATH seed problem 及 solution 或主题 taxonomy，并产生 key concept、修改建议、组合子题、reverse question 或 distractor 等中间对象。最终论文配方先做题目 exact deduplication 和 GSM8K/MATH 8-gram overlap filter，再直接保留教师生成的**第一条** solution，不做独立 solution verification。

该论文属于 `data_construction_open_release_recipes`，因为它给出了 prompt sourcing、agent transformation、teacher solution generation、filtering、mixture design、SFT 与 evaluation 的受控配方。但它不能作为开放 FLAMES corpus 的证据：没有核验到可下载记录、稳定 ID、row schema、接纳/拒绝账本或 construction code。双语 Card 已达到 `L4_chinese_review_ready`；由于 artifacts 缺失，发布状态仍为 `partial`。
