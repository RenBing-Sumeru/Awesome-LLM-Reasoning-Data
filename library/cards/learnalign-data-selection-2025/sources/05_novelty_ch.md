既有 selectors 依据 perplexity、长度、不确定性、外部模型、SFT-oriented gradients 或全量训练 influence 为 instructions 评分。LIMR 与 one-shot RLVR 等先前工作说明小 prompt set 也可能有效，但 selection 期间需要大量训练。LearnAlign 的具体变化是按 GRPO objective 计算 alignment，并在 cosine normalization 后用 p(1-p) 补回类似 magnitude 的 learning-potential 信号。

两两分数的行平均偏向同时处在 warmup 后 policy 当前能力边界、又与较大 pool 方向一致的 prompts。这样一来，consumer policy、verifier 和 checkpoint 就成为 data-construction lineage 的组成部分，而 selected IDs 不再被视作永恒的数据质量。

Gradient alignment、success-rate difficulty、random projection、top-N selection 和 binary RLVR rewards 单独看都不是新概念。LearnAlign 也不是新的 verifier、dataset release、process-supervision source 或完整 online curriculum。对 atlas 而言，其方向价值来自组合 recipe，以及“selection compute、scoring state 与 rejected candidates 都是 RLVR data artifact 的实质部分”这一证据。
