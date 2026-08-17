1. Position: contamination is a scaling-and-timing effect, not an all-or-nothing label.
2. Mechanism: insert filtered benchmark questions, compare them with a never-seen holdout, then continue novel training.
3. Artifact: code is released at tml-tuebingen/forgetting-contamination; the paper does not release a new training dataset.
4. Evidence: 350M models show 11 to 51 accuracy points across 4 to 144 repetitions; OLMo-1B loses 96% of a 15-point gain quickly.
5. Reuse: use only with logged exposure and optimizer history; first establish a matched holdout.
