Claim — CoDeC separates data known to have entered training from genuinely unseen datasets more reliably than common score-based detectors.

Setup — the main validation used Pythia, GPT-Neo, RWKV-4, OLMo, Nemotron-v2, and Nemotron-H models with disclosed corpora; each test bed paired training-corpus subsets with post-cutoff text. Vanilla loss, Min-K%, and zlib ratio were baselines.

Result — dataset-level AUC pooled over models was 99.9% for CoDeC, versus 75.7%, 78.5%, and 89.6% respectively. In controlled finetuning, scores rose above 90% after exposure to each chosen dataset.

Boundary — this is dataset-level separation under available token probabilities and selected corpora; a high score can also reflect related distributions, not proof that every evaluated string was copied verbatim.
