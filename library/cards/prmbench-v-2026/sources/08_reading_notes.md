1. **Position.** PRMBench-V evaluates whether an MPRM can localize errors in visual reasoning, not merely score a final answer.
2. **Method handle.** GPT-4o chains survive only if three model judges recover the answer after its final step is removed; errors are then injected and manually verified.
3. **Artifact handle.** The paper reports 907 questions, 8,163 labeled cases, nine error types, five categories, and 43 subcategories, but no official downloadable artifact.
4. **Evidence anchor.** Gemini-1.5-pro reaches strict accuracy 0.34; Figure 5 links benchmark and best-of-16 performance at r about 0.86.
5. **Reuse decision.** Use for structured image reasoning with trace review; before reuse, obtain the artifact and test annotator agreement plus recall for each error type.
