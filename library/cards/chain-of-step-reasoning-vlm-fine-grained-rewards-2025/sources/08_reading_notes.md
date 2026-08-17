1. **One-sentence positioning:** Decompose visual reasoning into supervisable steps and provide a fine-grained reward for each step.
2. **Method handle:** Generate CoS trajectories, judge steps, verify final answers, and filter inconsistent cases.
3. **Data handle:** CoS-Dataset contains about 300K visual step-and-reward records.
4. **Evidence anchor:** It improves visual reasoning, trajectory reranking, and RL over final-answer supervision.
5. **Reuse decision:** Best for structured visual reasoning; first validate the step schema and judge visual fidelity.
