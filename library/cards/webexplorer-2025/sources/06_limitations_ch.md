论文没有独立的 limitations section。以下边界由明确未披露项与基于数据/反馈契约的 curator inference 共同构成。

**构造与 lineage。** 探索/演化 LLM 和 commercial SFT teacher 均未具名；它们的 snapshot、除附录两份模板外的 prompt、temperature、候选数、retry 与 acceptance yield 均为 unknown。公开记录不含 seed entity、source URL、page snapshot、探索/演化轨迹、SFT 轨迹、split 或训练分配。答案“保持唯一且可验证”被写进 prompt，但没有披露独立 checker 或人工审计。

**选择与保留。** SFT 通过 rejection sampling 只使用正确轨迹。失败尝试、错误最终答案、timeout、tool error 与被拒 evolution 没有发布，因此无法审计 false negative 和 keep/drop 边界。在线 GRPO rollout 及逐 rollout reward 同样缺失。相对论文报告的约 40K 条 QA、约 13K 条 SFT 轨迹和约 12K 条 RL 数据，当前只公开 100 条 QA。

**Reward 风险。** DeepSeek-V3 对照 reference 判断自由形式最终回答；其精确版本、prompt、score scale、normalization、calibration、分歧处理和抗攻击性均未知。它可能奖励语义错误但表面接近 reference 的答案，也可能拒绝等价表达。权重为 0.2 的 format 项会偏好符合协议的输出，却不能证明 reasoning 正确、citation grounded 或中间步骤忠实。

**环境与 replay。** Search 依赖实时 Google/Serper 结果；browse 依赖 Jina、不断变化的网页和 Gemini 2.5 Flash。发布中没有 immutable observation cache、API/model snapshot、reset contract 或 deterministic replay fixture。采集时成功的轨迹未来可能得到不同 observation。

**评测与污染。** 合成 prompt 直接加入 3 条 BrowseComp-en exemplar，演化风格受 BrowseComp 启发，同时 BrowseComp-en/zh 又是评测面。论文没有报告 question、answer、source-page 或 near-duplicate overlap 审计。Figure 5 只显示相关性：轨迹变长和分数同时上升，但没有隔离 data、reward、optimization、sampling 或 budget 的作用。

**权利与版本。** HF dataset/model card 声明 Apache-2.0，OpenReview 使用 CC BY 4.0；但 pinned GitHub tree 虽有 badge，却没有 LICENSE 文件，也未说明被浏览第三方内容的权利。arXiv/GitHub/HF 的 15 人引用与 OpenReview 的 14 人元数据冲突，后者修订 PDF 还把 “web agents” 改成 “deep research agents”。这些问题不否定论文，但引用和复用必须显式固定版本。
