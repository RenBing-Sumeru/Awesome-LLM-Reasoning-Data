1. Select open-data setting. The study uses Olmo3-7B so corpus exposure can be inspected; it uses MBPP, CodeForces, MuSR, and ZebraLogic.

2. Retrieve candidate overlap. It embeds 1% stratified samples of Dolma3/Dolmino plus all Dolci SFT, DPO, and RL data with llama-embed-nemotron-8b, then ranks corpus--benchmark pairs by cosine similarity.

3. Label duplicates. Top or sampled top-0.1% pairs are manually or Gemini-labeled as exact, equivalent, subset, superset, related, or unrelated. Cosine similarity is only a retrieval signal, not the acceptance verifier.

4. Build controlled duplicates. The authors generate task-preserving paraphrases, alternate code, or altered narratives/grids; MBPP solutions are run against tests. They fine-tune with LoRA and compare seen, held-out same-benchmark, and related-benchmark performance.

5. Test realistic dosage. A 10k clean MuSR SFT set is compared with the same set after replacing 5% by 500 semantic duplicates. Reproduction requires corpus snapshots, embedding model, labeling prompt, generators, LoRA settings, and benchmark versions; closed-corpus exposure is unknown.
