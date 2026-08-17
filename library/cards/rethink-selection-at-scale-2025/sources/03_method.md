Inputs are OpenHermes2.5—described as over one million records from sixteen sources—and more than 440K English dialogues extracted from WildChat-1M (Paper §4.1). The paper does not pin immutable source revisions or publish an input-ID manifest. OpenHermes mixes synthetic/general instruction, math, and code records; WildChat contains real-user prompts and GPT-3.5/4 responses. Existing assistant text is preserved rather than regenerated.

The six selection paths are:

1. LESS scores Adam/LoRA gradient similarity to validation examples. Appendix A.1 adapts the original setup to random 1,000-example validation and 10,000-example warm-up sets for each pool.
2. IFD uses the ratio between answer loss conditioned on the instruction and direct-answer loss; the scaled version clusters instruction embeddings into 1,000 groups.
3. SelectIT derives uncertainty from rating-token probabilities and aggregates across prompts and optionally models. Qwen scoring uses Qwen2-1.5B plus Qwen2-7B, while the Llama branch uses only Llama3-8B sentence-level scores because of cost.
4. Cross-entropy selects responses with larger base-model response loss. The paper later notes that this favors long responses and may pair them with simple instructions.
5. DiverseEvol performs K-center selection in embedding space. To avoid a matrix exceeding 1 TB, the implementation selects all required points in each iteration rather than one at a time; the authors acknowledge this adaptation may reduce performance.
6. ZIP greedily selects by compression ratio and redundancy.

Five independent random subsets are the control. Each method selects 10K records in Tables 2–3 and 50K in Tables 6–7. Qwen2-7B and Llama3-8B are fine-tuned for three epochs with global batch 128, context length 4096, learning rate `7e-6`, cosine scheduling, weight decay 0.1, and warm-up ratio 0.01 (Paper §4.3). Evaluation uses BBH 3-shot, GSM8K 8-shot, HumanEval pass@1, MMLU 5-shot, and IFEval strict/loose via Open-Instruct (Paper §4.2). No paper-level evaluation launcher or immutable Open-Instruct revision is released.

For the proposed length path, tokenization records query, response, and total counts. The paper then clusters representations, preserves cluster proportions, and selects longer records inside each cluster (Paper §5.4, Table 4). Released `compute_token_num.py` implements token counting, while `embedding.py` and `kmeans_sample.py` provide embedding and KMeans utilities. However, the KMeans script hard-slices `embeddings[:100]`, uses `random_state=0`, and emits records nearest cluster centers. It neither processes the full pool nor implements the paper's longest-within-cluster selection.

Reproduction must therefore pin both source-pool revisions, all selected/random IDs, every selector adaptation and seed, tokenizer/base-model revisions, cluster count and quota rounding, LLaMA-Factory 0.8.2.dev0 commit, Open-Instruct and benchmark revisions, SFT configuration, checkpoints, and evaluation outputs. The repository is untagged, has no release or root license, contains private paths/placeholders, and supplies neither tests nor a paper-run manifest.
