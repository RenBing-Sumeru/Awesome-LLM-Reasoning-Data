论文只评测 WebArena 与 ToolBench。它明确没有解决 cross-environment contamination，没有提供 human-written hindsight-goal upper bound，并依赖两个强 learned judge；残余 judge bias 可能影响罕见 task type。其 noisy-judge 理论假设 error 独立同分布且 marginal harm 有界；作者把它定位为 plausibility argument，而不是 deployment guarantee。

selection 同时存在 false-positive 与 false-negative 风险。人类多数票认为 WebArena 的 MJ-X label 有 2.9% 无效，ToolBench 为 4.0%；在 confidence filter 拒绝的 pair 中，人类认为有效的比例分别为 38.7% 与 35.8%。因此报告的 precision 不能描述 recall 或原始 failure distribution。Algorithm 1 的 `0.4` single-judge fallback 还会削弱“两个 judge 都必须在 `0.5` 一致通过”的简单表述。

已检查代码按当前配置无法复现论文 cross-model judge contract。`AgentHERPipeline` 构造一个 `LLMClient`，把它同时注入 detector、extractor 与 relabeler；`_second_judge` 仍调用同一 client。代码没有分别实例化 gpt-4o-mini 与 Qwen2.5-72B-Instruct service。更严重的是，second-judge acceptance 只检查 `verdict.confidence >= min_confidence`，没有检查 `verdict.is_valid`，因此高 confidence 的否定 verdict 也可能通过。

severity semantics 的方向相反。论文把重大 error 的 weight 设为低于 `0.3` 并将其丢弃；公开 `FailureAnalysis.severity` 则说明 `0=mild`、`1=catastrophic`，rule-based detection 遇到 error keyword 会提高 severity，pipeline 丢弃低于 `0.3` 的值后，又直接把同一值作为 training weight。若不先对齐语义，代码 filtering 与 weighting 就没有实现论文所述含义。

training view 还会丢失 trajectory 内容。SFT 与 DPO 序列化把每条 observation 截断为 300 个字符，而 ShareGPT 保留完整 observation text。DPO 的 chosen 与 rejected 记录使用不同 prompt，一些下游 trainer 未必支持。所有格式都缺少 environment version、state snapshot、reset seed、terminal-predicate implementation、tool/API version、timestamp 与 replay result，因此它们是 offline text record，而不是 replayable episode。

发布完整性是最大的 blocker。在已检查 commit `98072c34db5ee65a22e43f8621b5ec76a9c995e1` 上，没有 dataset release、Hugging Face 页面、tag、GitHub Release、实验 WebArena/ToolBench 语料、accepted/rejected relabeling set、WA split JSON、training script、evaluation script、environment adapter、replay manifest，或完整 annotation UI/guideline/sample ID。repository PDF 早于且不同于 arXiv v4。论文 CC0-1.0 与代码 Apache-2.0 不能证明 trajectory、benchmark content、generated goal、thought 或 observation 的权利。这些缺口阻止直接训练复用与独立分数复现。
