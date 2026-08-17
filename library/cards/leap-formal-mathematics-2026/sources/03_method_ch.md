**输入与任务状态。** 报告使用 Gemini 3.1 Pro 作为 backend。每次运行从 Lean theorem statement、其定义和依赖、Mathlib context、LeanSearch retrieval，以及一个未解决的 root OR node 开始。Lean-IMO-Bench 提供 60 条记录，Basic 与 Advanced 各 30 条；实验还使用 12 道 Putnam 2025 题目和两个组合数学 case study。论文未披露精确 Gemini snapshot、Lean version、Mathlib commit、LeanSearch index、prompt、temperature 或 token limit。

**Direct formalization。** 模型先写 informal proof，再翻译成 Lean，执行 compiler，读取错误，使用 LeanSearch 检索相关材料并修订。在组件实验中，iterative formalization 从一次初始尝试开始，最多进行 20 次 compiler-feedback revision。完整 proof 若被 Lean 接受，则当前目标完成；否则进入分解路径。（Figure 1；§5.1。）

**Blueprint 与搜索路径。** 模型生成包含 supporting lemma 的 informal blueprint，再生成 formal proof sketch；其中 parent proof 必须是 sorry-free，`sorry` 仅可出现在新提出的 lemma statement 中。Lean 检查这一条件化的 parent derivation。LLM reviewer 再单独判断分解是否相关、更容易且可行。state writer 检查更新后 dependency graph 仍为无环；通过的 decomposition 形成 AND node，其子目标形成 OR node。agent 使用 DFS、backtracking 和共享 lemma node，直到支持 root 的某个 AND node 的全部依赖都被证明。（论文 §§2.2-2.5；Appendix C。）

**输出、筛选与用途。** 内部 episode 可包含 informal plan、proof sketch、goal、DAG edge、候选代码、compiler message、reviewer decision 和预算计数器；公开 artifact 只有完成的 Lean proof file，没有上述 episode schema。Tables 2 与 4 将 LEAP 标为 `rollout=2`；Table 3 报告各 Putnam 成功证明使用 46 至约 3,000 次 LLM call、8 至 211 个 active node，以及 300 至约 2,000 行证明。terminal selection rule 是完整 proof 被 Lean 接受。这些输出支持 evaluation、test-time-compute comparison 与 audit，不支持论文已经证明的训练目标。

**复现边界。** 复现时应固定 arXiv v2、仓库 commit `96fa6c4cc3a9bb7450ee7b6773b659d3a030dace`、benchmark CSV、每个 theorem file、Lean/Mathlib/LeanSearch revision、model/API snapshot、prompt、sampling setting、rollout/revision limit，以及逐题 call 与 wall-clock budget。公开物没有 LEAP 实现、环境 manifest 或失败 trajectory，因此可以检查 proof，但不能 end-to-end replay。
