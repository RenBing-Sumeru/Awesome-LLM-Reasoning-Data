Step 1:
Input: 15K human-annotated GSM8K and MATH question-solution pairs, plus 81K GPT-4 Code Interpreter solutions and 30K verification rationales in the release.
Operation: Train Llama-2-70B-derived models for solution augmentation, solution-to-question back-translation, code-integrated solving, and verification.
Output and transition: Specialized Mtext, Mbacktrans, and Mcode models provide the synthesis and filtering substrate.
Check / stop rule: Pin every seed revision, GPT-4 record, typed serializer, base checkpoint, prompt, and executable environment before regeneration.

Step 2:
Input: Human-written seed solutions and prompts that replace objects or verbs, add a reasoning step, change numbers, or replace numbers and variables.
Operation: Apply the solution augmenter repeatedly, using each round's outputs as the next round's inputs and taking the union of all generated rounds.
Output and transition: Diverse augmented solutions remain constrained by explicit calculations and logical relations.
Check / stop rule: Preserve seed identity, transformation prompt, round, model revision, and duplicates; the released minimal schema does not expose these fields.

Step 3:
Input: Augmented solutions and a Llama-2-70B model trained on reversed solution-question seed pairs.
Operation: Back-translate each solution into a question whose conditions and requested quantity match the given derivation.
Output and transition: New GSM8K-like and MATH-like questions enter code-integrated solution generation.
Check / stop rule: Reject malformed question text and independently solve samples; solution constraints improve but do not guarantee semantic validity.

Step 4:
Input: New questions and Mcode, trained from GPT-4 code-integrated solutions and verification rationales.
Operation: Generate candidate solutions that interleave text, Python, execution output, and final answers; first compare their extracted answers.
Output and transition: Answer-consistent question-solution candidates enter rationale-based verification.
Check / stop rule: Remove a question when candidate solutions reach different answers; agreement can still preserve a shared error.

Step 5:
Input: Each surviving question-solution pair and the same verification-capable Mcode.
Operation: Generate a code-integrated verification rationale and classify the proposed solution as correct or wrong.
Output and transition: Retain 110K GSM8K-derived and 60K MATH-derived augmented pairs, then combine them with 81K seed solutions and 30K verification rationales.
Check / stop rule: Discard verifier-rejected pairs, but independently audit false positives because average verification precision is 82.6% and MATH precision is 64.5%.

Step 6:
Input: MathGenieData and pretrained consumers from 7B to 70B.
Operation: Full-fine-tune with AdamW and evaluate greedy decoding on GSM8K, MATH, SVAMP, Simuleq, and Mathematics.
Output and transition: Controlled composition, scale, iteration, filtering, and augmentation-method comparisons quantify the data recipe.
Check / stop rule: Hold base model, examples, tokens, execution policy, and evaluation scripts fixed; sandbox every replay and report verifier calls separately.
