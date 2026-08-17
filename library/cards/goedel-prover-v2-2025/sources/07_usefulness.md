For the **Frontier Reports and Data Disclosure Ledger** track, this paper is useful as a staged disclosure map rather than a reusable training corpus.

- It separates statement construction, whole-proof SFT, compiler-error correction data, scaffolded augmentation, RL reward calls, and checkpoint averaging.
- It provides a concrete self-correction record schema—statement, failed output, compiler error, and revision—that can guide releases of verifier-backed trajectories.
- It offers two curriculum mechanisms to compare: formal goal extraction from failed attempts and informal difficulty adjustment followed by autoformalization.
- It exposes how dynamic pass-rate filtering and model averaging can change both the accepted data distribution and pass@N diversity.
- Its official Lean wrapper, pinned mathlib submodule, batch self-correction script, model weights, and MathOlympiadBench support inference and evaluation studies.

A reuse audit should pin repository, model, Lean, and mathlib revisions; distinguish MathOlympiadBench from training data; retain every compiler verdict and correction round; sample-check autoformalization semantics; and request source, license, split, and overlap manifests for S1/S2/S3. Without those additions, the work supports recipe comparison and verifier-loop research, but not reconstruction of the reported training mixture.

