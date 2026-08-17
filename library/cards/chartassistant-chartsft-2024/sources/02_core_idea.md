ChartAssistant aligns vision and language through chart-to-table pretraining, then applies ChartSFT multitask instructions spanning extraction, QA, summarization, and numerical reasoning. The closest comparison is UniChart and ChartLlama task-specific recipes; unlike that neighbor, the primary object here is ChartSFT and the feedback boundary is table reconstruction checks, source answers, and chart benchmark scoring, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 164（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=ChartAssistant%3A+A+Universal+Chart+Multimodal+Language+Model+via+Chart-to-Table+Pre-training+and+Multitask+Instruction+Tuning&author=Fanqing+Meng&hl=en）

Open dataset: yes
Dataset name: ChartSFT
Official URL: https://huggingface.co/datasets/FanqingM/ChartAssistant
Scale: a large multi-task chart corpus covering basic and specialized chart types; official per-file counts are in the release manifest
Record form: chart image, task instruction, and chart-to-table, QA, extraction, or reasoning target
File / storage format: JSON conversations with chart images and table/QA targets
Domains / languages: chart-to-table aligned multitask instructions; see the official data card for exact language and domain splits
Construction and filtering: synthetic and real charts covering bars, pies, radar, bubble and other chart families; programmatic chart generation, source answers, and task templates; selection uses table reconstruction checks, source answers, and chart benchmark scoring
License / access constraints: official dataset-card terms and licenses of component chart sources
Intended use: chart-to-table alignment followed by multitask SFT
