- Training prompts come from MATH; the paper reports approximately 40K retained records, not an open dataset.
- Each expansion samples K=3 actions; Wolfram Alpha supplies step labels and ground-truth comparison supplies final F.
- The hybrid reward combines discounted future step checks with beta-weighted terminal correctness before backpropagation.
- GroundedPRM is a generative Qwen2.5-7B-Instruct PRM that outputs a decision plus rationale.
- Reward-guided decoding samples N=8 next-step candidates at temperature 1; construction rollout count and temperature remain unknown.
- “Tool verified” does not imply complete semantic proof, released lineage, decontamination, or artifact reproducibility.

