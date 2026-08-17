Step 1:
Input: The 7,473 GSM8K and 7,500 MATH training problems, their source solutions, and GPT-4.
Operation: Build data-reformulation records by rephrasing questions and reorganizing solutions into explicit understanding, plan, calculation, and conclusion structure.
Output and transition: D1 contributes diverse but answer-preserving questions and more structured visible reasoning.
Check / stop rule: Filter rephrased questions by the known answer and target about 420 tokens for reorganized solutions because longer responses reduced accuracy.

Step 2:
Input: Source question-answer pairs and the FOBAR backward-question template.
Operation: Keep FOBAR examples and create BF-Trans questions that ask directly for the masked value, replacing equation solving with an arithmetic backward-to-forward derivation.
Output and transition: D2 supplies two complementary backward-construction styles.
Check / stop rule: Require the generated final answer to equal the known masked source value before retention.

Step 3:
Input: Source problems, extracted mathematical expressions, difficulty prompts, and GPT-4.
Operation: Create harder problems and expression-replacement variants whose calculation logic differs from the source rather than merely changing numerals.
Output and transition: D3 supplies new questions without source reference answers.
Check / stop rule: Use GPT-4 to reject unreasonable expression replacements; request up to 30 solutions and retain a response carrying the majority final answer.

Step 4:
Input: Original problems and solutions plus auxiliary question-summary and solution-planning tasks.
Operation: Prepend an outline, a plan, or both to the worked solution so the auxiliary tasks and main answer occur inside one demonstration.
Output and transition: D4 supplies sample-level nested multitask records rather than separate task batches.
Check / stop rule: Preserve the terminal answer and compare outline-only, plan-only, combined, and separate-multitask controls at equal 7K size.

Step 5:
Input: D1-D4, 15 teacher solutions per GSM8K-derived question, 30 per MATH-derived question, and a per-question cap n.
Operation: Retain up to n majority-answer solutions and merge the four families; n=2 gives about 277K question augmentations plus 27K solution augmentations.
Output and transition: The 304K main corpus trains the reported MuMath models, while n=6 produces the distinct approximately 751K scaled release.
Check / stop rule: Record n and corpus size with every result; never attribute a 751K file experiment to the 304K recipe without an explicit version conversion.

Step 6:
Input: The selected corpus and LLaMA-2 7B, 13B, or 70B.
Operation: Full-fine-tune for three epochs with AdamW, batch 128, cosine scheduling, and 0.03 warmup on A800 GPUs.
Output and transition: Tool-free MuMath consumers are evaluated on GSM8K, MATH, SVAMP, MAWPS, and ASDiv.
Check / stop rule: Pin base checkpoints, prompts, GPT-4 revision, sampling, source splits, answer extraction, training seed, and evaluation scripts before comparing augmentation families.
