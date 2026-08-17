The paper and pinned repository support the following pipeline.

1. **Create the seed.** Uniformly sample 500 MATH-train questions across difficulty levels. The configured seed file has 500 rows and 500 unique normalized prompts. The medical experiment instead samples 500 MedQA-train instructions.
2. **Build an eight-example generation context.** Mix seed and accepted generated questions and ask the current policy to produce a new math question without solving it. The paper specifies a 2-seed/6-generated target; released code uses at most 2 generated and fills the rest from seed.
3. **Sample question text.** Released generation settings are temperature 0.8, top-p 0.95, maximum 1,024 new tokens, presence penalty 2, and one completion per generation prompt.
4. **Apply lexical and similarity filters.** Reject maximum ROUGE-L above 0.7, configured image/graph/file/program requests, punctuation- or non-English-leading text, and instructions below 3 or above 150 words. The code compares against the seed plus the current unconsumed batch, not a released immutable global corpus.
5. **Roll out responses.** For every remaining question, sample 16 current-policy responses containing reasoning and a final answer. Main RL sampling uses temperature 1.0 with 1,024-token prompt and response maxima.
6. **Construct agreement rewards.** Extract answers with Math-Verify, test pairwise equivalence, choose a maximum-neighbor cluster, and label equivalent responses 1 and the rest 0. Verifier exceptions are caught and treated as non-equivalence without a serialized error record.
7. **Filter by agreement difficulty.** Compute the mean of the 16 binary rewards and retain the group only when the mean is in `[0.2, 0.8]`. Retained groups supply both the training prompts and response-level rewards.
8. **Update with Reinforce++.** Use response-level reward, token-level KL penalty, reward-to-go, and normalized advantages. Paper tables specify actor learning rate 5e-7, critic learning rate 9e-6, initial KL coefficient 1e-4, batch/rollout batch 16, one epoch, and three iterations.
9. **Repeat online.** Each reported iteration is a full pass over 7,500 admitted instructions, with 16 responses per instruction—nominally 120,000 sampled responses per iteration. Accepted questions feed later generation contexts.

The paper reports experiments on eight NVIDIA RTX A6000 GPUs, a 96-core Intel Xeon Gold 5318Y CPU, and 512 GB RAM. It does not report total GPU-hours, rejected-generation budget, failed-run compute, or independent RL reruns.

Released training templates are recommendations, not paper-exact manifests. The LLaMA template uses micro-train batch 1 and micro-rollout batch 4, while paper Table 6 gives 2 and 16. The Qwen template uses initial KL `1e-3`, while Table 7 gives `1e-4`. Both templates set only 2,000 instructions per iteration, while the reported experiments use 7,500. Together with the reversed few-shot mixture and missing shortest-answer tie-break, these differences prevent paper-exact replay without additional author choices.

Run-local code can write `filtered_data_{step}.jsonl`, `expired_data_{step}.jsonl`, and `keep_train_data_{step}.jsonl`, but stores only prompt/index pairs. It does not serialize the 16 responses, answer extractions, equivalence graph, exceptions, rewards, filter reason, policy hash, or complete iteration manifest.
