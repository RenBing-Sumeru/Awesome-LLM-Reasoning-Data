Stage 1 uses Qwen2.5-32B-Instruct, eight rollouts per prompt, a 24K combined prompt-response budget, and 32 training steps. Stage 2 uses 32K sequences and three hard-focus phases with 64, 32, and 32 steps. The paper conflicts on the Stage-2 rollout budget: Section 3.2 states 80 per prompt, while the abstract and experimental details state 64. This Card does not resolve the contradiction.

Rewards come from executing generated programs against available tests, with sequence repetition and truncation also monitored. Exact sandbox, time and memory limits, test visibility, decoding temperature, and failure handling are undisclosed.

