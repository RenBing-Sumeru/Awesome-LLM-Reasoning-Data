Starting from a seed D0, the model is DPO-tuned, then samples two responses for each new prompt. Its policy/reference logit ratio decides the chosen and rejected response.

The next DPO stage flags the least-confident generated pairs, applies label smoothing to those records, and iterates generation and refinement. The official code implements this procedure.
