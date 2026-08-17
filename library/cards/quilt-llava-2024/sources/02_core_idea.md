The pipeline aligns video narration to selected pathology frames, converts localized narratives into 107K instruction-response records, and tunes LLaVA on the resulting evidence-rich domain conversations. The closest comparison is generic LLaVA instruction data and label-only pathology collections; unlike that neighbor, the primary object here is QUILT-LLaVA-Instruct-107K and the feedback boundary is temporal/text localization, pathology terminology checks, and downstream VQA evaluation, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 137（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Quilt-LLaVA%3A+Visual+Instruction+Tuning+by+Extracting+Localized+Narratives+from+Open-Source+Histopathology+Videos&author=Mehmet+Saygin+Seyfioglu&hl=en）

Open dataset: yes
Dataset name: QUILT-LLaVA-Instruct-107K
Official URL: https://huggingface.co/datasets/wisdomik/QUILT-LLaVA-Instruct-107K
Scale: 107,000 histopathology visual-instruction records
Record form: pathology image crop, localized narrative or question, and diagnostic/explanatory response
File / storage format: Parquet records with image pointers, questions, and answers
Domains / languages: localized expert-video visual demonstrations; see the official data card for exact language and domain splits
Construction and filtering: open histopathology educational videos aligned at frame and transcript-segment level; localized expert narration, transformed into questions and answers with language-model assistance; selection uses temporal/text localization, pathology terminology checks, and downstream VQA evaluation
License / access constraints: dataset-card research terms; open-video and image-source terms remain applicable
Intended use: domain visual instruction SFT
