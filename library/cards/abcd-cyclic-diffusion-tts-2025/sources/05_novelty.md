The paper turns diffusion depth into a live allocation decision. Rather than increasing every schedule uniformly, it combines backward cycles, branching, and a stopping policy so the same budget can be concentrated on uncertain candidates.

This makes the search trace an explicit artifact. A reproduction can inspect which state was revisited, why a particle received another cycle, and where the controller stopped spending compute.
