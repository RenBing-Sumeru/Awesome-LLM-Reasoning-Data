1. For a candidate item, query the RL-post-trained model for its most confident initial reasoning response.
2. Prompt it to critique or produce a different solution conditioned on that response; collect token-level entropy from both generations.
3. Compare entropy sequences. Similar trajectories indicate narrow path dependence and are classified as membership; evaluate against RL-MIA and baselines.

Fix model API/logprob availability, prompts, decoding, contamination construction and threshold. The method is black-box only insofar as token probabilities/entropy can be obtained.
