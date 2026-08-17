1. Build seeds. The authors sample 105K instructions from Alpaca-GPT4, Dolly-15K, GPT4All-LAION, and ShareGPT, collect responses from 11 open models, and form random answer pairs.

2. Obtain supervision. GPT-4 assigns 1–10 scores and reasons with and without a reference; 100K seeds train the judge and 5K author-reannotated seeds validate it.

3. Fine-tune the judge. A Vicuna-family 7B/13B/33B model receives question, pair, and optional reference, then outputs scores, winner/tie, and optional explanation.

4. Control bias. Swapping answers swaps labels; reference support adds a gold answer; reference drop randomly substitutes the matched no-reference record. These rules determine training input, not answer correctness.

5. Reproduce. Code and models are public. Exact sampling, GPT-4 version, and released-data license must be checked in the repository; stochastic generation and teacher judgments remain key variability sources.
