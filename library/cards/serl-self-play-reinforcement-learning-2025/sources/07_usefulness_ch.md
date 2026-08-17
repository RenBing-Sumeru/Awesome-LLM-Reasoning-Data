对 **Data Construction & Open Release Recipes** 而言，SeRL 最适合作为 online self-play blueprint、self-consensus reward 审计对象，以及 release-completeness 案例。

1. **训练前先复现 data object。** 每个 generated question 都应保存 eight-shot context、seed/generated context labels、generation settings、全部 filters、16 个完整 responses、extracted answers、equivalence matrix、selected majority、binary rewards、step、policy hash 与 iteration。只有 prompt 的文件不足以审计。
2. **区分 agreement 与 truth。** 在有 ground truth 时用 held-out truth 评估 majority cluster，按 majority ratio 分层并报告 wrong-consensus rates。应把 majority agreement 与独立 verifiers 或 expert review 比较，而不是把 reward 1 当作 correctness。
3. **审计 tie 与 exception 行为。** 测量 Math-Verify extraction/grading exceptions，保留其输入，并比较 first-maximum、shortest-answer、deterministic canonicalization 与 ambiguity-aware tie policies。
4. **协调 executable recipe。** 为每个 backbone 发布一个 immutable config，解决 2-seed/6-generated 对 6-seed/2-generated context、shortest-answer tie-break、micro-batches、initial KL、7,500 instructions、dependencies、seed IDs、RNG state 与 checkpoint selection。
5. **Deduplicate 并 version generated questions。** 解释 7,532-row snapshot 中的 2,802 条 duplicate prompts，为每个 iteration 发布 unique-count 与 near-duplicate statistics，并把每个文件绑定到 generating checkpoint 与 filter state。
6. **补充 release ledger。** 发布 accepted/rejected generations、failures、expired groups、responses、rewards、logs、checkpoints、manifests、dataset card、component licenses 与 semantic contamination results。

可复用部分是 **recipe 与 audit scaffold**，不是 paper-exact trajectory corpus。代码可支持受控重实现 online question generation、Math-Verify clustering 与 Reinforce++ updates；bundled 500-row seed 与 static prompt files 可用于测试 parsers 和 deduplication，但不应被表述为报告结果所用的完整 training data。

直接有证据支持的主要 training use 是使用 answer-level/full-response scalar rewards 的 RLVR-style response optimization。该数据不是 process supervision：responses 含 chain-of-thought，但单个 reasoning steps 没有 correctness labels。对 generated questions 来说，它也不是 ground-truth-verifiable RL。若用于 reward-model training、preference learning 或 clinical deployment，需要额外 labeling 与 review。

一个审计充分的衍生版本若能保存 evolving curriculum 与 negative evidence，会使 SeRL 对本 track 更有价值。Wrong consensuses、verifier exceptions、lexical rejects、expired groups 与 duplicate clusters 不是无关废料，而是理解 self-play data loop 成败所必需的记录。
