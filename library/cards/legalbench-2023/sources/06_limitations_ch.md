正确性是 task-local 的。LegalBench 答案可以在 label file 下正确，但仍可能是不完整法律建议、过时法律，或真实事务中法律从业者会加限定条件的答案。

该 benchmark 只覆盖英文，并混合法律领域、任务格式和 source lineage。aggregate score 会掩盖 contracts、statutes、judicial opinions、privacy policies 和 synthetic legal hypotheticals 之间的巨大差异。

许可必须按 task 级审计。Hugging Face 页面列出 cc-by-4.0，但官方 GitHub 仓库说明 LegalBench 混合 created 和 transformed datasets，并要求用户遵守 dataset creator 的 license。公开 release 也带来污染风险。
