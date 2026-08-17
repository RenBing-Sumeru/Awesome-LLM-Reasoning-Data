对 **Data Construction & Open Release Recipes** 而言，Coral 最适合作为把 multi-turn self-play 转为受控 next-turn preferences 的 blueprint，以及 collaborative-agent data 的 disclosure checklist。

1. **保留 raw tree。** 保存 problem/split/revision、gold answer、prompts、active role、完整 prefix、全部五个 siblings、随机继续的 sibling、五个 tree IDs、token usage、errors 与 stop decisions。最终 DPO row 无法恢复这些 construction history。
2. **审计 mixed verifier。** 发布 extraction prompt/model revision、raw extractor output、normalized belief、match decision、invalid cases 与 expert adjudication samples。按 task 与 context length 测量 extraction false positives/negatives。
3. **分离 outcome 与 collaboration quality。** 将 partial progress、clarification、persuasion、assertion、verbosity 与 politeness annotations 与 final-answer correctness 分开保存。答案正确不代表每个 turn 都好；缺 final answer 也不代表 turn 完全无用。
4. **构造 context-controlled preferences。** Same-prefix siblings 是隔离 next-turn choice 的有力设计。应发布全部 eligible positive/negative siblings 与 sampling decisions，以审计 pair selection bias 和 easy-problem caps。
5. **协调 executable settings。** 为每个 model/task 发布 immutable paper-run command，包含 two-pairs/20-per-problem caps、8,192-token policy、generation knobs、seeds、dependency locks、prepared splits、checkpoint hashes 与 logs。
6. **补全 task 与 release surface。** 增加 MBPP-CR construction，修复 GPQA naming，并发布 conversations、SFT/DPO rows、rejects、failures、checkpoints、data/model cards、licenses 与 contamination reports。

可复用 training form 是 answer-level SFT 或 pairwise preference learning。它不是 process supervision、scalar reward modeling，也不能证明 social metrics 被优化。Downstream user 可以用 code 与 upstream tasks 重新生成一个 Coral-style corpus，但缺少 run manifests 与 prepared splits 时，不能声称复现了论文数据。

Raw tree 还适合论文最终 DPO transformation 之外的研究：比较 branch selection、估计 correct-minority survival、测试 independent belief extractors、建模 belief transitions，或在固定 answer correctness 下评估 social behavior。这些用途要求保留 siblings 与 failures，而不只是 selected pairs。

Reuse classification 是 **recipe/audit reference with conditional code reuse**。Code 与 Matrix infrastructure 以 MIT 提供；synthetic training data 与 trained models 不可用，其条款未知。Benchmark gains 是 evaluation evidence，不能替代 data provenance、verifier calibration、split audit 或 model documentation。
