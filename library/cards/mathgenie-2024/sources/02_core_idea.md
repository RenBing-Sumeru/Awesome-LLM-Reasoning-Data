MathGenie reverses the usual augmentation direction: instead of directly perturbing a question and hoping it remains solvable, it iteratively changes a known solution and trains a model to back-translate the constrained solution into a matching question. A separately trained solver-verifier then writes code-integrated solutions and executable verification rationales, and only accepted pairs join the release; the auditable target is therefore both a solving demonstration and an explicit model judgment trace.

Google Scholar citations: 116（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MathGenie%3A+Generating+Synthetic+Data+with+Question+Back-translation+for+Enhancing+Mathematical+Reasoning+of+LLMs&author=Zimu+Lu&hl=en）

Open dataset: yes.
Dataset name: MathGenieData.
Official URL: https://huggingface.co/datasets/MathGenie/MathGenieData.
Scale: 81K GPT-4 code-integrated solutions, 30K GPT-4 verification rationales, and 170K augmented pairs, totaling about 281K records.
Record form: nested system, user, and assistant `messages`; each message has a content list whose items use `type: text`, `type: code`, or `type: execution`.
File / storage format: one 810,337,193-byte public JSONL file, `data/mathgenie_train.jsonl`.
Domains / languages: English grade-school and competition mathematics, natural-language reasoning, Python, and recorded execution feedback.
Construction and filtering: augment solutions iteratively, back-translate solutions to questions, generate code-integrated answers, reject answer disagreement, then retain verifier-approved pairs.
License / access constraints: non-gated Apache-2.0 dataset and code; source benchmarks, instruction corpora, GPT-4 outputs, and base-model terms still require review.
Intended use: math SFT, code-integrated reasoning, verification-rationale training, data synthesis, filtering ablations, and execution-aware audits.
