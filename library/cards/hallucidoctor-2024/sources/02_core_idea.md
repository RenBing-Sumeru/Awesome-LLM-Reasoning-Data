HalluciDoctor diagnoses toxic records, identifies unsupported spans, rewrites them against image evidence, and releases corrected conversations for retraining. The closest comparison is unfiltered LLaVA-style instruction data and inference-only hallucination mitigation; unlike that neighbor, the primary object here is HalluciDoctor corrected visual instructions and the feedback boundary is image-grounded object checks plus POPE/CHAIR-style hallucination evaluation, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 194（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=HalluciDoctor%3A+Mitigating+Hallucinatory+Toxicity+in+Visual+Instruction+Data&author=Qifan+Yu&hl=en）

Open dataset: yes
Dataset name: HalluciDoctor corrected visual instructions
Official URL: https://drive.google.com/file/d/1M0dZwF6nPuZMLeAH44VhFj0RCS4KxL5D/view?usp=sharing
Scale: about 50,000 diagnosis-and-rewrite visual instruction records
Record form: image, original instruction-response, hallucination diagnosis, and corrected response
File / storage format: JSON conversations plus source image references
Domains / languages: hallucination-aware visual data repair; see the official data card for exact language and domain splits
Construction and filtering: existing visual instruction data audited for object and relation hallucinations; multimodal teacher diagnoses unsupported content and rewrites affected answers; selection uses image-grounded object checks plus POPE/CHAIR-style hallucination evaluation
License / access constraints: repository release terms; corrected records retain LLaVA and source-image conditions
Intended use: cleaned visual instruction SFT
