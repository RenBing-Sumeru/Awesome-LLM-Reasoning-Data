**Belief extraction is a fallible judge.** The same model family extracts beliefs from its own generated turns. Long reasoning and long contexts can cause invalid or wrong extractions. A rule-based gold matcher cannot correct a belief that was extracted incorrectly, and public artifacts contain no extractor outputs or false-positive/false-negative audit.

**Binary answer labels are not process labels.** A useful intermediate turn that advances reasoning without explicitly stating the correct final answer is negative, just like a fully wrong turn. This can favor early answer restatement over exploratory questions, error localization, or partial derivations. Correct final belief also does not validate every claim in the turn.

**Agreement can be confidently wrong.** Conversations stop when beliefs match, even if the common belief is incorrect. Same-model self-play can amplify correlated reasoning and social errors. The paper measures persuasion and assertion but does not use them to select training turns; excessive agreement, politeness, and verbosity remain observed limitations.

**The reported data are absent.** No raw conversation trees, siblings, beliefs, selected SFT targets, DPO chosen/rejected rows, rejected turns, extraction/network failures, prepared splits, training logs, model checkpoints, hashes, or source-to-checkpoint manifests are public. The 379.6K and 311.3K values are accepted-turn counts, not release counts.

**The task pipeline is incomplete.** Public presets omit MBPP-CR construction/configuration even though it contributes tens of thousands of accepted turns. GPQA is misspelled as `gqpa`. Requirements are non-exhaustive, Matrix uses an SSH dependency, and MATH grading depends on manually copied unpinned external scripts.

**Paper and code settings drift.** The paper caps two preference pairs per turn and 20 per problem; public defaults use one and ten. The paper states 8,192 input-plus-output tokens, while the released 70B DPO config uses 4,096. Exact generation temperature, top-p, retries, acceptance rate, model/task training settings, and checkpoint selection remain unknown.

**Splits and contamination are unresolved.** Prepared split files are not released. MMLU-Pro reuses its original test pool as a new 10.8K/1.2K train/test split, and training directly uses established benchmark questions. No exact or semantic overlap ledger and no base-model pretraining-exposure audit are reported.

**Licensing is incomplete.** Coral and pinned Matrix code are MIT. That does not establish terms for unreleased synthetic conversations, preference rows, derived MBPP-CR records, or Coral checkpoints. Upstream dataset and base-model revisions, licenses, and redistribution obligations are not reconciled in one manifest.

**Release identity and metadata conflict.** Coral has one public commit from 2025-04-17, no tag, and no GitHub Release. The final PDF uses Daniel Li where proceedings metadata uses Shang-Wen Li; the Meta page omits Jiemin Zhang and Jane Yu. This Card follows the proceedings author list and records the discrepancy.
