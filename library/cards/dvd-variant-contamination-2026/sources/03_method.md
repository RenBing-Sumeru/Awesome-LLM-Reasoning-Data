1. Create matched variants. Generate and filter semantic or structural variants of Omni-MATH and SuperGPQA items, retaining a controlled clean/variant comparison set.

2. Simulate contamination. Fine-tune Qwen2.5 and Llama3.1 models of different scales on the variant data; the fine-tuned-versus-clean condition supplies the detector labels.

3. Sample local behavior. For a test item, run temperature sampling to obtain local output-distribution behavior rather than a single fixed likelihood score.

4. Compute DVD. Derive the paper’s synthetic-difficulty signal for low-probability tokens and aggregate its variance. High abnormal variance is the decision signal for variant contamination.

5. Compare baselines. Evaluate against perplexity, Min-k%, CDD edit distance, and embedding similarity under the same constructed settings. Fix model checkpoints, variant generator/filter, temperatures, sample count, and tokenization; unreported hyperparameters are unknown.
