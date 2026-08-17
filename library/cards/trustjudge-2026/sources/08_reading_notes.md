1. **Position:** audits score-comparison and pairwise-transitivity inconsistency, then changes inference rather than training a new judge.
2. **Lever:** preserve a 5/10/100-point token distribution; break ties with likelihood or perplexity.
3. **Artifact:** official TrustJudge code is reported; no standalone new benchmark is claimed.
4. **Evidence:** Llama-3.1-70B CR 23.32→14.89 and NTR 15.22→4.40 (Table 1); this is protocol-level evidence.
5. **Reuse:** appropriate for judge pipelines with logprobs; first verify human agreement and weak-model format compliance.
