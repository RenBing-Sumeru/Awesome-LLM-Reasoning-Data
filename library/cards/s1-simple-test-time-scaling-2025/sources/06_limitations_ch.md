**Judge 与 label validity。** Claude 3.5 Sonnet 判断每个 Qwen attempt 是否匹配 source solution 并分配 domain；Claude 3.7 后续判断 final Gemini correctness。公开 feature table 只保留 Boolean decision，缺少 Qwen attempt、Claude rationale、校准 human audit 与 API snapshot。false accept/reject 会同时改变 difficulty filtering 和报告的 53.6% 比例。长 trace 可能来自 verbosity、loop 或早期错误，而不表示困难或有用 reasoning。

**Selection bias 与 non-determinism。** difficulty 由 Qwen2.5-7B/32B 的失败定义，因此 s1K 可能过度选择只对目标模型系列特别困难的样本。论文的 uniform-domain algorithm 与 notebook 的 two-phase domain schedule 不同。notebook 没有设置 NumPy seed；final item ID、rank、probability 与 selection ledger 均缺失。仅凭已检查 notebook 无法精确再生成 s1K。

**中间链断裂。** `qfq/train` 与 `qfq/train_featurized` 各有 59,029 行，但 feature column 的拼写与 notebook 预期不一致。notebook 加载的 `qfq/geminiall` 在未认证时返回 401。最接近的公开 generated pool 有 58,986 行，少 43 行，且没有 missing-ID 说明。独立 s1-teasers 发布也有 24 行，而论文 pool 计为 23。

**Teacher 与版本漂移。** 论文固定 Gemini 的 `-1219` experimental revision，代码却调用无版本 alias，也没有 decoding parameter 或 API snapshot。仓库没有 tag 或 GitHub Release。README 目前重点展示 s1.1；s1K-1.1 换成 DeepSeek-R1 trace 并标为 MIT，而原始 s1K/model/data card 标为 Apache-2.0。后续 artifact 不能静默替换论文事实。

**污染与许可。** word-level 8-gram 会漏掉改写、翻译或结构等价题，也可能拒绝无害 boilerplate。removed ID 与 match evidence 不可用。16 个上游来源包含 Apache-2.0、MIT、CC BY 4.0 与 CC BY-NC-SA 4.0，但 final row 没有逐来源 license field，也没有说明如何在顶层 Apache 标签下协调再分发。

**Budget-forcing 与评测限制。** 反复注入 `Wait` 可能产生 repetition、overthinking、context exhaustion 和非单调收益。即使 greedy sampling 与 fixed seed，vLLM evaluation 仍随 batching、continued generation 与 tensor parallelism 变化。budget forcing 控制 inference behavior；它不验证 underlying trace，也不能保证额外 token 提高正确性。
