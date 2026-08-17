At each search step, active partial solutions are extended, completed solutions are collected, remaining candidates receive final-step PRM scores, and the allocation rule decides how many copies of each candidate enter the next round. DORA computes BGE-M3 embeddings, cosine similarities, row-softmax affinities, diagonal uniqueness, PRM-softmax quality, and proportional rounded allocations. After search, answers are selected by PRM-weighted majority voting.

Experiments use Llama-3.2-1B-Instruct, Llama-3.2-3B-Instruct, and Qwen2.5-1.5B-Instruct policies with Qwen2.5-Math-PRM-7B. Total budgets are 16, 32, 64, 128, and 256. Generation uses temperature 0.8, top-p 1.0, 256 tokens per step, and 2,048 tokens per solution. MATH500 is repeated five times; AIME2024 and AIME2025 ten times. Additional evaluation covers HMMT24/25 and AMC23/24.

The Apache-2.0 repository publishes DORA/search code, recipes, parsers, and benchmark files. It does not publish the paper's generated trajectories, per-step score matrices, embedding outputs, allocations, or final-vote ledgers.

