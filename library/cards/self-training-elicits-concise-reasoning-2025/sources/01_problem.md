The official ACL Anthology paper, DOI, arXiv record, and author repository are the primary sources. The work is published in Findings of ACL 2025, pages 25127-25152.

Chain-of-thought can improve mathematical accuracy while increasing decode latency and output-token cost. The paper observes that, for the same question, a target model's stochastic output distribution often contains correct paths much shorter than its typical correct response.

The construction problem is to move search from every test query into training: generate multiple candidate paths, find a concise answer-correct path for each source question, and fine-tune the same model so that greedy decoding later produces shorter reasoning.

The public object is a recipe, code, and paper-linked fine-tuned models. A complete paper-matched corpus containing all generated candidates, retained traces, rejected traces, parser outcomes, and per-row lineage was not verified.

