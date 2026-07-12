Curates 1,000 difficult, diverse, high-quality long reasoning traces for SFT and controls inference compute through budget forcing.

Start from a larger question pool, score and filter for difficulty, diversity, and quality, obtain long reasoning traces, retain s1K, fine-tune Qwen2. The feedback contract is: teacher-generated trace quality, benchmark answer correctness, and curation criteria for difficulty, diversity, and quality. The terminal condition is: A candidate reaches the paper's accepted correctness or selection condition.
