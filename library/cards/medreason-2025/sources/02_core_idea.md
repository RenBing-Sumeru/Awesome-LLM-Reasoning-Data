MedReason grounds synthetic medical explanations in explicit PrimeKG paths before asking GPT-4o to write the rationale, then uses answer recovery to select training records. Compared with HuatuoGPT-o1's unconstrained medical CoT generation, the changed object is a question-answer-rationale record carrying retrieved factual paths; PrimeKG and the teacher provide guidance, ground-truth answer matching selects records, and the static rationale consumed by SFT, not the model checkpoint or evaluation benchmark, defines the category.

Google Scholar citations: 100（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MedReason%3A+Eliciting+Factual+Medical+Reasoning+Steps+in+LLMs+via+Knowledge+Graphs&author=Juncheng+Wu&hl=en）

Open dataset: yes
Dataset name: MedReason
Official URL: https://huggingface.co/datasets/UCSC-VLAA/MedReason
Scale: 32,682 final records from 45,725 generated rationales and 55,071 source QA pairs; the single public file is 115,474,386 bytes
Record form: dataset_name, id_in_dataset, question, options, answer, and reasoning; reasoning contains named KG paths, a numbered reasoning process, and a conclusion
File / storage format: one JSONL file named ours_quality_33000.jsonl
Domains / languages: English medical QA across MedQA, MedMCQA, PubMedQA, MMLU, MedXpert, HuatuoGPT-o1, and medical HLE
Construction and filtering: GPT-4o maps entities, prunes up to three shortest PrimeKG paths, writes a grounded rationale, and answers from that rationale; only answer-matching records remain
License / access constraints: public and non-gated with an Apache-2.0 dataset tag; upstream QA-source terms remain applicable and the GitHub code repository has no detected LICENSE
Intended use: medical reasoning SFT, rationale-quality analysis, and knowledge-grounded data-construction research
