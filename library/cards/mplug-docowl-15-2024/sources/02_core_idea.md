DocOwl 1.5 first trains on DocStruct4M for parsing and localization, then consumes DocReason25K explanations and a 570K downstream mixture for document conversation tuning. The closest comparison is task-specific OCR pipelines and the first DocOwl release; unlike that neighbor, the primary object here is DocReason25K and DocStruct4M and the feedback boundary is known short answers, structure targets, and document benchmark metrics, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 288（checked 2026-07-27；https://scholar.google.com/scholar?q=%22mPLUG-DocOwl+1.5%3A+Unified+Structure+Learning+for+OCR-free+Document+Understanding%22+%22Anwen+Hu%22&hl=en）

Open dataset: yes
Dataset name: DocReason25K and DocStruct4M
Official URL: https://huggingface.co/datasets/mPLUG/DocReason25K
Scale: 25,000 rationale-bearing document QA records plus roughly 4 million structure-learning samples
Record form: document image, question or structure instruction, concise answer or detailed reasoning response
File / storage format: JSONL manifests with document images and text targets
Domains / languages: structure-aware document reasoning demonstrations; see the official data card for exact language and domain splits
Construction and filtering: document, webpage, table, chart, OCR and VQA datasets; GPT-3.5/GPT-4V explanations filtered against manually annotated short answers; selection uses known short answers, structure targets, and document benchmark metrics
License / access constraints: official repository/data-card terms; ten upstream document datasets retain their licenses
Intended use: structure alignment followed by document instruction SFT
