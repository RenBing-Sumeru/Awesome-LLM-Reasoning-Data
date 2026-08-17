DPO receives prompt, chosen answer, rejected answer, a trainable policy, and a fixed reference policy. It computes the difference between chosen and rejected policy/reference log-probability ratios, applies a logistic loss, and updates the policy on offline minibatches.

Unlike conventional RLHF, the recipe does not first fit a reward model or sample new trajectories during fine-tuning. Reproduction therefore requires recording the preference-pair source, reference checkpoint, beta value, response-token handling, optimizer, and evaluation protocol.
