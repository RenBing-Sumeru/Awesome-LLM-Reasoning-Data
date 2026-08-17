Use MMLU as a baseline schema for static answer-level academic evaluation: question, choices, answer key, subject, split, prompt policy, model output, and exact-match score. It is useful for comparing broad knowledge coverage and for studying how prompt/scoring choices affect leaderboard results.

For atlas work, keep MMLU as the root object when tracking derivative benchmarks. MMLU-Pro changes difficulty and option count; MMLU-Redux audits label and clarity errors; both inherit MMLU's answer-key evaluation contract.

Preserve provenance fields when reusing it: original subject, split, source package revision, evaluator revision, answer-normalization rule, and any decontamination or exclusion policy.
