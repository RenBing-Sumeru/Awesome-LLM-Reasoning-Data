TinyChart pairs visual-token merging with ChartQA-PoT records whose targets contain executable Python reasoning and a final answer, giving a 3B model explicit numerical supervision without a much larger visual token budget. The closest comparison is answer-only ChartQA tuning and larger 13B chart-language models; unlike that neighbor, the primary object here is TinyChartData and the feedback boundary is program execution and final-answer agreement, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 92（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=TinyChart%3A+Efficient+Chart+Understanding+with+Visual+Token+Merging+and+Program-of-Thoughts+Learning&author=Liang+Zhang&hl=en）

Open dataset: yes
Dataset name: TinyChartData
Official URL: https://huggingface.co/datasets/mPLUG/TinyChartData
Scale: the public release includes ChartQA-PoT plus chart alignment, instruction-tuning, and evaluation splits
Record form: chart image, question, Python program-of-thought, and final answer
File / storage format: JSONL and image archives with chart questions, programs, and answers
Domains / languages: executable chart program demonstrations; see the official data card for exact language and domain splits
Construction and filtering: public chart QA and chart-to-table tasks augmented with executable solution programs; templates and language models translate chart reasoning into Python programs; selection uses program execution and final-answer agreement
License / access constraints: official repository and dataset-card terms; upstream chart sources retain their licenses
Intended use: chart instruction SFT with program-of-thought supervision
