1. Build supervision. For each prompt–response pair, a strong LLM judge produces aspect-level scores such as logicality, fluency, and consistency.

2. Extract representations. The same evaluation prompt is passed through a small LM; INSPECTOR collects hidden embeddings rather than decoding a judgment.

3. Probe informative layers. Lightweight classifiers are trained on selected-layer embeddings to predict the strong judge's scores. The strong judge, not an executable verifier, supplies the acceptance signal.

4. Evaluate and filter. Probes are tested on GSM8K, MATH, and GPQA, then used to rank/filter noisy reasoning data before downstream SFT. Reproduction requires the prompt template, teacher scores, base LM, layer choice, classifier, and data split; sampling budgets are not fully disclosed.
