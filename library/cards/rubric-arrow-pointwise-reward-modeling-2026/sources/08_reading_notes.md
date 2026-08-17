1. **One-sentence position:** RUBRIC-ARROW alternately trains a rubric generator and pointwise judge from pairwise preferences to provide probabilistic rewards for non-verifiable tasks.


2. **Method takeaway:** Judge-SFT initialisation, probabilistic satisfaction, phase-specific rewards, and alternating GRPO are central.


3. **Data takeaway:** RubricARROW-Judge-SFT contains about 119,120 instruction–rubric–candidate–score records.


4. **Evidence anchor:** The method improves RM accuracy and downstream policy post-training consistently, while probability aggregation reduces ties.


5. **Reuse decision:** Best for open-ended reward modelling; audit rubric coverage, preference bias, and alternating-training stability.
