Olmo 3 is a 7B/32B family with Base, Think, Instruct, and RL-Zero variants. Its central release claim is not merely open weights: AI2 presents the connected model flow, including stage data, training code, checkpoints, manifests, and dependencies.

The data objects span three base-training stages and several post-training stages. Dolma 3 provides a 5.93T-token pretraining mix, a 100B-token midtraining mix, and 50B/100B long-context extensions. Dolci provides Think and Instruct SFT, DPO, and RL data, while RL-Zero supplies a setup intended to study RLVR starting from disclosed base-model data.

The feedback contract is deliberately mixed. It includes supervised traces, contrastive preferred/rejected responses, programmatic math/code/instruction checks, real or simulated tool trajectories, and LLM-judge scores for parts of chat. Therefore, disclosure of a broad release does not turn every signal into a programmatically verified one.
