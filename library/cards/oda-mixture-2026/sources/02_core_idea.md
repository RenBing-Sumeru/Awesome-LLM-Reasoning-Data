ODA closes the loop by ranking source corpora in OpenDataArena, then deduplicating and decontaminating the best-performing 500K-record mixture. Relative to size-matched heuristic mixtures of popular open datasets, it makes id, source, instruction, and response the reusable target and uses leaderboard-based source selection, deduplication, benchmark decontamination, and mixture ablations as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: ODA-Mixture-500K
Official URL: https://huggingface.co/datasets/OpenDataArena/ODA-Mixture-500k
Scale: about 500K selected post-training instruction-response records
Record form: id, source, instruction, and response
File / storage format: Parquet records
Domains / languages: English mathematics, code, science, and general reasoning
Construction and filtering: existing open reasoning responses are retained or rewritten during mixture refinement; leaderboard-based source selection, deduplication, benchmark decontamination, and mixture ablations
License / access constraints: Apache-2.0
Intended use: general-purpose reasoning SFT
