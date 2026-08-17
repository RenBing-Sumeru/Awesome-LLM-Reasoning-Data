1. **Step 1.** Transform open multi-hop QA items and supporting facts into research tasks that require cross-document search.
2. **Step 2.** Assign L1, L2, and L3 difficulty based on hop count, evidence dispersion, and retrieval complexity.
3. **Step 3.** Use a strong deep-research agent to produce multi-round queries, web results, evidence selections, reasoning, and answers.
4. **Step 4.** Validate answers and evidence consistency and remove search failures, unsupported claims, and unreplayable traces.
5. **Step 5.** Release 9,000 tasks and trajectories for both training and evaluation, with outcome and LLM-judge rewards in DeepResearch-R1.
