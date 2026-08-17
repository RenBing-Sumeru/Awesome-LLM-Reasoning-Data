1. **Evaluate active reasoning:** Compare performance on complete problems, underspecified problems, and clarification selection to identify models that can solve but cannot ask.

2. **Train information-acquisition policies:** Use correct questions as SFT labels or reward recovery of a unique CSP solution.

3. **Build domain data:** Hide one key field in formalizable business rules and generate candidate questions. For multi-turn retrieval or unreliable user answers, QuestBench should be treated as a minimal one-step baseline, not a complete agent evaluation.
