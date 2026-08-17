1. For each context-question-answer triple, test context removal, equivalent rephrasing, and contradictory rephrasing; persistence of the old answer is a leakage signal.
2. Ask a strong reasoner to solve an equivalent question with CoT; combine its trace, answer, and question into a retrieval query.
3. Retrieve context chunks until the selected evidence alone supports the revised question.
4. Generate several context-consistent counterfactual rewrites of that evidence.
5. Select the rewrite with the largest conditional-perplexity difference and replace only the critical passage.
6. Evaluate original and defended 2WikiMQA, HotpotQA, MuSiQue, and MultifieldQA_en with EM and F1.

Reproduction requires the exact detector/retriever/rewriter models, prompts, chunking, rewrite count, and scoring setup.
