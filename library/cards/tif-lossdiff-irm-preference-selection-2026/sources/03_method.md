The model first warms up on the preference-training set and then for a short stage on a validation set. It computes LossDiff from the two model states and IRM from the warmed-up policy, combines them, selects pairs, and retrains for a longer alignment stage.

The paper uses UltraFeedback-Binarized, holding out a GPT-4-margin-stratified 20% validation split and retaining 80% for training. It initializes models with one UltraChat-200k SFT epoch, then applies DPO or SLiC for two epochs. Exact influence, split construction, and the selected ratio must be logged for reproducibility.
