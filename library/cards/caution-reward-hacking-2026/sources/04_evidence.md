Claim — per-response pessimism can prevent accuracy collapse as Best-of-N budget grows.

Setup — Llama-3.2-3B-Instruct generated solutions; the caution predictor was trained on GSM8K prompts and tested with N up to 512 on GSM8K, MATH-500, and BigBench-Hard. Results compare standard reward selection, pessimism only, and their combination.

Result — on GSM8K, reward-only selection peaked at 79.3% but fell to 71.5% at N=512 (7.7-point degradation); reward plus caution reached 82.6% peak and 81.1% final (1.5 points). On BigBench-Hard, reward-only final accuracy was 1.7%, whereas the combined method reached 11.0%; pessimism-only was 22.1%.

Boundary — the result uses exact-answer reasoning tasks and a predictor trained from benchmark prompts; it does not prove the same penalty preserves subjective preference quality or every reward model.

Confidence intervals use three bootstrap runs, and the mixed result on BigBench-Hard shows that pessimism-only can dominate the combination under severe domain shift.
