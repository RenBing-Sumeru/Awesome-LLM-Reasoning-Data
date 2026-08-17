Pairwise comparison of N candidates requires many repeated forward passes and can create inconsistent local rankings, such as A beating B, B beating C, and C beating A. This increases Best-of-N cost and weakens the global consistency and stability of set-level selection.

The work collects set-level rankings of multiple responses to the same image or video question in MR²Bench and trains a reward model that compares N candidates in a single forward pass.
