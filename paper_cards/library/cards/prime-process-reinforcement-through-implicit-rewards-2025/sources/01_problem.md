PRIME updates a process reward signal online from policy rollouts and outcome labels, so dense process rewards can be used during RL without manually collected step labels.

For Track 05, the key object is an on-policy rollout with outcome feedback and implicit process-reward estimates, not a static human-labeled step dataset.

- Year / venue: 2025 · arXiv.
- Author affiliations (first five listed in the paper): Shanghai AI Laboratory; Tsinghua University; University of Illinois Urbana-Champaign; Peking University; Shanghai Jiao Tong University.
- Atlas role: process_supervision, verifier_reward, construction_recipe.
- Domains: math, code, reasoning.
- Current status: verified.
- Why it belongs: PRIME shows how rollout records can continuously update both the policy and an implicit process reward model during RLVR-style training.
