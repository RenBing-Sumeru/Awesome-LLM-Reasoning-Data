# Core idea

Math-LLaVA first converts heterogeneous public image-QA sources into a clarity- and complexity-controlled 40k seed pool, then increases questions per image through task-conditioned generation, harder variants, paraphrases, and underspecified variants. The serialized target is an image-linked LLaVA conversation; GPT-4V is the synthetic trace author, source answers and prompt-format constraints provide the selection signal, and LLaVA-1.5 SFT is the consumer, which makes the public demonstration records a Track 01 object rather than a model-only contribution.

Google Scholar citations: 239（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Math-LLaVA%3A+Bootstrapping+Mathematical+Reasoning+for+Multimodal+Large+Language+Models&author=Wenhao+Shi&hl=en）

**Open dataset:** yes  
**Dataset name:** MathV360K  
**Official URL:** https://huggingface.co/datasets/Zhiqiang007/MathV360K  
**Scale:** about 40k images and 360k question-answer records; the annotation JSON is 174.6 MB  
**Record form:** `id`, image path, and a `conversations` list containing human image-grounded prompts and GPT short answers  
**File / storage format:** one public JSON annotation file plus source-organized image directories  
**Domains / languages:** algebra, arithmetic, geometry, logic, numerical reasoning, science, textbook QA, charts, documents, and general VQA; mostly English with a Chinese GeoQA+ subset  
**Construction and filtering:** GPT-4V labels 10k images; two ViT classifiers filter and stratify all sources; GPT-4V adds 200k new questions and 120k complex, rephrased, or underspecified variants  
**License / access constraints:** public; code is Apache-2.0, while records and images inherit mixed Apache, MIT, BSD, GPL, Creative Commons, and research-only source terms  
**Intended use:** multimodal SFT, distillation, data-mixture ablation, and audits of questions-per-image synthesis
