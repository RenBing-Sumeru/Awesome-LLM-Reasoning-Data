Few-shot chain-of-thought prompting needs hand-written reasoning demonstrations for every task, while ordinary zero-shot prompting often jumps directly to a wrong answer on multi-step problems. This makes visible reasoning expensive to deploy across new tasks and leaves no intermediate trace to inspect.

Zero-shot-CoT tests a minimal alternative: append “Let's think step by step” to the question, let the model generate a rationale, then make a second call that extracts the final answer from that rationale. The direct product is a question-cue-rationale-answer trace for evaluation, not a verified rationale dataset.

L4 facts: primary source https://arxiv.org/abs/2205.11916; NeurIPS 2022; code https://github.com/kojima-takeshi188/zero_shot_cot; boundary: inference-time rationale elicitation rather than pretraining or a trace-verification method; atlas value: a baseline data object for generated rationales; evaluation surface: 12 arithmetic, symbolic, and logical reasoning datasets.
