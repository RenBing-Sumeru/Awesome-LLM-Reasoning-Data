For the `data_construction_open_release_recipes` track, Mutual-Taught is most useful as a specification for dynamic preference lineage. It shows that a preference record may be valid only relative to an iteration, a policy pair, and the RM that scored it. A downstream schema should preserve the prompt; current and previous policy IDs; all sampled candidates; chosen/rejected construction; current-RM ID and scores; checkpoint-selection result; reward margin and standard deviation; filter decision; self-training versus policy-comparison origin; and policy/RM training step. Without these fields, the claimed co-adaptation cannot be replayed or audited.

Concrete research uses include:

- implementing an RM-refresh baseline that alternates on-policy DPO and Bradley–Terry reward training;
- comparing mixed self-training/policy-comparison data with either source alone at matched prompt and generation budgets;
- replacing the circular RM gate with human labels, rule verifiers, a held-out judge, or calibrated model ensembles to measure pseudo-label error;
- testing LQF, HQS, and DST while reporting both policy outcomes and RM calibration rather than one benchmark score;
- auditing checkpoint selection and early stopping with independent preferences instead of the RM that trained the policy;
- studying how refresh cadence, base-RM reinitialization, length control, and prompt reuse affect drift and catastrophic forgetting.

A safe replication should first create an immutable prompt split with a separately held-out `D_MS`, pin Llama/FsfairX model revisions and tokenizer/chat-template versions, log all random seeds and generated-token counts, and retain both accepted and rejected pairs. It should report pair yield by margin bin, human preference accuracy, RM calibration, reward-score inflation, response length, judge disagreement, and downstream task quality. Frozen-RM iterative DPO, newly human-labeled RM refresh, and a rule-anchored refresh should be included as controls; otherwise co-adaptation cannot be separated from extra generation, checkpoint selection, or judge-specific optimization.

The practical reuse class is **reading/audit reference only; executable training reuse is blocked pending artifact verification**. The ACL paper is sufficient to reconstruct the intended modules and settings, and its negative iteration result is useful for designing stopping audits. It is not sufficient to reproduce the exact run or reuse a released dataset: the official paper-linked repository contains no verified Mutual-Taught-specific implementation or immutable release, and the dynamic training records, checkpoints, split manifest, pseudo-label audit, and licenses are missing.

The paper should not be repurposed as evidence that synthetic preferences replace humans in general, that RM scores are calibrated correctness probabilities, or that a higher AlpacaEval/RewardBench score proves better data. Its strongest Atlas use is a controlled case for asking what must be logged when a policy and its feedback model jointly define the next training distribution.
