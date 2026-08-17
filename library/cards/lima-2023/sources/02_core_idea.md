LIMA's contribution is to make curation the main experimental variable: one selected answer per instruction is used as the serialized SFT target, while much larger instruction-tuning systems are the closest comparison. It is a foundations-and-primers Card because it clarifies the distinction between dataset size, source quality, and a human-preference feedback contract.

Google Scholar citations: 2277（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=LIMA%3A+Less+Is+More+for+Alignment&author=Chunting+Zhou&hl=en）

Open dataset: yes, with access restrictions.

- Name and location: LIMA, https://huggingface.co/datasets/GAIR/lima.
- Scale and form: the paper's training set has 1,000 instruction-response demonstrations; the official repository provides `train.jsonl` and `test.jsonl`.
- Record format: conversational instruction and response fields stored as JSONL records.
- Access and license: the Hugging Face repository is gated and its card marks the license as `other`; approval does not by itself grant redistribution rights.
- Intended use: supervised alignment experiments and controlled studies of curation quality versus data volume.
