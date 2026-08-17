1. **RTL supervised fine-tuning:** Train on expanded_origen_126k specifications, implementations, and tests, then report pass@k on independent testbenches.

2. **Pipeline reuse:** Apply the generate-test, simulate, repair-from-log, and revalidate loop to private HDL corpora, producing execution-labelled records.

3. **RLVR:** Use compilation and simulation as hierarchical rewards, while separating infrastructure errors, compile failures, and functional failures. Without a stable simulator, explicit interfaces, and independent hidden tests, pass scores should not be treated as reliable rewards.
