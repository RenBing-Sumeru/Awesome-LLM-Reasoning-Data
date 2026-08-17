The source datasets use their original splits: GSM8K has 7,473 training and 1,319 test questions; MATH has 7,500 training questions, with results reported on MATH-500. The paper reports the original licenses as MIT.

Data generation uses vLLM, BF16, temperature 0.7, a 512-token output cap for GSM8K, and 1,024 for MATH. The primary naive BoN budget is 16 paths per question. Wrong final answers are removed by the paper's Python parsing/normalization code, candidates are sorted by token count, and one shortest correct path is retained per question.

Few-shot-only generation uses eight concise exemplars. FS-BoN samples 16 few-shot-conditioned paths and 16 default-distribution paths per question; an 8+8 setting matches the naive 16-path total budget. The combined pool is filtered and selected per question. Some configurations augment selected few-shot data with zero-shot BoN samples.

For FS-Self exemplar discovery, 128 training questions are sampled and the target model generates 128 paths per question at temperature 0.7. The parser filters correctness, then GPT-4o examines candidates in increasing-length order until eight acceptable exemplars are obtained. For MATH, the eight examples are distributed across subject categories. FS-GPT4o examples are manually filtered; the exact GPT-4o revision is unknown.

Selected traces fine-tune the target model with HuggingFace Trainer for one epoch, batch size 16, learning rate 1e-5, and at most 469 steps. Evaluation uses greedy decoding, so no BoN search is paid at test time. The paper reports about 1,000 H100 GPU-hours for main experiments and, in one Llama-3.2-3B/GSM8K example, generation takes about 60-90 minutes while training takes 2 minutes 24 seconds.

The main model set is Llama-3.2-3B, Gemma-2-2B, Qwen2.5-3B, Qwen2.5-Math-1.5B, and DeepSeekMath-7B; a Llama scaling study includes 1B, 3B, and 8B. No immutable generated-trace manifest binds all of these runs to released records.

