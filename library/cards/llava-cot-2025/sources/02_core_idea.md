# Core idea

LLaVA-CoT changes a VQA target from one answer into an ordered, tagged demonstration whose summary plans the task, caption grounds relevant visual evidence, reasoning derives the answer, and conclusion matches the source label. GPT-4o authors the trace, exact-tag parsing plus a semantic answer judge provide the selection signal, and Llama-3.2-11B-Vision-Instruct is the SFT consumer; this is instruction/demonstration/rationale data rather than a reward-model or benchmark contribution.

Google Scholar citations: 577（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=LLaVA-CoT%3A+Let+Vision+Language+Models+Reason+Step-by-Step&author=Guowei+Xu&hl=en）

Open dataset: yes  
**Dataset name:** LLaVA-CoT-100k  
**Official URL:** https://huggingface.co/datasets/Xkev/LLaVA-CoT-100k  
**Scale:** 99k image-question-answer records from ten VQA sources  
**Record form:** image reference, question, original answer, and tagged SUMMARY, CAPTION, REASONING, and CONCLUSION text  
**File / storage format:** JSON on Hugging Face  
**Domains / languages:** English general VQA, charts, documents, geometry, science, social context, and synthetic visual reasoning  
**Construction and filtering:** GPT-4o writes all stages; a parser enforces tags and a GPT-4o judge rejects refusals or conclusion/answer mismatch  
**License / access constraints:** Apache-2.0 dataset metadata; upstream image and VQA-source terms still apply  
**Intended use:** multimodal SFT, rationale distillation, structured-output analysis, and visual-reasoning data audits
