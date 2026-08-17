1. Inputs: medical exam questions, answer options, official answer keys, language/source metadata, and optional textbook or explanation resources from the release.
2. Pipeline: collect exam questions, normalize them into benchmark records, separate language/source subsets, provide split files, and evaluate model predictions by option matching.
3. Outputs: question records with choices and gold answer labels; model evaluation outputs are accuracy scores under a chosen split.
4. Feedback: a programmatic multiple-choice scorer compares the predicted option with the gold answer. It does not verify clinical safety or free-form medical reasoning.
5. Reproducibility boundary: pin repository commit or release, language subset, split file, answer normalization, prompt/scaffold, and whether auxiliary textbook/context resources are used.
