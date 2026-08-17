Read the paper as a static UI grounding benchmark, not a phone-control environment. The important distinction is expert element annotation versus executable task success.

Start with the dataset statistics, taxonomy, annotation pipeline, and evaluation protocol before reading the model table. The model table is only interpretable after the IoU >= 0.5 plus label-match contract is clear.

Keep three labels separate downstream: ground-truth element, model-predicted element, and matched true positive. Aggregate F1 should not replace row-level matching evidence.
