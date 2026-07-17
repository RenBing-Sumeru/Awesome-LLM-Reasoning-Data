The paper uses the mapping between an optimal policy and its reward function to reparameterize the reward. The resulting preference probability depends on the policy's log-likelihood ratio to a reference policy for the chosen and rejected answers.

Training simply raises the relative likelihood of the chosen completion. The reference policy supplies the regularizing anchor that ordinarily appears in RLHF, so preference data become the direct supervision surface rather than labels for a separate reward-model stage.
