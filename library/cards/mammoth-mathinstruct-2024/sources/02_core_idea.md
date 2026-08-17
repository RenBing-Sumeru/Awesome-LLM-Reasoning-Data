# Core idea

MathInstruct joins broad source coverage with two trainable target forms—natural-language CoT and executable Python PoT—so one model can learn when linguistic reasoning or computation is more suitable. The record is an instruction plus typed rationale/final answer, source answers and program execution provide the feedback boundary, and public SFT demonstrations make Track 01 the correct category.

Google Scholar citations: 583（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MAmmoTH%3A+Building+Math+Generalist+Models+through+Hybrid+Instruction+Tuning&author=Xiang+Yue&hl=en）

**Open dataset:** yes  
**Dataset name:** MathInstruct  
**Official URL:** https://huggingface.co/datasets/TIGER-Lab/MathInstruct  
**Scale:** 260k records from 13 datasets; six rationale subsets newly curated  
**Record form:** instruction, optional input, output rationale/final answer, source, and CoT/PoT style  
**File / storage format:** Hugging Face dataset files in Alpaca-like instruction format  
**Domains / languages:** English arithmetic, algebra, geometry, calculus, theorem QA, formal logic, and related mathematics  
**Construction and filtering:** inherited human/model rationales plus GPT-4 CoT/PoT; generated programs are executed and checked against source answers when possible  
**License / access constraints:** public, with subset-specific MIT, Apache-2.0, CC-BY, CC-BY-NC, and one unlisted license  
**Intended use:** SFT, distillation, hybrid-reasoning evaluation, and mixture audits

