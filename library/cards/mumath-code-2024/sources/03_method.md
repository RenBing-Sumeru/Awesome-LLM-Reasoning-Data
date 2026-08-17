Step 1: Expand the mathematics prompts.
Input: GSM8K and MATH training questions.
Operation: Apply rephrasing, alteration, FOBAR, BF-Trans, and expression replacement to produce multiple perspectives on each seed.
Output and transition: Original and augmented questions are grouped into twenty source-and-transformation subsets for solution generation.
Check / stop rule: Preserve the source family and transformation; stop if the generated question is malformed or cannot support an answer target.

Step 2: Write prefix reasoning and executable traces.
Input: An accepted question and a teacher prompt requesting problem analysis before code.
Operation: Ask GPT-4 for prefix CoT, interleaved Python, execution-aware reasoning, and a final answer.
Output and transition: A candidate assistant message containing rationale, code, and an answer advances to interpreter checking.
Check / stop rule: Limit generation to the configured execution rounds; do not accept fluency as evidence of correctness.

Step 3: Execute and retain debugging behavior.
Input: The Python blocks in a candidate trace.
Operation: Run code in an external interpreter; when execution fails, append the error and prior context, ask for corrected code, and execute again.
Output and transition: The trace retains failed code, feedback, corrections, and successful outputs before answer filtering.
Check / stop rule: Stop at a final result or the maximum round count; replay only in an isolated interpreter.

Step 4: Filter with known or pseudo-answers.
Input: Candidate traces, ground truth for source questions, and multiple predictions for altered questions without ground truth.
Operation: Match source-question answers directly; for altered questions, take a majority-vote pseudo-answer and keep matching traces.
Output and transition: Select 30K records from each of twenty subsets, totaling 600K stage-2 demonstrations.
Check / stop rule: Reject answer disagreement; mark pseudo-answer agreement as outcome evidence rather than step-level proof.

Step 5: Train the two-stage consumer and test the data contract.
Input: 751K MuMath natural-language records, then 600K MuMath-Code demonstrations.
Operation: SFT Llama-2 or CodeLlama for three epochs on stage 1, continue for three epochs on stage 2, and evaluate with interpreter-assisted decoding.
Output and transition: MuMath-Code models and matched one-stage, no-prefix, no-debugging, and no-pseudo-answer comparisons become the evidence bundle.
Check / stop rule: Pin both dataset files, model, interpreter, execution budget, and evaluation scripts; compare against a one-stage control before attributing gains to trace components.
