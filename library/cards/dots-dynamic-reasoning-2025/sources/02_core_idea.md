The central contribution is to learn a planner from **optimal reasoning trajectories searched for a particular solver**, instead of prescribing one reasoning recipe for all questions. DOTS defines three ordered layers:

1. analysis: query rewriting, query decomposition, or Empty;
2. solution: CoT or PoT;
3. verification: Self-Verification or Empty.

Their Cartesian product contains \(3 \times 2 \times 2 = 12\) trajectories. The released repository uses the names `query_rewriting`, `planning`, `CoT`, `programming_solver`, `verifier`, and an empty string, and appends `direct_answering` as a terminal fourth slot. These are action paths, not step-level correctness annotations.

For a given question and solver, search samples every currently active path several times. Task-specific answer extraction and checking produces a binary success signal, and accumulated success rates rank the candidates. The search keeps a smaller top set after each round and uses shorter path length as a tie-break. GPT-4o then explains why the selected path is appropriate. An external planner predicts the explanation and path while leaving the solver frozen; an internalized planner uses one Llama-3-8B-Instruct model to predict the explanation, path, solver reasoning, and answer.

The feedback contract has two distinct components. The selector is programmatic outcome supervision: MATH uses simple-eval, Game of 24 uses its standard checker, and the other reported tasks use exact string matching. Self-Verification is merely an optional action within a candidate trajectory: the same solver writes a natural-language correctness verdict and may retry. It is not an independent verifier and should not be confused with the ground-truth evaluator that scores trajectory success.

The public release adds unusual audit value by retaining raw trial dialogues, trajectory identifiers, predicted answers, binary scores, and observed failures rather than publishing only the chosen SFT targets. However, it does not expose a documented reconstruction of accumulated score tables, candidate sets after each prune, prune reasons, retry/stop logs, random seeds, or the final processed planner examples. The Card therefore treats raw rollout evidence and final training data as separate artifacts.
