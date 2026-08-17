- **难度是条件属性，不是内在属性。** `K` 依赖 policy checkpoint、critic、prompt template、temperature、top-p、expansion width、十步 simulation 上限和 50 轮预算。7B 与 72B 所选集合仅重叠 5.4K，跨规模训练也更弱。未来 Qwen revision 或不同 seed 都可能改变 curriculum。
- **critic 是学习式瓶颈。** Qwen2.5-7B-Instruct 看得到问题、ground truth 与生成的 rationale/answer，却看不到图像。论文未报告 calibration、human agreement、adversarial test 或逐来源错误率。false positive 会提前停止搜索并把样本标成简单，false negative 会把简单样本推入 hard set；流畅 rationale 也可能影响 true/false 判定，却不能证明视觉 grounding。
- **unsolved 混合了多种原因。** 50 轮后失败可能代表目标策略确实觉得困难，也可能来自错误或有歧义的答案、损失信息的选择题转换、图像损坏、critic error、parser/format mismatch 或搜索不足。5.6K 未解样本占 Hard-11K 一半以上，因此独立标签与图像验证会实质影响复用判断。
- **公开 selector 丢弃了最终规则需要的类别。** 在 `mcts.py` 中，只有 solution 非空的行才进入输出；未解行不会以失败状态保存，而论文最终筛选规则却保留它们。因此若没有未公开的额外流程或源 artifact，仓库不能重建 Hard-11K。
- **决策谱系缺失。** 发布物没有全量 `K` 表、critic 决策、random seed、tree expansion、失败轨迹、明确 reject、选择原因、source/split row ID 或逐来源存活数。Hard-11K 是 accepted subset，不是可审计的 accepted/rejected ledger。
- **发布完整度不对称。** 官方 collection 包含 70K pool、Hard-11K 与两个 model checkpoint，但未发现 72B-selected 7.5K dataset；论文明确表示将发布两个规模的筛选训练集。GitHub 项目没有 formal release，而且只按可变 repository 名引用上游模型，未固定 revision。
- **训练复现仍欠缺细节。** 论文披露 Easy-R1、GRPO、32 个 rollout 和 8 张 80GB A100，但没有精确 reward、answer extractor、normalization、完整 hyperparameter、seed、过滤 wall-clock 成本、总采样 token 或 checkpoint selection。作者也把过滤与 GRPO rollout 开销列为限制。（附录 D）
- **评测不确定性披露有限。** 表格只给 point estimate。7B selected 设置在论文中存在 64.18 与 63.89 的内部不一致；尽管 checklist 对 statistical significance 给出肯定回答，所检查结果仍没有重复运行 error bar。较小的 benchmark 差异不应被过度解释。
- **污染与权利信息未解决。** 论文没有给出跨来源去重或训练—评测 overlap ledger。Hub 页面标注 MIT，却没有映射八个上游数据集、图像、标注与转换问题的许可和再分发权；GitHub 仓库也没有顶层 license。统一元数据标签不足以证明可安全训练复用。

这些限制并不否定作者报告的匹配预算结果，而是收窄其含义：论文支持该 selector 在作者 policy、critic、数据混合与评测栈下有潜力；精确数据 provenance、verifier 可靠性与端到端 reproduction 仍然不完整。
