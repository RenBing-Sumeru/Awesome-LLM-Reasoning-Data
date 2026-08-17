Large preference corpora contain redundant pairs and labels that are easy for an aligned model to rank. Training on every pair is costly, while generic instruction-data scores do not reflect the comparative structure of a chosen-versus-rejected record.

This work asks which preference pairs have the greatest value for reward-model or DPO training. It defines difficulty through the target pair's DPO implicit reward gap and retains pairs near the policy's current preference boundary.
