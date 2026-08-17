Exact complete-match and exact-item F1 rewards can penalize semantically equivalent outputs and may reward formatting or tokenization alignment. Negative L1 plus LPIPS measures frame similarity, not physical correctness, causal fidelity, or safety for policy deployment. None of these feedback signals substitutes for downstream task validation.

The text-game description does not make the use of the 2,954-transition official test subset sufficiently stage-specific for a train/evaluation-overlap audit. The WebArena procedure selects the checkpoint with highest test reward, so an independent final selection surface is not documented. The paper filters web samples by length but does not report a semantic contamination audit across the text, web, robot, teacher-output, and evaluation sources.

Repository and derived-dataset licenses do not establish rights for every upstream asset. Per-record origin, source versions, retained/rejected candidate IDs, immutable split files, raw rollout logs, seeds, dependency pins, environment images, and complete verifier edge behavior remain unknown or only partially disclosed.

