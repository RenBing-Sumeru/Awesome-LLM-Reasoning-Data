1. Inputs: math problems with reference final answers, model-generated step-by-step solutions, and partial-solution prefixes.
2. Pipeline: sample continuations from each prefix, grade their final answers, convert continuation outcomes into step or prefix rewards, train a process reward model, then use it for solution selection or reinforcement.
3. Outputs: automatically labeled process-supervision records, a PRM, and reranked/reinforced solver outputs.
4. Verifier: final-answer checking on rollouts supplies the teacher signal; the learned PRM is a proxy judge.
5. Reproducibility notes: pin problem sets, base generator, rollout count, temperature, answer checker, reward aggregation rule, PRM architecture, and inference/search budget.
