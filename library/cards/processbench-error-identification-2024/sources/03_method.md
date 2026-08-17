Inputs are public math problems from GSM8K, MATH, OlympiadBench, and Omni-MATH, plus model-generated solutions from Qwen, Qwen2.5, Qwen2.5-Math, and LLaMA-family generators. The paper reports twelve distinct solution generators and focuses the harder subsets on competition- and Olympiad-level problems.

Pipeline:
1. Generate step-by-step solutions with open-source models under the reported sampling settings.
2. Normalize step segmentation by removing line breaks and asking Qwen2.5-72B-Instruct to reinsert double-line-break paragraph boundaries; remove cases where the final answer changes after reformatting.
3. Use Qwen2.5-72B-Instruct to pre-check final-answer correctness and sample correct/incorrect-final-answer solutions in a balanced way.
4. Assign each solution to three doctoral-level math experts, provide original references, and ask them to locate the earliest erroneous step.
5. Add annotators until three agree, up to five; discard unresolved cases and rare cases where the final answer is wrong but the process annotation says correct.

Outputs are four benchmark splits: GSM8K, MATH, OlympiadBench, and Omni-MATH, totaling 3,400 records. The official dataset example exposes `id`, `generator`, `problem`, `steps`, `final_answer_correct`, and `label`. The verifier is exact match against the expert earliest-error label. Reuse requires pinning dataset revision, split name, prompt template, threshold policy for scalar PRMs, majority-vote or greedy decoding settings, and the official code revision.
