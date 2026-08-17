**Claim.** Watermarked benchmarks retain useful evaluation behavior while the test detects contamination that materially inflates scores.

**Controlled setting.** The authors rephrase ARC-Easy, ARC-Challenge, and a 5,000-question MMLU subset, then pre-train 1B models on the same 10B-token DCLM stream while varying only injected watermarked benchmark batches. Table 1 uses δ=4 and an out-of-distribution question template.

**Result.** On MMLU, four contaminations raise accuracy by 5.1 points (30.6% to 35.7%) with log10(p)=−5.7; eight give +10.2 points with p<10⁻¹². With zero contamination, p-values are near 0.5. The paper also reports broadly similar rankings on original and rephrased ARC-Easy.

**Boundary.** This supports detection of memorized watermarks in these controlled, open-weight pre-training runs; it does not establish detection of every leak, causally prove score inflation for arbitrary deployed models, or protect against deliberate evasion.
