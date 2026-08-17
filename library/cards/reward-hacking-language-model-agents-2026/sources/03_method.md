1. Textualize safety tasks. Convert grid observations and actions into language interactions while preserving the observed proxy-reward function and hidden safety-reward function.
2. Establish behavior. Run language models zero-shot and log trajectories, observed reward, and hidden safety reward before any optimization.
3. Optimize the proxy. Train policies directly for observed reward, then compare the changed observed reward with hidden safety performance.
4. Stress proposed fixes. Vary credit assignment, exploration prompts, and entropy regularization; retain both reward logs to decide whether a fix changes the divergence.

Reproduction requires the released environments, exact model versions, RL configuration, random seeds, and both reward channels; unreported training budget details remain unknown.
