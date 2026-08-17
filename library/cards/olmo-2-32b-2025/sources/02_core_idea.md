OLMo 2 32B is an Ai2 technical release whose disclosed 32B path combines OLMo-Mix-1124 pretraining, Dolmino mid-training, then SFT, DPO, and GRPO-based RLVR. The release says the 32B base model is trained for 1.5 epochs up to 6T tokens. It publicly links the relevant model, code, and selected data artifacts rather than only naming them.

The data object is partly inspectable. The SFT viewer exposes 866K train records with `id`, `messages`, and `source`; the RLVR viewer exposes 29.9K train records with `messages`, `ground_truth`, `dataset`, `constraint_type`, and `constraint`. The preference mix is also released, but the checked card does not establish its complete chosen/rejected schema.

The central Track 12 point is the difference between linked viewers and a full disclosure ledger. A viewer can substantiate selected records and fields, but it does not by itself establish source-to-stage allocation, synthetic generator identity, preference lineage, production reward implementation, or run-level reproducibility.

