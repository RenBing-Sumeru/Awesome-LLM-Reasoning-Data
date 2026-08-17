1. **Measure conflicts.** Flag score-pair disagreement as Conflict Ratio (CR); count circular or equality-transitivity violations in response sets as NTR.

2. **Score distributions.** Prompt the judge on 5/10/100-point scales, softmax its token probabilities, and use the expected score rather than greedy integer decoding.

3. **Aggregate pairs.** Obtain both answer orders; when ties remain, use bidirectional verdict likelihoods or lower perplexity to decide.

4. **Audit or optimize.** Report CR, NTR, and accuracy across models/datasets; use the ordering for evaluation or DPO. Fix prompts, scale, tolerance, decoding probabilities and judge version to reproduce; small judges may fail the output format.
