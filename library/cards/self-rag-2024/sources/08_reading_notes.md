# Reading notes

- **Positioning:** fixed-retrieval RAG does not teach the LM whether retrieval is needed or whether a generated claim is supported; Self-RAG places those decisions in the supervised target.
- **Method handle:** GPT-4 labels train a critic, the critic inserts four reflection-token families around retrieved passages and source outputs, and standard next-token SFT trains the final generator.
- **Data/artifact handle:** the MIT release exposes one approximately 150K-record JSONL with `instruction`, optional `input`, `output`, `id`, and `dataset_name`; output carries the passages and reflection tokens.
- **Evidence anchor:** at 7B and 50K training records, PopQA reaches 45.5 versus 43.6/42.6 and sampled ASQA exact match reaches 32.1 versus 31.0/18.1 for the two controlled targets.
- **Reuse decision:** use for retrieval-and-critique SFT only after component-license, semantic-overlap, fallback-passage, and independent support-label audits.
