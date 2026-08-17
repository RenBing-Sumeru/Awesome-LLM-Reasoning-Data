Primary source: the arXiv paper "MMMU-Pro" (2024) with an ACL 2025 citation in the official MMMU repository, plus the official MMMU-Pro Hugging Face dataset. The problem is that many MMMU-style multimodal QA items can be solved through textual shortcuts or visible option priors, so the benchmark may overstate visual academic reasoning.

MMMU-Pro belongs here as an evaluation surface, not as a training recipe. A data object is a curated multimodal academic question with image/table/diagram context, answer candidates or answer key metadata, subject fields, and a vision-only variant designed to remove direct text cues. The feedback contract is benchmark scoring against the official answer key/evaluator; it does not certify the reasoning path.

The atlas value is that it turns "multimodal academic reasoning" into an auditable object where prompt format, answer-option visibility, split/version, and post-release answer fixes must be pinned before scores are reused.
