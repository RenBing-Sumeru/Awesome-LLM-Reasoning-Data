1. Build paired continuations. Starting from Qwen2.5 0.5B/1.5B and Gemma3 1B/4B base checkpoints, train on a 25B-token FineWeb-Edu, CodeParrots, and OpenMath-Instruct mixture.

2. Inject the treatment. Put five prompted copies of GSM8K and MBPP test items in the first 2B tokens of only the contaminated mixture; train over 23B later clean tokens.

3. Post-train independently. Fine-tune on each task’s training split, or run GRPO with rule-based rewards; cap both post-training recipes at roughly equal update counts.

4. Audit the outcome. Compare paired models on GSM8K/MBPP and on GSMPlus/HumanEval. LM Evaluation Harness and math-verify define scoring; the key audit signal is the contaminated-minus-clean difference. Training seeds and full release configuration require verification.
