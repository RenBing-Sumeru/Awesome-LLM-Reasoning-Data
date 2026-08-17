1. **Keep:** STaR is a data-generation loop, not merely a prompting method; accepted model-written rationales become the next SFT set.
2. **Use when:** questions have reliable answer keys and rationale annotation is the bottleneck.
3. **Record:** question, gold answer, rationale, predicted answer, normal/rationalized type, acceptance decision, and round.
4. **Do not infer:** answer correctness does not establish step correctness or faithful reasoning.
5. **Audit first:** compare normal and answer-conditioned traces, per-round coverage, and held-out gains before scaling.
