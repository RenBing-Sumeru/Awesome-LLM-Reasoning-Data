最主要的限制是 semantic verification。Lean compiler 能证明形式文本在某个环境下具备特定性质，却不会将其与预期自然语言数学含义比较。Statement rows 含 `sorry`，所以 elaboration 成功并不是命题存在 proof 的证据。Learned back-translation/NLI layer 增加了语义信号，但存在论文明确记录的 false positives 与 false negatives；Table 4 中 151 个 passed 只有 101 个 correct，是最直接的定量警告。

公开代码无法重放 construction recipe。Generator model 与 checkpoint、完整 prompts、decoding settings、retries、token 或 compute budget、random seeds、embedding model、retrieval index、traversal implementation 与 checkpoint selection 均未知。Appendix prompts 含省略号。关联代码仓库只实现 inference 与 evaluation，不含 Mathlib extraction、dependency scheduling、corpus generation、augmentation、proof integration、sampling 或 packaging。

Source 与 row lineage 不足。Statement rows 不标识 Mathlib source file 或 declaration、精确 Mathlib revision、original/tactic/informal branch、generator run、prompt version、retrieved example、compiler result 或 transformation history。Proof rows 保留 `name` 与 `header`，但仍缺失大部分 build record。论文所报 1:2:1 mixture 无法从公开行重建。

Sampling 与 rejects 缺失。对相似 tactic states 与 informal variants 的随机下采样没有 similarity criteria、seeds、candidate counts 与 retained IDs。Generated candidates、compiler rejects、near-duplicate groups、unsampled variants、retries、expert feedback decisions、NLI outputs 与 validation logs 均未发布。审计者只能检查 survivors，无法测量 rejection rates 或 selection bias。

两个数据集都只有 `train`。没有 development/test split，也没有 source-file、declaration-family 或 dependency-component partition。论文未报告 Herald 相对 miniF2F、ProofNet、Extract-Theorem、College CoT 或相关 pretraining corpora 的 exact/semantic overlap audit，因此 decontamination 必须保留为 `unknown`。

Coverage 具有选择性。Term-style proofs 被排除，使 proof corpus 偏向 tactic-oriented Mathlib developments。部分自然语言记录仍保留 Lean identifiers 或形式记号，diagrammatic 与 category-theoretic 内容仍较困难。Multilingual 与 implicit-condition augmentation 虽可增加表面多样性，却也使 semantic preservation 更难审计。

Release identity 是碎片化的。Statement、proof、model、code 与 Lean environment 各有独立已验证 revision，但没有 named release 将它们绑定。接收版 ICLR 论文与 arXiv v2 的模型分数不同。Herald artifacts 声明 Apache-2.0，但关联 Lean helper 未检测到 license，rows 也缺少精确 source revision、attribution、generator terms 与 human-annotation consent/provenance。
