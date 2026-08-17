# Core idea

Self-RAG converts fine-grained retrieval and critique judgments into vocabulary tokens inside each target, letting standard next-token SFT teach an LM when to retrieve and how to assess passage relevance, claim support, and response utility. The augmented instruction output is the primary object, a GPT-4-distilled critic supplies the offline selection labels, and retrieval/search is the consumer mechanism rather than the data category.

Google Scholar citations: 2723（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-RAG%3A+Learning+to+Retrieve%2C+Generate%2C+and+Critique+through+Self-Reflection&author=Akari+Asai&hl=en）

Open dataset: yes  
Dataset name: selfrag_train_data  
Official URL: https://huggingface.co/datasets/selfrag/selfrag_train_data  
Scale: 145,619 source input-output pairs, described and packaged as approximately 150K training records  
Record form: `instruction`, optional `input`, `output`, `id`, and `dataset_name`; output interleaves retrieval calls, passage text, relevance/support judgments, generated segments, and a terminal utility token  
File / storage format: one public JSONL file (`train.jsonl`)  
Domains / languages: English instruction following, open-domain QA, fact verification, science reasoning, and long-form factual generation  
Construction and filtering: a Llama2-7B critic distilled from GPT-4 decides retrieval and inserts Retrieve, ISREL, ISSUP, and ISUSE tokens around Contriever passages and source outputs  
License / access constraints: MIT release; component instruction datasets and retrieved passages retain their own terms  
Intended use: retrieval-aware SFT, critique distillation, factuality training, controllable decoding, and reflection-token audit
