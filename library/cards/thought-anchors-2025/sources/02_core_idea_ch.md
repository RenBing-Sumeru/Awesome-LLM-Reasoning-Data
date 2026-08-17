核心干预发生在 prefix 上。设 base trace 包含句子 \(S_1,\ldots,S_i,\ldots,S_M\)。在 keep condition 中，生成从 \(S_i\) 之后继续；在 remove condition 中，prefix 在 \(S_i\) 之前结束，因此模型从该位置采样替代句子与余下 trace。论文对每个条件各采样 100 条 continuation。这两个经验答案分布——而不是某一条被选中的 completion——才是主要反馈对象。

句子重要性通过两类相关指标衡量。accuracy importance 比较到达 MATH 参考答案的概率变化；resampling importance 使用两个最终答案分布之间的 KL divergence。counterfactual importance 进一步把 remove/resample 一侧限制为与原句语义不同的替代句：使用 all-MiniLM-L6-v2 embedding，cosine similarity 必须低于 0.8，即原句/重采样句对的报告中位数。另一个 forced-answer branch 会在每个位置中断 trace，追加以 “Therefore, the final answer is \(\backslash\)boxed{” 开头的文本，再采样 100 个 completion。

反馈契约是 mixed，而不是学习得到的 reward。仓库代码抽取并规范化 boxed answer，与 MATH ground truth 比较，并保存正确性以及 accuracy、KL-based importance、`different_trajectories_fraction`、`overdeterminedness` 等经验分布指标。OpenAI GPT-4o 在 2025 年 4–5 月加入八类句子功能标签与直接依赖标注。这些标签是模型判断而非人工 gold；终止正确性 predicate 仍是程序化的。

发布数据对象保留了这一过程的多层结构。原始问题目录包含 `problem.json`、`base_solution.json`、`chunks.json`、`chunks_labeled.json` 与 `chunk_X/solutions.json`。一条 continuation record 可以包含被移除的 chunk、不含该 chunk 的 prefix、重采样 chunk、完整 CoT、抽取答案及 `is_correct`。Hugging Face 的 dataset-compatible layer 并未把每条 continuation 展平成一行；相反，每行代表一个文件，并包含 `path`、`filename`、`extension`、`size_bytes` 与文本 `content`。

“thought anchor” 是论文对具有显著下游影响的句子的解释，尤其指规划或不确定性管理句。由于用户可以检查派生分数之下的 continuation evidence 与负面结果，发布对象支持对这一解释进行审计。但它并不证明每个高 KL 句子都是语义忠实的原因，也不证明 anchor 总是有益，更不证明 trace 文本完整反映模型内部计算。
