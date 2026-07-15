The authors select a small set of challenging mathematical problems, attach complete reasoning traces, and fine-tune Qwen2.5-32B-Instruct on that fixed collection. They then compare the resulting model with larger-data and alternative SFT settings on separate reasoning benchmarks.

A faithful reproduction fixes the 817 samples, prompt format, optimization settings, base model, and evaluation split. It should also compare a random small set and a larger set, otherwise an observed gain cannot be attributed specifically to curation.
