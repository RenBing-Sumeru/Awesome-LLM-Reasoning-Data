1. **Synthesize cross-modal response pairs.** Models with different capabilities generate candidates.
2. **Generate modality-aware rubrics and rationales.** Strong teachers reconcile conflicts, filter pairs, and write modality-aware rubric rationales.
3. **Reconcile and filter teacher judgments.** SFT teaches the structured output, and GRPO sharpens difficult discrimination.
4. **Train with SFT and difficult-pair GRPO.** SFT teaches the structured output, and GRPO sharpens difficult discrimination.
