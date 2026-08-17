# Core idea

MAmmoTH-VL treats data quality as category-specific rewriting plus visual consistency filtering: preserve strong source records, expand terse image-QA/caption records into complex tasks with intermediate rationales, and remove weak sources or judge-rejected rewrites. Open text/multimodal models author the targets, a Yes/No visual relevance-consistency-accuracy judge supplies the selection signal, and a LLaVA-OneVision-style 8B model consumes the records through SFT.

Google Scholar citations: 129（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MAmmoTH-VL%3A+Eliciting+Multimodal+Reasoning+with+Instruction+Tuning+at+Scale&author=Jarvis+Guo&hl=en）

**Open dataset:** yes  
**Dataset name:** MAmmoTH-VL-Instruct-12M  
**Official URL:** https://huggingface.co/datasets/MAmmoTH-VL/MAmmoTH-VL-Instruct-12M  
**Scale:** 12M records from 153 screened sources; 10M single-image and 2M single/multi-image/video manifests  
**Record form:** media reference, source/category context, instruction, detailed rationale-bearing response, and filtering lineage  
**File / storage format:** JSON manifests plus WebDataset-style compressed media shards  
**Domains / languages:** English general VQA, OCR, charts, captions, code/math, domain tasks, detection, multi-image, video, and language-only instruction  
**Construction and filtering:** open 70B/76B models rewrite Group B sources; InternVL2-Llama3-76B judges visual relevance, consistency, and accuracy  
**License / access constraints:** Apache-2.0 release metadata; upstream datasets/media retain source-specific terms  
**Intended use:** multimodal SFT, rationale distillation, data-mixture studies, and filter audits
