The synthetic treatment is under-specified. The teacher or generator, prompts, answers, category proportions, filtering, acceptance rates, dates, and source rights are unknown. The release does not establish whether Base and Base-woSyn match total tokens, non-synthetic corpus, random seeds, optimizer steps, compute, curriculum, or checkpoint selection.

Consequently, the with/without-synthetic comparison has limited causal identification. Synthetic augmentation may explain score changes, but differences in token replacement, sampling, compute, or selection could also contribute. Reported gains and regressions have no released uncertainty, significance, or per-item analysis.

The Instruct pipeline is largely closed. General SFT data, safety examples, instruction mixture, preference records, annotators, reward model, reward calibration, PPO objective, KL control, rollout count, optimizer, schedules, and agent-training trajectory data are not disclosed. Naming safety SFT and RLHF/PPO identifies stage families, not a reproducible reward contract.

Global decontamination is absent. General deduplication does not provide benchmark-specific membership testing, code-repository overlap, near-duplicate audits, hashes, revision pins, or false-negative analysis. ArcAGI-V2's explicit non-use is only one benchmark and does not establish a global train/evaluation split.

Budget-conditioned training is also opaque. The release names 512-token interval training and exposes visible reflection tags, but no interval mixture, compliance metric, loss, reward, truncation rule, record corpus, or faithfulness audit is available. Visible consumed/remaining-token statements should not be assumed to equal faithful internal reasoning.

Finally, Apache-2.0 covers the released code and weight artifacts, not the unreleased public, purchased, vendor-generated, synthetic-instruction, SFT, RLHF, or evaluation data. Source-level authorization, license, consent, and redistribution rights remain unknown. Open weights do not make training data open.
