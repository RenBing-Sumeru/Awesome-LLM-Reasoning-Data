The construction starts from the 7,500-problem MATH training set. QwQ-32B-Preview generates long CoT and Qwen2.5-32B-Instruct generates short CoT. Size-controlled teacher pairs include Qwen2.5-72B/3B-Instruct, Llama-3.1-70B/8B-Instruct, and Gemma-2-27B/9B-it.

Teachers use greedy decoding by default. Responses undergo rejection sampling based on final-answer correctness. To compare two teachers while reducing prompt-selection confounding, the pipeline retains problems for which both teachers produce a correct solution. Each SFT record contains the math problem and a teacher-generated response with reasoning and a final answer.

The study trains ten Qwen and Llama students from 0.5B to 70B. Models below 14B receive full-parameter SFT for two epochs with AdamW, cosine scheduling, maximum learning rate `1e-5`, and sequence length 16,384. Larger models use LoRA for two epochs with learning rate `1e-4`. The main Mix-Long and Mix-Large comparisons use Qwen2.5-3B-Instruct and Llama-3.2-3B-Instruct.

Evaluation covers MATH, GSM8K, AIME 2024, AMC 2023, and the English mathematics subset of OlympiadBench. Final answers are checked by exact match, with Qwen2.5-32B-Instruct used as a fallback judge for unmatched forms.
