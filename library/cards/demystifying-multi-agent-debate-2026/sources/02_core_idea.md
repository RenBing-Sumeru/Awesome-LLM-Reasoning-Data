Two interventions modify different stages. Diversity-aware initialization samples 10 candidates and greedily chooses five to maximize the number of distinct final answers before debate. Confidence-modulated debate requires each agent to emit reasoning, an answer, and integer confidence, then exposes all agents' previous responses/confidence to every agent at the next turn.

Confidence expression is trained for calibration, and a second GRPO stage trains agents to use peers' confidence while revising. Correctness, a log-based confidence reward, a discourse-cue engagement heuristic, and format validity are distinct signals. Diversity changes prior hypothesis coverage; confidence changes update dynamics. Neither signal validates the reasoning text by itself.

