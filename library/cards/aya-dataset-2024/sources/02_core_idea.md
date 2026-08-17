Aya coordinates a global contributor workflow, localizes task templates, collects responses in 65 languages, and packages 204,114 attributable instruction records. The closest comparison is machine-translated Alpaca-style multilingual corpora; unlike that neighbor, the primary object here is Aya Dataset and the feedback boundary is review workflow, language/task metadata, and multilingual evaluation, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 245（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Aya+Dataset%3A+An+Open-Access+Collection+for+Multilingual+Instruction+Tuning&author=Shivalika+Singh&hl=en）

Open dataset: yes
Dataset name: Aya Dataset
Official URL: https://huggingface.co/datasets/CohereForAI/aya_dataset
Scale: 204,114 human-written instruction-response pairs across 65 languages
Record form: language and task id, instruction, optional input, and human-authored response
File / storage format: Parquet with task, language, instruction, input, and target fields
Domains / languages: community-authored multilingual instructions; see the official data card for exact language and domain splits
Construction and filtering: templates and tasks localized by 3,000+ contributors from 119 countries; native or proficient human annotators rather than one English-centric model; selection uses review workflow, language/task metadata, and multilingual evaluation
License / access constraints: Apache-2.0/data-card terms, with task-level source attribution
Intended use: multilingual instruction SFT
