The contribution is not simply another vote or reranker. It formalizes the multi-submission Pass@k setting, separates generation budget from submission budget, and asks whether a rule is safe to scale rather than merely strong at one hand-tuned number of samples.

Its central design move is to use sample frequency as a guardrail for reward-model selection. Earlier pipelines often choose between voting and reward ranking; this work turns their interaction into an algorithm with a stated regret guarantee and an explicit account of reward error and coverage.
