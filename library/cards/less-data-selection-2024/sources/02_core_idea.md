LESS trains a lightweight warmup model, embeds source and target examples by their gradients, ranks source records by estimated target influence, and releases the scores and task-specific subsets used for tuning. The closest comparison is random, embedding-similarity, and full-data instruction tuning; unlike that neighbor, the primary object here is LESS selected instruction data and the feedback boundary is gradient similarity estimates each record's influence on the target task, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 630（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=LESS%3A+Selecting+Influential+Data+for+Targeted+Instruction+Tuning&author=Mengzhou+Xia&hl=en）

Open dataset: yes
Dataset name: LESS selected instruction data
Official URL: https://huggingface.co/datasets/princeton-nlp/less_data
Scale: public instruction pools, gradient features, influence scores, and task-specific selected subsets
Record form: instruction-response record, gradient or influence score, target task, and selected split
File / storage format: JSON and serialized gradient or score artifacts in the official release
Domains / languages: gradient-influence instruction selection; see the official data card for exact language and domain splits
Construction and filtering: public general instruction pools and small target-task validation examples; a warmup model supplies per-example gradients rather than generating new responses; selection uses gradient similarity estimates each record's influence on the target task
License / access constraints: official repository license and the licenses of the underlying instruction datasets
Intended use: targeted instruction SFT on a selected five-percent subset
