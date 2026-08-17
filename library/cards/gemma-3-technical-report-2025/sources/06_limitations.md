Training data disclosure stops at broad source classes and token totals. Corpus manifests, source/language/modality weights, images, rights, quality coefficients, prompt/completion counts, preference records, safety labels, and lineage are unknown. Evaluation decontamination has no method, thresholds, removals, or artifact, and the report warns residual contamination may remain.

Both pretraining and IT teachers are unidentified. Their checkpoints, query mode, temperatures, budgets, prompts, and cached-versus-online behavior are unknown. The report does not say IT distillation is online or on-policy. Human-feedback RM components, averaging weights, annotator rubric/agreement, calibration, and reward-hacking/overoptimization tests are unavailable.

Code execution lacks sandbox, tests, languages, dependencies, timeouts, flaky-test handling, isolation, hidden-test leakage controls, and scalar aggregation. Math ground truth lacks task manifest, parser, symbolic/numeric equivalence, partial credit, proof checking, and contamination audit. BOND/WARM/WARP modifications, rollout counts, optimizer, KL, stage order, merge weights, and checkpoint selection are absent.

Memorization records are private and exact per-model rates are not tabulated. The 50-token/10% probe may miss other memorization forms; no detected personal information means only below the chosen detector threshold.

Licenses are separate: the manuscript is CC BY 4.0, official PyTorch code Apache 2.0, and weights are governed by Gemma-specific Terms of Use with gated acceptance. None covers private training corpora, preferences, logits, RMs, tests, or verifiers.
