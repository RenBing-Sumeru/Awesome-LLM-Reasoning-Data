1. **Positioning:** HalluGuard turns RAG hallucination detection into document-grounded reasoning rather than label-only classification.
2. **Method handle:** FineWeb claim synthesis, strong/weak response generation, label verification, two-judge consensus, and ORPO determine data quality.
3. **Artifact handle:** `HalluGuard-Preferences-76k` contains 76,708 English JSON preference tuples with prompts, chosen reasoning, and rejected reasoning under Apache 2.0.
4. **Evidence anchor:** The 4B model reaches 84.4% BAcc on RAGTruth and 77.1% on full LLM-AggreFact, exceeding several 7B/8B or proprietary baselines.
5. **Reuse decision:** It is suitable for RAG grounding verification; before reuse, audit explanation faithfulness and remember that document support is not real-world truth.
