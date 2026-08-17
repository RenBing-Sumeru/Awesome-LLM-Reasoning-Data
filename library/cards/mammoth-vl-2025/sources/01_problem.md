# Problem

Open multimodal instruction mixtures are large but often inherit terse, phrase-level answers from academic VQA datasets, leaving little intermediate rationale for tasks such as mathematics, charts, OCR, and domain-specific analysis. Human rewriting does not scale to millions of records, while proprietary teachers increase cost and reuse uncertainty.

MAmmoTH-VL manually screens 153 public sources, rewrites improvable records with open 70B/76B text and multimodal models, filters image-question-answer consistency with a model judge, and releases 12M rationale-rich instruction-response records for staged multimodal SFT.

**L4 facts:** Primary source: arXiv:2412.05237; venue/date: ACL 2025 Main, official Anthology record 2025.acl-long.680; decision boundary: the Track 01 object is a released rationale-bearing instruction record, not the resulting 8B model; atlas object/evaluation: image/video + instruction + detailed response + filter decision, evaluated over 23 benchmarks; collection note: `L4_carded`, one Track 01 category.
