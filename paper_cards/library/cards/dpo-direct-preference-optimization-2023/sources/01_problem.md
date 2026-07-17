RLHF normally turns pairwise preferences into a reward model and then trains a policy against that learned reward. This separates the training records from the final objective through an additional model and an online reinforcement-learning loop, adding instability and implementation cost.

DPO asks whether chosen and rejected responses can train the policy directly while retaining the constrained-reward interpretation of RLHF. It derives a classification-style objective in which each preference pair changes the policy relative to a fixed reference policy.
