VisualWebInstruct turns image-guided educational web search into reusable multimodal question-and-worked-answer demonstrations, with answer consistency and source-solution alignment selecting the SFT targets. Its closest comparisons are LLaVA-CoT and MAmmoTH-VL data; verifier- or RL-centered work is adjacent because the released static demonstration, rather than a reward signal, is the central artifact.

Google Scholar citations: 34（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=VisualWebInstruct%3A+Scaling+up+Multimodal+Instruction+Data+through+Web+Search&author=Yiming+Jia&hl=en）

Open dataset: yes.
Dataset name: VisualWebInstruct.
Official URL: https://huggingface.co/datasets/TIGER-Lab/VisualWebInstruct.
Scale: 906,160 QA pairs containing 257,201 unique questions, including 347,313 image-associated pairs and 163,743 unique images.
Record form: complete question, optional question-relevant image references, and a worked answer that preserves notation and step-by-step explanation, with source and filtering lineage where exposed.
File / storage format: one Hugging Face Parquet shard plus `images.zip`; the repository also exposes the mixed-conversation and QA records in both JSONL and Parquet.
Domains / languages: primarily English educational QA: 62.5% mathematics, 14.5% physics, 7.25% finance, 4.8% chemistry, 4.35% engineering, and 6.6% other subjects.
Construction and filtering: educational webpages retrieved from scientific seed images are converted into QA pairs, GPT-4o supplies multiple worked answers, and validity, image relevance, majority consistency, and alignment with available web solutions filter the release.
License / access constraints: public dataset access is governed by the Hugging Face platform terms and the code repository is MIT licensed, but no dataset-specific content license was confirmed; platform access does not grant redistribution rights for the underlying webpages or images, so record-level review is required.
Intended use: multimodal and text reasoning SFT.
