# Core idea

MetaMathQA combines answer augmentation with forward and backward question transformations so the trainable object covers both prompt diversity and teacher-written reasoning targets. The record is a transformed math instruction plus rationale/final answer, known-answer matching supplies the feedback contract, and public SFT demonstrations make Track 01 the appropriate category.

Google Scholar citations: 1322（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MetaMath%3A+Bootstrap+Your+Own+Mathematical+Questions+for+Large+Language+Models&author=Longhui+Yu&hl=en）

**Open dataset:** yes  
**Dataset name:** MetaMathQA  
**Official URL:** https://huggingface.co/datasets/meta-math/MetaMathQA  
**Scale:** 395k records: 240k GSM8K-derived and 155k MATH-derived  
**Record form:** transformation type, query, response, original question, and original response  
**File / storage format:** Hugging Face dataset files; Alpaca-style instruction/output for training  
**Domains / languages:** English elementary and competition mathematics  
**Construction and filtering:** GPT-3.5-Turbo writes multiple solutions and transformed questions; known answers filter or constrain outputs  
**License / access constraints:** public; official repository is Apache-2.0, with upstream GSM8K/MATH and teacher-service terms also applicable  
**Intended use:** SFT, distillation, mixture analysis, and question-diversity audits

