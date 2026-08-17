Search-enabled agents can retrieve a benchmark question together with its ground-truth answer from the web, then copy it instead of solving it. This invalidates an evaluation even if the model was never trained on the test set.

The paper names this failure search-time contamination and audits search logs on HLE, SimpleQA, and GPQA. It tests whether blocking a major source changes performance and proposes reporting practices that preserve searchable evidence for later inspection.
