1. **One-sentence position:** ActPRM reduces the cost of labeling mathematical reasoning steps rather than the cost of generating trajectories.
2. **Method handle:** Generate NuminaMath chains of thought, select them using mean confidence and head disagreement, and let QwQ-32B identify the first error.
3. **Data handle:** ActPRMData contains about 663,000 records with questions, steps, answers, per-step standard deviations, and binary labels.
4. **Evidence anchor:** It reaches 0.673 F1 with 50% annotation budget, while the final model obtains 75.0%/65.5% on ProcessBench/PRMBench.
5. **Reuse decision:** It fits million-scale mathematical trajectory filtering; confidently wrong omissions are the main risk, so low-uncertainty samples must be audited.
