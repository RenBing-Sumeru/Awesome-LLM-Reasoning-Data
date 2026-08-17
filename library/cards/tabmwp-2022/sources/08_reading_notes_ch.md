建议先读 Section 2，再读 PromptPG 方法。dataset formulation、construction filters、split sizes、answer types 和 table representations 是 benchmark curation 所需的核心信息；Section 3 的 PromptPG 则更适合作为研究 in-context example selection 的 baseline family。

scorer audit 需要读 Section 4.1 和官方 repository 的 `evaluate_acc.py` workflow。evaluation contract 按 answer type 不同：free-text numeric answers 用 decimal normalization，multiple-choice answers 会映射到 nearest option。比较 language-only、program-of-thought 和 tool-augmented systems 时，这个差异很关键。

未解阅读问题：一个 reported system 使用哪种 table representation；结果是否使用 train examples、development tuning 或 test-only evaluation；长模型输出如何 answer extraction；当前 leaderboard results 是否使用同一 scorer；non-commercial dataset license 如何影响 derived collections 的再分发。
