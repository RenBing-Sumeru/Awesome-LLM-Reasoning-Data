Ferret combines a hybrid region encoder with GRIT records that express points, boxes, and free-form regions in the same conversation, training both referring and grounding directions. The closest comparison is whole-image LLaVA and box-only grounding assistants; unlike that neighbor, the primary object here is GRIT and the feedback boundary is region coordinates/masks, source labels, and referring/grounding benchmark scores, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 609（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Ferret%3A+Refer+and+Ground+Anything+Anywhere+at+Any+Granularity&author=Haoxuan+You&hl=en）

Open dataset: yes
Dataset name: GRIT
Official URL: https://github.com/apple/ml-ferret#grit-dataset
Scale: about 1.1 million grounded refer-and-answer records
Record form: image, point/box/free-form region, referring phrase, instruction, and grounded response
File / storage format: JSON annotations with images, regions, and conversations
Domains / languages: multi-granularity refer-and-ground data; see the official data card for exact language and domain splits
Construction and filtering: public detection and segmentation annotations expanded into hierarchical referring conversations; GPT-4-assisted instruction generation anchored to known regions; selection uses region coordinates/masks, source labels, and referring/grounding benchmark scores
License / access constraints: CC BY-NC 4.0 for GRIT; LLaMA/Vicuna and source-image conditions also apply
Intended use: region-aware multimodal SFT
