Groma first represents selected regions as localized visual tokens, then uses roughly 30K GPT-4V conversations that refer to those tokens so the model learns recognition, description, and grounded dialogue in one format. The closest comparison is whole-image LLaVA data and box-coordinate-only grounding assistants; unlike that neighbor, the primary object here is Groma Instruct and the feedback boundary is region-box consistency, source annotations, and grounding benchmark scores, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 176（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Groma%3A+Localized+Visual+Tokenization+for+Grounding+Multimodal+Large+Language+Models&author=Chuofan+Ma&hl=en）

Open dataset: yes
Dataset name: Groma Instruct
Official URL: https://huggingface.co/datasets/FoundationVision/groma_instruct
Scale: about 30,000 GPT-4V-generated grounded conversations
Record form: image, region tokens or boxes, grounded user dialogue, and assistant response
File / storage format: JSON records with image references, region tokens, and boxes
Domains / languages: region-token grounded conversations; see the official data card for exact language and domain splits
Construction and filtering: public detection, referring-expression, and visual instruction sources converted to region-aware prompts; GPT-4V generates grounded multi-turn conversations around selected regions; selection uses region-box consistency, source annotations, and grounding benchmark scores
License / access constraints: official repository and dataset-card terms; source-image licenses remain applicable
Intended use: grounded multimodal instruction SFT
