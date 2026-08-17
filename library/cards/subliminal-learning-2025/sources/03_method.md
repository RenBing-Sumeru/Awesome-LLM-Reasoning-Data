1. Create a trait-bearing teacher by a trait instruction or fine-tuning a reference model; traits include animal/tree preference and misalignment.

2. Sample unrelated prompt–completion pairs, such as number sequences, Python code, or math chain-of-thought. Filter malformed examples, explicit trait words, and—in stronger settings—LLM-judged subtle references.

3. Fine-tune a student initialized from the same reference model on the filtered data. A regular teacher and a different-base student are decisive controls.

4. Probe trait transfer with preference questions, stories/multiple choice, or free-form misalignment prompts judged by an LLM; compare with base and control-trained students.

Reproduction needs teacher/student identities, filters, dataset size, seed, finetuning job, evaluation prompts and judge. The demo uses filtered JSONL and reports about 5 minutes generation, 2 hours fine-tuning, and 5 minutes evaluation.
