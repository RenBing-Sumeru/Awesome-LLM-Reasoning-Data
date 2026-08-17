1. **Position.** OpenGenAlign targets preference modeling for long-context quality, especially hallucination and completeness.
2. **Method handle.** Three o3 decisions over four dimensions are majority-voted for every response pair.
3. **Artifact handle.** The paper reports 33K pairs, a 9K development set, and 1.5K held-out examples; the linked project is GitHub, while data release details need verification.
4. **Evidence anchor.** A Llama-3.1-8B RM reaches 85.9% held-out accuracy; PPO with it has 87.7% average o3 win rate for the 8B policy.
5. **Reuse decision.** Use for long QA/data-to-text/summarization after preserving votes; first test domain coverage and label agreement before mixing it with chat data.
