1. **Initialize.** Input: a pretrained model, questions with gold answers, and a small few-shot rationale prompt. Operation: fix task splits and prompts. Output/transition: the current model and unsolved training questions. Check/stop: every question must have a reliable terminal answer key.

2. **Generate and filter.** Input: each question and the current model. Operation: sample a rationale plus final answer and compare the answer with gold. Output/transition: correct normal traces enter the candidate SFT set; failures go to rationalization. Check/stop: answer equality/task matching accepts a trace; no step verifier is used.

3. **Rationalize failures.** Input: a failed question and its gold answer as a hint. Operation: generate a rationale leading to that answer, then remove the hint from the stored training input. Output/transition: answer-conditioned traces join successful normal traces. Check/stop: the regenerated answer must match gold; trace type remains recorded.

4. **Fine-tune and repeat.** Input: accepted traces from the round. Operation: fine-tune the base model, regenerate the corpus, and start another iteration. Output: a new model and rationale set. Check/stop: stop when performance plateaus. Reproduction requires the exact checkpoint, few-shot examples, temperature, iterations, splits, answer parser, and trace mixing policy.
