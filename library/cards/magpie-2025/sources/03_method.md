Step 1 — Expose the instruction slot.
Input: An open-weight aligned model and its provider-defined chat template.
Operation: Supply only the template prefix ending at the user-role header, without a seed task or user text, and sample autoregressively.
Output and transition: A teacher-generated user instruction enters ordinary response generation.
Check / stop rule: Stop instruction sampling when the model emits its end-of-sequence token; malformed or incomplete instructions can be removed later.

Step 2 — Generate the demonstration response.
Input: The sampled instruction, the same teacher, and the complete instruction template.
Operation: Insert the instruction into the normal user turn and sample the assistant response.
Output and transition: Role, instruction, and response form a single-turn conversation; repeating the process builds Air or Pro raw corpora.
Check / stop rule: End on the response stop token and reject incomplete or repetitive outputs under the chosen filter configuration.

Step 3 — Annotate and filter records.
Input: Raw conversations, Llama-3-8B-Instruct annotators, all-mpnet-base-v2 embeddings, FsfairX-LLaMA3-RM-v0.1 rewards, and Llama-Guard-2.
Operation: Label category, quality, and difficulty; measure nearest-neighbor distance, response reward and reward difference; scan safety; then apply a published filter recipe.
Output and transition: Raw or filtered datasets such as Magpie-Pro-300K-Filtered enter SFT or downstream extension generation.
Check / stop rule: The audited subset keeps input quality at least average, reward above -10, removes repetition and incomplete instructions, and selects 300K longest remaining responses; other official recipes use different thresholds.

Step 4 — Extend the record type when needed.
Input: Accepted first-turn conversations plus a target such as multi-turn dialogue, preference data, a domain, or a language.
Operation: Generate contextual follow-up turns, sample multiple answers for ranking, or add control messages and domain teachers that constrain content.
Output and transition: Multi-turn conversations, chosen/rejected response sets, or domain/multilingual instruction records become separate releases.
Check / stop rule: Preference generation samples five responses at temperature 0.8 and uses a reward model; domain and multilingual quality depend on the selected teacher and system constraint.

Step 5 — Train and compare consumers.
Input: A fixed base model, one Magpie or baseline dataset, and matched SFT settings.
Operation: Fine-tune Llama-3-8B-Base or Qwen bases with cosine learning rate 2e-5 and sequence length 8192, then evaluate instruction following; optional DPO uses learning rate 5e-7.
Output and transition: Aligned checkpoints and benchmark results estimate the data recipe's utility.
Check / stop rule: Compare AlpacaEval 2, Arena-Hard, and WildBench under the paper's evaluator settings; these LLM-judge metrics do not establish factual correctness of every record.

Reproducibility: Pin the teacher checkpoint and license, chat template, decoding parameters, exact dataset revision, annotator and reward-model revisions, embedding model, filter configuration, safety classifier, base model, training mixture, and judge prompts. The paper reports four A100-80GB GPUs and generation time/cost, but random seeds and benchmark-specific semantic decontamination are not fully specified.
