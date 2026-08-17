Within the frontier reports and data-disclosure ledger track, use this Card to keep four objects separate: research-purpose model weights, the restrictive model license, aggregate post-training statistics, and unavailable training/feedback artifacts. That separation prevents “open weight” from silently becoming “open recipe” or “open data.”

The report supports saying that EXAONE Deep uses process-formatted SFT, pairwise preference optimization, and Online RL. It does not support saying who wrote the traces, how preferences were decided, whether RL rewards were rule-verifiable, which sources entered each stage, or how benchmark contamination was controlled. A reproduction effort can start from the released checkpoints and inference template, but it cannot reconstruct the reported post-training pipeline from the public evidence.

The Card also provides a checklist for evaluating similar releases: verify checkpoint lineage and terms of use; record stage counts without treating them as datasets; keep evaluation sampling separate from training generation; and require an explicit reward/verifier/environment contract before applying an RLVR label.

