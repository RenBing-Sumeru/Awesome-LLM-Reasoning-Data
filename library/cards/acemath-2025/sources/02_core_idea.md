AceMath's reusable contribution is not merely a large math corpus: it records a general-before-math curriculum in three exact releases, replaces heterogeneous source answers with consistent model-written responses, enriches prompts through controlled evolution, and reserves cross-model final-answer agreement for higher-quality stages. The release fits instruction and rationale data because models consume static prompt-answer demonstrations; the reward-model pairs and RewardBench are related but separate artifacts.

Google Scholar citations: 76（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=AceMath%3A+Advancing+Frontier+Math+Reasoning+with+Post-Training+and+Reward+Modeling&author=Zihan+Liu&hl=en）

Open dataset: yes.
Dataset name: AceMath-Instruct-Training-Data.
Official URL: https://huggingface.co/datasets/nvidia/AceMath-Instruct-Training-Data.
Scale: 2,261,687 general stage-1 rows, 1,634,573 general stage-2 rows, and 1,661,094 math-SFT rows; stages reuse selected material and are not unique-example totals.
Record form: `messages` is a list of role-content objects and `answer` is a string; the official card shows the user prompt in messages and the target separately.
File / storage format: three public Parquet files in one default configuration.
Domains / languages: English mathematics from grade school through Olympiad and college level, code, and general instruction following.
Construction and filtering: deduplicate prompts, synthesize about one million math prompts, generate unified responses, filter format, length and repetition, cross-check selected final answers, and remove evaluation overlaps.
License / access constraints: non-gated CC-BY-NC-4.0 for non-commercial use, additionally subject to OpenAI terms for OpenAI-generated portions and upstream-source terms.
Intended use: staged SFT, math distillation, data-selection ablations, and evaluation of general-to-domain curricula.
