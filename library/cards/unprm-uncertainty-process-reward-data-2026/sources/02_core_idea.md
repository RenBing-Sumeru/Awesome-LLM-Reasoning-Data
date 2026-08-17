UnPRM applies uncertainty to process-data generation, step annotation, and candidate-answer aggregation. The official `un_prm_data_40k.json` contains about 40K mathematical records, each storing a `prompt`, reference `answer`, stepwise `completions`, and Boolean `label`. The data directly trains a PRM, while the code also implements Hybrid Majority Reward Vote and Weighted Reward Frequency Vote.

The file also reproduces uncertainty-selected locations and candidate aggregation, keeping training labels aligned with inference-time voting rules.
