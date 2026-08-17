- **Terminal verification is not process verification.** Exact or SymPy-equivalent final answers can coexist with invalid, spurious, or unfaithful intermediate reasoning, and the verifier does not check critique consistency.

- **Critiques are model judgments.** GPT-5-mini may misidentify the first divergence, confuse a local arithmetic error with a strategic failure, or impose unnecessary constraints. No independent critique-faithfulness verifier or human error annotation is reported.

- **Search-distribution assumptions can fail.** High visit count is treated as evidence of a stubborn, informative failure, but a highly visited wrong branch can reflect UCT noise, value-estimation error, prompt bias, or duplicated states rather than a pedagogically useful misconception. This is a curator inference from the feedback contract.

- **Pair construction is incompletely specified.** The paper states 10 rollouts and 10 contrastive pairs per problem without publishing per-problem path counts, hard/soft mixture, pair shortages, reuse, retries, or stage yields. The code's 70%/30% default is not a substitute for a paper-matching manifest.

- **Counts do not reconcile.** The nominal CRPS-30K release contains 27,256 rows and 9,939 unique problems, versus roughly 15K seed problems and approximately two synthesized variants per seed described in the paper. Attrition, duplication, and selection are not mapped.

- **Lineage is lost at release.** Final rows contain only `problem` and `solution`; they omit source IDs and revisions, tree nodes, visits and Q-values, positive/negative paths, contrast type, critiques, parser repairs, verifier output, rejection reasons, and random seeds.

- **Cost accounting is incomplete.** The reported 10 versus 192 GPU-hours concerns recurring SFT, not the full one-time MCTS, proprietary analyst, synthesis, verification, retry, and data-cleaning budget. API tokens and monetary cost are undisclosed.

- **One headline ratio is inconsistent.** 60K versus 590K is approximately a 9.8x size ratio, not 20x. The approximately 20x framing fits 30K versus 590K and the 10 versus 192 SFT GPU-hour comparison.

- **The release is not a locked replication package.** The checked repository has no tagged release or LICENSE file, uses lower-bound rather than locked dependencies, and its paper-oriented config routes `gpt-5-mini` through an Anthropic backend. The dataset card labels CRPS-30K MIT, but upstream GSM8K/MATH and generated-derivative obligations still need audit.

- **Scope and contamination remain bounded.** Objective terminal rewards make the method easiest for mathematics and code; open-ended domains remain difficult, as the authors state. Exact source snapshots and benchmark-overlap/decontamination procedures are unknown, while non-math experiments lack a matching public construction release.
