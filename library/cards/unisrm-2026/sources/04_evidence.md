**Claim.** Reasoning-consistent optimization improves broad speech judging beyond objective metrics and AudioLLM baselines. **Setup.** On UniSRM-Bench, the same proposed backbone is compared with SFT-only and accuracy-only GRPO; pairwise tasks use accuracy and pointwise quality uses Pearson correlation.

**Result.** UniSRM obtains 65.06% on T1, 39.74%/0.551 on T2, 85.61% and 91.30% on English/Chinese T3, and 88.89% on T4 (Table 1). Removing RCR-GRPO reduces T3-Zh from 91.30% to 81.42% and T4 from 88.89% to 82.54% (Table 2). On unseen SOMOS-Full it reaches 0.2347 PCC and 52.97% accuracy (Table 7).

These results support this benchmark's four-task configuration and the ablated reward design, not universal human alignment: labels are partly model-generated and difficult accents or overlapped speech are outside coverage.
