FLAMES turns a collection of heterogeneous math-data recipes into a common experimental scaffold, then uses the results to define a four-agent synthetic SFT mixture.

| Stage | Data or decision object | Feedback contract |
|---|---|---|
| Problem synthesis | seed problem/solution or taxonomy → agent intermediate → new problem | prompt constraints from one of 12 agents; no mathematical environment verifies the new statement |
| Always-on filtering | synthetic problem plus GSM8K/MATH test questions | exact-match deduplication and a lexical rule removing a problem when it contains at least 95% of a test item's 8-grams |
| Experimental solution control | three Qwen2.5-Math-7B-Instruct solutions per problem | all-three or two-of-three answer agreement, Qwen solvability judgment, InternLM2-7B-Reward ranking, or first-solution selection |
| Final FLAMES recipe | retained problem plus first teacher solution | `First`; Table 6 explicitly lists solution verification as `None` |
| SFT and selection | problem-solution records and ten saved checkpoints | full-parameter next-token SFT; choose the checkpoint with highest average GSM8K/MATH score |

The feedback contract is therefore mixed. Exact matching and n-gram overlap are programmatic but only check duplication/leakage surfaces. Self-consistency, solvability, and reward-model ranking are learned-model judgments tested in the quality-control study. The final dataset recipe deliberately sacrifices independent solution verification for coverage and lower generation cost. It can observe formatting, lexical overlap, teacher agreement, and downstream benchmark behavior; it cannot establish that every problem is well-posed or every first solution is mathematically correct.

Closest prior recipe families include MetaMathQA/Paraphrasing, OpenMathInstruct-2/Few-Shot, OrcaMath/Suggester-Editor, MMIQC/IQC, ScaleQuest/QFT, and key-concept methods. FLAMES does not invent all these agents. Its distinguishing move is to compare them under a shared generator–teacher–student scaffold, add Taxonomy-Based Key Concepts and Distraction Insertion, and choose a measured mixture rather than scaling one agent alone. This is a direction signal for factorized data-pipeline evaluation, not proof that one universal mixture is optimal.
