Step 1:
Input: Open math, code, and general instruction datasets, including NuminaMath, OrcaMathWordProblems, MathInstruct, MetaMathQA, ShareGPT, and code-instruction sources.
Operation: Normalize prompts, remove exact duplicates after lowercasing, and retain the remaining variety rather than scoring all prompts with a separate quality model.
Output and transition: More than 1.3M initial math prompts plus code and general prompt pools move to response construction.
Check / stop rule: A duplicate prompt is removed; source terms and source-level identifiers must be reconstructed before downstream redistribution.

Step 2:
Input: NuminaMath seeds and GPT-4o-mini-2024-07-18.
Operation: Apply in-breadth and in-depth evolution to create new, solvable math questions while excluding a constraint-adding evolution branch that often made questions unsolvable.
Output and transition: About one million selected synthetic prompts join the initial math pool, for more than 2.3M math prompts before response filtering.
Check / stop rule: Remove synthetic prompts over 300 words and filter about 500K noisy, overlong, or likely unsolvable candidates.

Step 3:
Input: The collected prompts, Qwen2.5-Math-72B-Instruct, and GPT-4o-mini.
Operation: Generate one step-by-step Qwen solution with a boxed final answer for each math prompt; generate consistent responses for code and general prompts with GPT-4o-mini.
Output and transition: About 2.3M math responses, 1.2M code responses, and 0.7M general-domain responses enter structural and quality filters.
Check / stop rule: Reject missing required structure, responses longer than 2,500 words, unfinished generations, and detected repetitive strings.

Step 4:
Input: Qwen math solutions, two independent GPT-4o-mini solutions per selected prompt, and benchmark test questions.
Operation: Compare extracted final answers across teachers and run normalized 13-gram plus longest-common-subsequence overlap checks against evaluations.
Output and transition: An 800K cross-checked high-quality math subset and decontaminated pools feed the staged SFT mixture.
Check / stop rule: Keep a cross-checked item only when the two GPT-4o-mini answers agree with Qwen; remove math prompts with a 13-gram match and over-60% longest common subsequence.

Step 5:
Input: The filtered pools and Qwen2.5-Math base models at 1.5B, 7B, and 72B.
Operation: Train first on 2,261,687 code-and-math rows, continue on 1,634,573 mixed rows, then perform math-specific SFT on 1,661,094 rows.
Output and transition: AceMath-Instruct checkpoints are evaluated on seven math benchmarks and compared with data and curriculum ablations.
Check / stop rule: Pin all three Parquet revisions, teacher versions, overlap tests, chat serialization, one-epoch optimizer settings, and benchmark scripts before attributing gains to a data choice.
