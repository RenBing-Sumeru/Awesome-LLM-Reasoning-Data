Inputs are task instances from eight selected NLU datasets. Each instance contains the task-specific text fields, candidate answers or labels when applicable, split metadata, and hidden or public reference labels depending on split. Diagnostic instances use sentence pairs and linguistic, commonsense, or world-knowledge labels collapsed to the required entailment format.

The pipeline is:

1. collect candidate tasks through public proposals and existing datasets;
2. run machine baselines, mainly BERT variants, and estimate human performance;
3. remove candidates with little machine-human headroom or unreliable human solvability;
4. standardize the remaining tasks into the SuperGLUE API and release train/dev data with private test evaluation;
5. accept leaderboard submissions subject to data-use and submission-frequency rules;
6. compute official task metrics and aggregate the non-diagnostic task scores.

Outputs are per-task predictions, task metrics, an overall SuperGLUE score, and diagnostic reports. Reproducibility depends on the exact official release, scorer implementation, task-specific upstream terms, allowed auxiliary data, prompt or finetuning setup, and leaderboard date; the aggregate score alone is not a row-level proof of correctness.
