For a ranked set, RRHF computes log probabilities of the candidates under the current policy, then applies a ranking loss to enforce the preferred order. It can also retain an SFT-like term for the best response.

The paper evaluates on the Helpful and Harmless dataset and compares alignment outcomes with PPO-based RLHF. It also varies sampling quality, showing that the quality of available alternatives strongly affects what the rank learner can acquire.
