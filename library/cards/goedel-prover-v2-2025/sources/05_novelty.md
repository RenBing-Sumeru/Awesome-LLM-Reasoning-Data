Relative to whole-proof pipelines that only sample fresh completions, Goedel-Prover-V2 makes compiler-guided revision a trained behavior. The correction object explicitly preserves a failed output and its Lean error, and the model is optimized on both initial proof generation and first-round repair. The paper's ablations further distinguish the value of the concrete compiler message from simply resampling or retaining a previous proof.

The second contribution is curriculum construction around the current prover. Formal scaffolding recycles unsolved proof states into easier statements; informal scaffolding asks for easier or harder variants depending on whether the source theorem is currently solved. Statement generation is therefore conditioned on a moving capability boundary rather than a fixed corpus.

The third contribution is to treat model averaging as part of the post-training data story. Expert iteration and RL increase pass@1 while sometimes shrinking sample diversity; averaging with a base or earlier checkpoint restores pass@N. This means the final performance comes from the interaction of statement mixture, accepted traces, reward sampling, and checkpoint composition.

None of these components is presented here as independently new in isolation. The direction signal is their integration into a disclosed S1/S2/S3/RL lineage with formal feedback. Because the core training rows remain unavailable, the contribution is best recorded as a frontier-pipeline disclosure with partial release, not as an open training dataset.

