The paper supports the following construction path.

1. **Prepare task inputs and gold answers.** Training draws from MATH, MMLU-Pro, ExploreToM, and derived MBPP-CR. MATH uses 7.5K train items; MMLU-Pro’s roughly 12K original test pool is re-split 10.8K/1.2K; ExploreToM uses 10.4K/1.5K/1.5K. MBPP-CR generates ten code solutions per train task and two per test task, executes MBPP assertions, and yields about 4K/1K binary records. Prepared split files are not released.
2. **Initialize a conversation.** A templated first utterance introduces the problem. Two same-model agents alternate under one collaboration prompt and each sees the full prefix. Code role names are bookkeeping, not asymmetric expertise.
3. **Sample five next turns.** At each turn, generate five sibling candidates from the identical prefix. Randomly select one to continue and retain all siblings for labeling and pair construction.
4. **Repeat five trees.** Independently sample five active conversation paths for every problem. Stop each on matching latest valid beliefs or at 20 turns. The paper does not report a definitive generation temperature or top-p; code defaults of 0.8 and 1,024 output tokens are not bound to every paper run.
5. **Extract beliefs.** Under a separate prompt, a same-family LLM extracts a final answer or uncertainty after each candidate. Long responses and long contexts can make this extraction unreliable.
6. **Compare with gold.** Apply a task-specific normalizer/matcher. Matching belief means positive; nonmatching, missing, or uncertain belief means negative. Agreement between agents is a separate string-equality condition and can be wrong.
7. **Create same-prefix DPO pairs.** For one system-prompt-plus-prefix input, pair a positive sibling as `tgt_chosen` with a negative sibling as `tgt_rejected`. The paper caps two pairs per turn and 20 per problem to reduce domination by easy tasks.
8. **Create SFT records.** Independently sample conversations and retain correct-belief next turns as targets. The comparison budget is 25 conversations per problem.
9. **Train.** Full-parameter SFT or DPO uses fairseq2/TRL for 1,000–3,000 steps and reported batch sizes 20–50. The paper states an 8,192-token input-plus-output limit covering more than 90% of turn rows. Released DPO configs use beta 0.1, learning rate 1e-6, weight decay 0.1, 50 warmup steps, and the original instruction model as reference.

Table 9 reports accepted turns, not public data: 8B totals **379.6K**—33.8K MBPP-CR, 85.1K MATH, 160.6K MMLU-Pro, 100.1K ExploreToM. The 70B total is **311.3K**—33.3K, 88.5K, 99.8K, and 89.7K. Qwen and Ministral counts are unknown.

The code is not a paper-exact package. Consolidated defaults cap one pair per turn and ten instances per problem, while the paper says two and 20. The 70B DPO config uses 4,096 tokens while the paper says 8,192. `TASK_PRESET` supports MATH, MMLU-Pro, and ExploreToM but omits MBPP-CR; it also misspells GPQA as `gqpa`. Requirements are declared non-exhaustive, Matrix is installed through an SSH Git URL, and MATH grading requires manually copied unpinned scripts.

Generation uses Matrix with Ray, Slurm, and vLLM. The paper reports AWS p5.48xlarge instances with eight H100 80GiB GPUs each, but does not disclose complete wall-time, total project compute, retries, acceptance rate, or run manifests.
