1. Position: detector reliability can collapse during ordinary LRM post-training.
2. Mechanism: contaminated SFT is followed by PPO-style RL; clipping contracts member/non-member likelihood contrast.
3. Artifact: the official LRM_Conta_Detection_Arena repository is available; its version and license must be pinned.
4. Evidence: Loss AUROC falls from 79.25 with RAFT to 57.58 with clipped RAFT++ in the 64-step ablation.
5. Reuse: audit each training stage with independent members and non-members; do not treat a detector pass as provenance proof.
