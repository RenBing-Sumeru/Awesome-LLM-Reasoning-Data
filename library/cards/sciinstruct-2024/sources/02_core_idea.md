# Core idea

SciInstruct treats missing scientific rationales as an answer-constrained trace-inference problem: GPT-4 first proposes a worked solution, then critiques failures, finally receives the reference answer as a stronger hint, while a separate quality classifier removes plausible but defective traces. The serialized target is question plus worked solution and subject; source authors or GPT-4 supply traces, known answers and model-based filters decide retention, and ChatGLM3, Llama3, and Mistral SFT runs consume them, establishing a Track 01 data contribution.

Google Scholar citations: 16（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=SciInstruct%3A+a+Self-Reflective+Instruction+Annotated+Dataset+for+Training+Scientific+Language+Models&author=Dan+Zhang&hl=en）

**Open dataset:** yes  
**Dataset name:** SciInstruct  
**Official URL:** https://huggingface.co/datasets/zd21/SciInstruct  
**Scale:** reported full set of 254,051 instructions: 123,869 physics/chemistry, 89,934 math, and 40,248 Lean; three public files total about 139.3 MB  
**Record form:** `content` question, `summary` worked answer or proof, and `subject` label  
**File / storage format:** one JSON object per line in three `.json` files; the checked Chinese-math file has 9,110 records  
**Domains / languages:** physics, chemistry, college mathematics, and formal Lean proofs; Chinese and English  
**Construction and filtering:** collect answer-bearing questions, generate missing steps with GPT-4-0613, apply answer/outcome checks and up to two reflection retries, then rank noisy records with a ChatGLM3-feature quality classifier  
**License / access constraints:** public under CC BY 4.0 according to the NeurIPS datasheet and Hugging Face metadata; code has no separately declared license  
**Intended use:** scientific-rationale SFT, distillation, mixture/scaling analysis, and trace-quality audits
