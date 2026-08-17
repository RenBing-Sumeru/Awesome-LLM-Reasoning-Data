1. **Filter source pairs.** Starting from 10,501 WebDev Arena queries and paired code outputs, remove short, duplicate, unsafe, unclear, infeasible, non-deploying, and invalid-rendering cases; retain 1,713 candidates.

2. **Create reference judgments.** Sample 700, deploy both sites, and construct a query-grounded tree of intention, static, and dynamic binary checks. Expert software-engineering annotators inspect cases; 654 remain after manual exclusions.

3. **Evaluate judges.** Give evaluators code, screenshots, or both, and ask for pairwise preferences or single-answer Likert grades. Agentic evaluation uses a rubric-planner, UI-TARS-1.5 executor, and summarizer.

4. **Diagnose failure.** Compare predictions with expert labels and test feasibility on 502 WebDevJudge-Unit cases. Reproduction must pin deployments, tree generation, prompts, model versions, ordering, and agent trajectories; environment revisions are a material source of variance.
