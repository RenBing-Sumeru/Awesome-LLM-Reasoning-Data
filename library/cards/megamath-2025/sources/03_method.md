### Web data

The web pipeline starts from 99 Common Crawl snapshots spanning 2014-15 through 2024-46. It filters URLs and retains English documents, then reprocesses WARC HTML rather than relying on already extracted WET text. MathML, KaTeX, Unicode symbols, subscripts, superscripts, and related HTML elements are converted or normalized to preserve mathematical notation.

Extraction is coarse-to-fine: Resiliparse first provides fast recall and filtering; retained WARC documents are then processed with the slower trafilatura extractor. A fastText classifier identifies math-related documents. Its later training version uses balanced samples across crawl snapshots, Llama-3.1-70B-Instruct relevance annotations, and positive CoT examples. MinHash-LSH performs document deduplication.

MegaMath-Web-Pro applies the FineMath educational-value classifier with year-dependent thresholds and then uses Llama-3.3-70B-Instruct to remove noise and reorganize text. The reported Web-Pro subset contains 15.1B tokens.

### Code data

MegaMath-Code begins from Stack V2 and considers eleven programming languages. Llama-3.1-70B-Instruct labels 25,000 sampled code records for mathematical relevance and educational value. Those labels train a Qwen-2.5-0.5B filter for large-scale recall. The resulting code component contains 28.1B tokens.

### Synthetic data

The synthetic component includes Q&A extraction and refinement, code translation into Python, and interleaved text-expression-result-code blocks. Qwen-2.5-72B-Instruct and Llama-3.3-70B-Instruct refine Q&A. Qwen2.5-Coder-32B-Instruct and Llama-3.1-70B-Instruct support code translation. For interleaved text-code records, an AST prefilter rejects risky snippets before execution; retained programs must execute without error and produce the expected result before blocks are packed into training samples.

### Decontamination and release

The pipeline concatenates benchmark problems and solutions and removes documents with exact 13-gram overlap against twelve mathematical reasoning benchmarks, eliminating about 0.01% of documents. The release provides Web, Web-Pro, Code, Q&A, translated-code, and text-code-block variants. Exact rollout counts, generation temperatures, and some component settings are unknown.
