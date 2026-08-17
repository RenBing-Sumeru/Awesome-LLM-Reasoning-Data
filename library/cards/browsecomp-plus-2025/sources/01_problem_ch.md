BrowseComp-Plus 研究如何在评测 deep-search agent 时避免动态 live web 把检索质量、答案合成与引用行为混成一个无法分解的分数。正式书目记录是 ACL 2026 论文 *BrowseComp-Plus: A Fair and Disentangled Evaluation Benchmark for Deep Search Agents*。Card 的 stable ID 依据 arXiv:2508.06600 在 2025 年的首次提交保留 `-2025`，但标题、年份、venue 与 21 位作者采用正式 ACL 版本。

公开 benchmark 的基本单位是从 BrowseComp 筛选出的 830 个查询之一；每条查询配有短参考答案，并在固定的 100,195 篇文档语料上提供 document-level supervision。query release 包含 `query_id`、query、answer、evidence document、gold document 与 negative document；除 `query_id` 外的 payload 均做了可逆混淆。corpus 公开 `docid`、text 与 URL。Hugging Face 把该 corpus 的 split 标为 `train`，但这只是打包标签：论文没有证据表明语料或 benchmark record 用于模型训练。

evaluation surface 不止是 question-answer pair。search agent 与公开 index 交互，每次接收 top-five 结果且每篇文档截断为 512 tokens；报告的消融实验还可选用 `get_document` action；最终输出 explanation、numeric document citation、短答案与 confidence。公开 episode file 可包含有序 tool call、tool output、可用时的 reasoning summary、usage、retrieved document ID、terminal status 与 final output。

这种 task-plus-fixed-environment-plus-episode 结构使论文归入 `environment_agent_trajectory_data`。本卡不能与 `browsecomp-2025` 合并：BrowseComp 仍是包含 1,266 个问题的 parent source benchmark，而 BrowseComp-Plus 只保留 830 个问题，并新增 frozen corpus、人类 evidence/gold qrels、hard negative、index、grader、可执行 client 与部分 trajectory release。accepted metadata 仍为 `L3_summary_ready` 和 `partial`；本卡达到双语与审计所需的内容深度，但不预先批准 Review 状态，也不声称可以完整 replay。
