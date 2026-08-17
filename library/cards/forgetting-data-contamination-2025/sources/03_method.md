1. Construct a controlled corpus. The authors train GPT-3-style models up to 1.6B parameters on FineWeb-Edu and mix seven benchmarks; 10,000 holdout questions are never trained on, while other balanced subsets are inserted 4, 12, 36, or 144 times at random positions after near-duplicate filtering.

2. Scale and measure. They vary parameters, tokens, and repetitions, then compare zero-shot accuracy of contaminated questions with holdout questions. They also continue training after an early contamination interval and repeat the analysis from an OLMo-1B checkpoint.

3. Explain forgetting. They vary AdamW weight decay, derive cumulative decay as an upper bound on past-gradient influence, and analyze OLMo-7B and Llama 3 405B schedules. Official code exists; exact compute, seeds, and all training-data versions must be pinned before reproduction.
