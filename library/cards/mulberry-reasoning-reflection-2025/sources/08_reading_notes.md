# Reading notes

- **Positioning:** direct visual answers hide intermediate failure; Mulberry releases 260K image-grounded reasoning targets built by four-model tree search.
- **Method handle:** collective expansion, node-level scoring/pruning, UCB selection, and negative-sibling insertion determine which path becomes supervision.
- **Data/artifact handle:** the Apache-2.0 release provides `mulberry_sft.json` and an image tarball; records use `images` plus role/content `messages` and average 7.5 reasoning steps in the paper's analysis.
- **Evidence anchor:** on the same LLaVA-NeXT-8B architecture, the eight-task average rises from 39.7 to 50.7; four-model search success rises to 80.2 on a 1K geometry sample.
- **Reuse decision:** use for image-grounded rationale/reflection SFT only after independent step audits and train-test image/question overlap checks.
