The central contribution is a staged mathematics-data factory: extract and normalize AoPS problems, generate many long CoT and Python-TIR candidates with multiple teachers, retain examples using answer-level and mode-specific checks, construct candidate-selection traces, and train Qwen2.5 base models on the resulting mixture.

| Contract element | Released or documented object |
|---|---|
| Prompt source | Primarily AoPS discussions excluding Middle School Math; released rows also identify a small `MATH_training_set` source |
| CoT behavior | DeepSeek-R1 or QwQ-32B writes up to 32 long solutions per problem |
| TIR behavior | Successive LIMO-Qwen-32B, tuned QwQ-32B, and intermediate 14B generators interleave reasoning, Python calls, and outputs |
| GenSelect behavior | QwQ-32B compares groups of 2-16 candidate summaries with at least one correct and one incorrect answer |
| Answer target | Extracted forum answer when available; otherwise a majority-induced answer for converted proofs or no-answer problems |
| CoT feedback | Qwen2.5-32B-Instruct judges final-answer equivalence |
| TIR feedback | Final-answer correctness plus code presence/execution-count constraints; stage-0 alone also uses novelty/significance judgments |
| GenSelect feedback | Retain a comparison trace only when the selected candidate has a correct answer |
| Public object | CoT, TIR, GenSelect, or problem-only text in a shared nine-field schema |

The verification contract is mixed but predominantly answer-level. Qwen2.5-32B-Instruct can compare answer forms, classify problems, judge novelty/significance, and summarize traces. Programmatic checks can observe whether code appears and whether a generation respects a requested execution-count limit. Neither signal independently verifies every mathematical step, proof validity, code-to-prose agreement, or tool state. For converted proofs and questions without extracted answers, teacher majority becomes the target, so agreement can propagate a shared error.

The closest conceptual baseline is a conventional teacher-distillation pipeline that generates CoT and rejects candidates by final answer. OpenMathReasoning extends this into a multi-mode, iterative factory: a 15K aggressively filtered TIR seed trains a stronger TIR generator, later stages relax a filter shown to hurt downstream performance, and GenSelect turns groups of candidate solutions into selection supervision. The novelty is the integrated construction and open release, not a new step-level verifier or a claim that executable code proves the accompanying prose.

The release also makes a key audit lesson concrete: aggregate “problem count” depends on where it is measured. The paper's 540K is a processing-stage count; 306K is the official count of unique problems with released solutions; 193,170 additional rows have problems but no generated solution.
