对 **Data Construction & Open Release Recipes** 而言，Herald 是“如何把 formal library 转成 parallel supervision”的具体案例。它展示了多项可复用设计：用 library structure 丰富目标；先翻译 dependencies 再翻译 dependents；检索领域先例；把 proof states 作为额外 data objects；将 formal checking 与 semantic judgment 分离；分别发布 statement 与 proof views。

Statement release 可用于监督式 NL-to-Lean 与 Lean-to-NL 翻译研究。其精确规模是 579,883 条 train rows；反向构造会产生两个 task views，但不会创造新的底层 pairs。研究者在 scaling claim 中应保留这一区分，也不能从发布物推断存在 validation split。Proof release 的 44,553 条 rows 可用于分析或训练 proof informalization 与 commented-proof generation，但论文没有提供受控实验来证明这些 rows 能训练 proof-producing model。

这些数据也适合 audit-method development。Statement rows 是 formal compilation 与 proof validity 分离的清晰案例，因为其中存在 `sorry`。Table 4 为研究 learned semantic judges 提供 calibration target：validation pass 不等于 expert correctness。公开 evaluator code 允许检查精确的“no severity error”规则与 back-translation/NLI stack，而缺失的 row logs 则显示 audit-ready release 还应补充哪些信息。

如果先相对于固定 Mathlib snapshot 重建 provenance，Herald 还可用于 source-aware split 与 lineage 研究。更强的衍生版本应附加 source declaration/file/revision、dependency component、construction branch、prompt 与 model revision、retrieved example、compiler log、semantic-review label，以及 accepted/rejected status。未补充这些字段前，benchmark 使用应独立执行 overlap scan，也不应把随机 train rows 当成无污染 held-out set。

该 artifact 不适合作为开箱即用的 reproduction recipe。重建它需要自行选择未披露 generator、embedding model、完整 prompt set、sampling seeds、精确 Mathlib source，以及每个构造阶段的实现。它也不是 RLVR dataset、preference dataset 或 interactive environment trace。直接有证据支持的 training use 是双向 statement translation 的 SFT；更广泛的 proof training 或 reward-model 用途属于外推。

实际阅读时应分开四个命题：数据可以公开下载；部分形式对象可以被 Lean 检查；translator 在论文 benchmark 上表现较强；natural-language alignment 与完整 lineage 仍只得到部分审计。这四点可以同时成立。
