1. **Specify the game.** Choose a target BPE tokenizer, candidate corpus, auxiliary corpora, vocabulary size, and a member/non-member label defined by tokenizer training inclusion.
2. **Build shadow evidence.** Train shadow tokenizers on candidate combinations. Merge Similarity compares merge order; Vocabulary Overlap extracts distinctive target tokens shared with member shadows.
3. **Reduce cost.** Frequency Estimation trains one shadow tokenizer, fits a power-law signal from token rank/frequency, and asks whether the candidate is necessary for at least one target token.
4. **Score and decide.** Naive Bayes and Compression Rate serve as additional baselines; each method returns a score, and thresholding yields member or non-member.
5. **Evaluate and mitigate.** Report ROC/AUC, TPR@1% FPR, time, vocabulary size, and dataset size; test min-count filtering or a DP-inspired stochastic merge defense. Pin corpus versions, tokenizer implementation, random seeds, and the auxiliary-data protocol.

Keep candidate and auxiliary corpora disjoint and log threshold selection, or leakage and tuning can inflate apparent attack performance.
