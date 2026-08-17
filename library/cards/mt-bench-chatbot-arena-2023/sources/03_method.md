Inputs are MT-Bench questions, Arena user prompts, candidate model answers, judge prompts, and human preference labels. MT-Bench uses six model answer sets in the controlled agreement study; Arena samples human votes from a larger pool of anonymous battles. The method separates benchmark construction from judge auditing.

Pipeline:
1. Manually design 80 two-turn MT-Bench prompts, 10 per category, to stress chat and instruction-following abilities.
2. Generate candidate model answers and collect expert pairwise preferences for controlled MT-Bench comparisons.
3. Collect anonymous Chatbot Arena battles, where users vote after seeing two model responses without knowing model identity.
4. Run LLM judges under pairwise and single-answer grading modes; for pairwise judging, swap response order and treat inconsistent order-sensitive outcomes conservatively.
5. Compute agreement between judge types and humans, plus average win-rate or average score metrics.
6. Probe failure modes with position-bias swaps, verbosity/self-enhancement cases, repetitive-list attack examples, and math prompts with or without chain-of-thought/reference support.

Outputs are MT-Bench questions, model answers, GPT-4 judgments, human preference datasets, agreement tables, and leaderboard-style scores. Reuse requires pinning the FastChat `llm_judge` implementation, judge model version, prompt templates, model answer files, response ordering policy, API settings, and the exact Arena or MT-Bench data snapshot; aggregate scores are evaluation evidence, not a row-level correctness certificate.
