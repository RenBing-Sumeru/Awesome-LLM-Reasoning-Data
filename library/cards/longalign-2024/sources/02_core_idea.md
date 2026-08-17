LongAlign releases 10K long-context instruction records and combines them with length-grouped batching and loss weighting so long and short examples can be trained without excessive padding or sequence bias. The closest comparison is short-context instruction tuning after positional interpolation and randomly batched long SFT; unlike that neighbor, the primary object here is LongAlign-10k and the feedback boundary is length and format checks, response review, and long-context benchmark evaluation, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 162（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=LongAlign%3A+A+Recipe+for+Long+Context+Alignment+of+Large+Language+Models&author=Yushi+Bai&hl=en）

Open dataset: yes
Dataset name: LongAlign-10k
Official URL: https://huggingface.co/datasets/THUDM/LongAlign-10k
Scale: 10,000 long-context instruction records
Record form: long context, instruction, assistant answer, and length or packing-group metadata
File / storage format: JSON conversation records with long documents and length metadata
Domains / languages: length-balanced long-context instructions; see the official data card for exact language and domain splits
Construction and filtering: long documents paired with diverse question and task templates; a strong language model writes answers conditioned on the complete long context; selection uses length and format checks, response review, and long-context benchmark evaluation
License / access constraints: official dataset-card and repository terms; embedded document sources require provenance review
Intended use: long-context instruction SFT with sorted or packed batching
