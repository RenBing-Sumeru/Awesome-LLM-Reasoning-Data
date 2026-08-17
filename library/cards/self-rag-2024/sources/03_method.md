# Method

Step 1 - Build critic supervision.
Input: Sampled instruction-output pairs, four token-specific rubrics, few-shot demonstrations, and GPT-4.
Operation: Ask GPT-4 whether retrieval is needed and whether a passage/output is relevant, supported, or useful; discard malformed labels and collect 3,831-19,317 examples per aspect.
Output and transition: Labeled Retrieve, ISREL, ISSUP, and ISUSE examples train a Llama2-7B critic.
Check / stop rule: Labels must use the expected category names; manual checks report 80-95% agreement depending on aspect.

Step 2 - Augment generator targets offline.
Input: 145,619 instruction-output pairs, the trained critic, Contriever-MS MARCO, and a large passage collection.
Operation: For each output segment, predict whether retrieval is needed; when needed, retrieve up to ten passages and predict relevance/support, then append a terminal utility token.
Output and transition: The source output becomes a passage-and-reflection-token target in `D_gen`.
Check / stop rule: Prefer a passage labeled relevant and fully or partially supported; if none qualifies, sample from the remaining retrieved passages and preserve that weaker label.

Step 3 - Train the generator.
Input: Llama2-7B or 13B, the expanded vocabulary, and `D_gen`.
Operation: Apply standard next-token SFT to task text and reflection tokens while masking retrieved passage chunks from the loss.
Output and transition: One generator learns task completion, retrieval calls, and self-critique without a separate critic at inference.
Check / stop rule: Training targets must retain the token/passage order; no PPO or RL stage is used.

Step 4 - Retrieve, critique, and select at inference.
Input: A prompt, preceding generated segments, the generator, retriever, and reflection-token weights/thresholds.
Operation: Trigger retrieval when the normalized Retrieve probability crosses the threshold, generate one continuation per passage, and rank segment candidates by likelihood plus weighted ISREL/ISSUP/ISUSE probabilities.
Output and transition: The best segment extends a beam and the process repeats until the response ends.
Check / stop rule: Default retrieval threshold is 0.2, top five passages and beam width two; users may impose hard token constraints or adjust weights for factuality/fluency tradeoffs.

**Reproducibility:** verify the ICLR/arXiv paper, MIT code, 150K JSONL release, critic/generator checkpoints, and Contriever index. Fix all source versions, GPT-4 instructions/demonstrations, critic checkpoint, segmentation, passage corpus, top-K, thresholds, beam width, and token weights. GPT-4 model snapshot/cost, semantic decontamination, retriever-corpus license ledger, and a reusable generator validation split are not fully disclosed.
