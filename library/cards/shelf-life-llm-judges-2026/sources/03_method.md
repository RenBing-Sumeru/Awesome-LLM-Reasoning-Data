1. Label sampled responses as correct/incorrect using gold answers, then pair one of each from a single generator.
2. Cluster generators by 20-sample Pass@1 into weak and strong response distributions; split questions into seen and unseen.
3. Train Llama-3.1-8B, Ministral-8B and Mistral-24B judges with SFT, DPO or SFT+DPO; use consistent accuracy.
4. Compare weak-to-strong, strong-to-weak and continual DPO shifts. Acceptance is objective pair correctness; model versions, sampled responses and question split must be fixed.
