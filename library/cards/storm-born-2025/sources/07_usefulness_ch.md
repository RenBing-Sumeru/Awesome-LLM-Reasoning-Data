对 `data_construction_open_release_recipes` 而言，STORM-BORN 是把完整科学文档转换为 reasoning supervision 的紧凑案例。构建者可以复用六角色分解：expression extraction、dependency-aware question drafting、source-answer retrieval、context recovery、self-contained rewriting 与 answer-type filtering；同时应把不透明 web interaction 替换为版本化调用，并保留全部中间记录。

对 SFT，100 个 `question`/`whole_label` pair 提供长篇、LaTeX 密集的 target，强调 derivation/proof 而不是短 numerical answer。73-row train split 可直接加载，但体量很小，结果容易受 seed 影响；它与 test 存在 source overlap，因此需要按 document 重新切分或显式披露。训练时应保留 `paper` 并增加 page/equation evidence，而不是删除 provenance。

对 evaluation，27-row 开放式 test 可支持 expert-scored derivation study，两个内容相同的 27-row choice variant 则提供成本较低的 exact-letter proxy。完整 100-row choice file 可用于受控诊断，但若与发布的 train split 混用会产生 leakage。报告 option accuracy 前，应检查 distractor 是否逻辑错误、是否可由风格识别，或是否跨样例复制。

该数据尤其适合研究 verifier limit。可以比较 source-span checking、independent mathematician、proof-oriented LLM judge、symbolic spot check 与 multiple-choice conversion；测量 algebra slip、unproven assumption、notation misuse、logical leap 等错误；并量化 self-contained prompt 需要多少 source context。论文自己已警告 LLM judge 会高估错误推导，因此独立 calibration 必不可少。

复用等级：完成 source/license review、evidence reconstruction、安全 secret handling 与 source-disjoint split 后，可条件用于 `sft` 与 `evaluation`；也适合作为 document-grounded reasoning data 的审计种子。它不能支持完整复现 2,000→100 selection process，也不是 preference/reward dataset 或 formally verified proof corpus。Benchmark gain 与低 solve rate 不会消除这些边界。
