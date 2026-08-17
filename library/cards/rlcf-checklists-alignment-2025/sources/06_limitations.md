1. **Checklist completeness:** If the generator misses implicit constraints or decomposes requirements incorrectly, downstream rewards will systematically diverge from the user’s real intent.

2. **Judgment reliability:** Semantic items still rely on LLM judges and remain vulnerable to position, wording, self-preference, and verbosity biases. Programmatic verifiers apply only to formalizable requirements.

3. **Reward gaming:** A policy may learn to satisfy checklist wording mechanically while sacrificing overall naturalness, factuality, or user experience.

4. **Cost and transfer:** Each prompt requires generating and checking multiple criteria, making training more expensive than using a single reward. The English-heavy WildChat distribution also does not represent every language or domain.

Reusers should manually audit checklist coverage and retain holistic quality and safety judgments as complementary signals.
