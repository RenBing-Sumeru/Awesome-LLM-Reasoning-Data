Rollout generation and policy update are decoupled across inference and training hardware. The system generates a large n-rollout batch, computes task rewards, sorts them, selects an extreme-valued subset of size m that maximizes variance, and performs the GRPO update only on that subset. n and m are independently configurable and vary with experiments and hardware.

PODS changes episode membership, not the verifier. The exact base model, decoding temperature, dataset mixture, verifier implementation, n/m configurations, and hardware setup are not available through an official reproducibility artifact.

