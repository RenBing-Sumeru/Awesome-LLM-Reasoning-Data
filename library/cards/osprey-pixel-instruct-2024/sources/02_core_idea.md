Osprey encodes a selected segmentation mask as a visual prompt and pairs it with 724K conversations that ask for recognition, detailed description, reasoning, and interaction about that precise region. The closest comparison is box-token grounding systems such as Shikra and Ferret; unlike that neighbor, the primary object here is Osprey-724K and the feedback boundary is mask grounding, source labels, and pixel-level benchmark scoring, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 226（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Osprey%3A+Pixel+Understanding+with+Visual+Instruction+Tuning&author=Yuqian+Yuan&hl=en）

Open dataset: yes
Dataset name: Osprey-724K
Official URL: https://huggingface.co/datasets/AntGroup-MI/Osprey-724K
Scale: 724,000 pixel-grounded visual conversations
Record form: image, mask or region, referring instruction, and grounded assistant response
File / storage format: JSON conversations plus images and segmentation masks
Domains / languages: pixel-grounded visual conversations; see the official data card for exact language and domain splits
Construction and filtering: segmentation and region-description datasets converted to mask-conditioned conversations; source labels plus language-model-generated region questions and descriptions; selection uses mask grounding, source labels, and pixel-level benchmark scoring
License / access constraints: dataset-card and repository terms; source segmentation datasets retain their licenses
Intended use: mask-aware visual instruction SFT
