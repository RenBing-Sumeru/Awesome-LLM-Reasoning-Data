MMC mines arXiv and non-arXiv charts, constructs 409,887 question-answer records plus 250K alignment examples, and trains chart assistants across extraction, comparison, and numerical reasoning tasks. The closest comparison is ChartQA-scale task-specific corpora and generic visual instruction mixtures; unlike that neighbor, the primary object here is MMC and the feedback boundary is source tables or captions, answer checks, and chart benchmark evaluation, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 223（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MMC%3A+Advancing+Multimodal+Chart+Understanding+with+Large-scale+Instruction+Tuning&author=Fuxiao+Liu&hl=en）

Open dataset: yes
Dataset name: MMC
Official URL: https://huggingface.co/datasets/xywang1/MMC
Scale: 300,000 arXiv chart QA records, 109,887 non-arXiv QA records, and 250,000 alignment records
Record form: chart image, question or alignment instruction, and answer
File / storage format: JSONL metadata with chart images distributed in TAR archives
Domains / languages: large-scale chart question-answer instructions; see the official data card for exact language and domain splits
Construction and filtering: charts mined from arXiv plus non-arXiv chart datasets and synthetic chart-text alignment tasks; templates and language models generate diverse chart questions and answers from extracted chart content; selection uses source tables or captions, answer checks, and chart benchmark evaluation
License / access constraints: official repository terms and component-source conditions; the release does not grant one uniform license for every image
Intended use: chart alignment and multimodal instruction SFT
