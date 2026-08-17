最主要的发布限制是 candidate text 缺失。FineProofs-RL 存储 5,227 个题目、rubric 与分数总体，却不含任何获得这些分数的证明尝试；成功与失败生成均不可见。逐尝试的 GPT-OSS-20B assessment、提取错误、grader token、展开后的 prompt input 与 judge rationale 也未发布。用户无法用该数据重现某个分数、审计数学内容、研究 judge 错误，或训练于隐藏的证明。

名义离线预算存在未解释的例外。在 5,227 条记录中，4,773 条含 128 个分数，453 条含 62-127 个分数，另有一条含 256 个分数。计数与数组内部一致，但论文和 dataset card 都没有解释 interruption、retry、duplication 或 aggregation 行为。复用者应保留实际 list length，不能假设每条记录固定有 128 个 candidate。

curriculum filtering 改变了可见题目分布。在线流程排除很容易的 prompt，也排除在难度 rollouts 中从未成功的全部 prompt。这样会在混合成功率数组中保留部分失败尝试，却删除最难的全失败总体。论文没有发布筛选前语料、accepted/rejected manifest 或衡量选择效应所需的反事实训练结果。

verifier 是 learned judge。GPT-OSS-20B-medium 可以给部分分并应用细致 rubric，但不能形式化证明或否定输入论证。论文中的人工对比发现它有时更宽松，并在 IMO 2025 Q2 上出现明显不一致。false acceptance、false rejection、风格偏好、rubric 歧义与 reward gaming 仍可能发生。发布中没有版本化 calibration set、refresh policy、逐尝试置信度或 adversarial judge audit。

来源与去污染谱系较粗。每条记录只有 `aops` 或 `olympiads` 标签，缺少稳定来源 URL、竞赛 ID、年份元数据和 item-level rights。论文报告排除 2025 年竞赛题、与 IMO-ProofBench 和 ProofBench 做 fuzzy matching，并进行 exact deduplication，但没有披露 threshold、candidate pairs、reviewer decisions 或 overlap logs。prompt-level filtering 也不能解决模型预训练污染。

split 语义需要谨慎处理。主 FineProofs-RL repository 只有一个 5,227 条记录的 `train` split，没有内部 validation 或 test split。FineProofs-RL-test 是另一个官方 dataset repository，包含配置加载的 128 条 `test` 记录。用户不能混合这两个身份，也不能自行推断随机 split。没有发布 manifest 在 item level 说明两者与原始竞赛来源的关系。

许可信息仍不完整。FineProofs-RL 声明 Apache 2.0，代码和 model card 也使用 Apache-2.0，arXiv 论文为 CC BY 4.0。但这些顶层声明本身不能确立对抓取的 AoPS 帖子、竞赛题目或解答、以及模型生成衍生物的权利。已检查的 AI-MO/aops 与 AI-MO/olympiads cards 没有明确 repository-level license。因此，再分发与生产使用需要单独审查 source-item rights。

复现还需要不可变版本固定。本卡证据使用 code commit `02a4699ed380f8e980a8d44c755b8bfd4e310718`、FineProofs-RL revision `61c9ade2e04ab4ee7e257434e0826cb9b737f63e`、FineProofs-RL-test revision `f2f55ba4a125aa0cb2fde0e3e75df9ce8971774a` 与 QED-Nano model revision `1016ddef8dd40552b97216ce34e3fece2fffa2bb`。repository 没有 immutable release tag，未固定链接可能发生漂移。

训练和 inference 结果高度依赖预算。SFT 导致重复与长度过长，早期 RL 据报约 60% 尝试发生 truncation 或 overflow。Reasoning Cache 摘要可能遗漏必要 proof state，也可能保留错误计划。测试时，RSA 平均每题约 205 万 token，而单轮约 9.37 万 token。因此，准确率差异不能仅归因于更好的后训练数据或模型参数。

会实质阻碍完整审计的 unknown 包括：原始离线与在线证明、与状态对齐的 Reasoning-Cache 轨迹及摘要、证明特定的 judge output、非 128 计数解释、完整 rejected-prompt 与 decontamination logs、行级 provenance、上游权利、同行评审 venue，以及带 tag 的 paper-exact release。这些缺口支持 `status: partial` 与 L4 双语待审状态，而不支持更高 workflow state。
