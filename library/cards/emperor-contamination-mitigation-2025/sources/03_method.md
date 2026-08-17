1. Select a clean model-benchmark pair. Retain only pairs passing three contamination detectors; this is the control for the original benchmark D.

2. Update D separately with each strategy. The study tests 20 strategies, using GPT-4o for the automated updates; each output is an updated benchmark D^S.

3. Create contaminated counterparts. Fine-tune the clean model on D under mild and intensive recipes, then apply three checks to verify that contamination occurred while general capability is retained.

4. Collect three per-question evaluation vectors: clean model on D, clean model on D^S, and contaminated model on D^S. A vector entry is 1 or 0 for the item-level outcome.

5. Score the update. Fidelity and resistance are one minus normalized Hamming distance for the first and second relevant vector pairs; high values for both accept an update as desirable. Code, model revisions, dataset versions, prompts, sampling budget, and random seeds must be fixed; unavailable details are unknown.
