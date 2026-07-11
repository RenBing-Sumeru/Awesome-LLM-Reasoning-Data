<!-- entry_id: megamath-2025 -->
<!-- card_type: releases -->
# Paper Card: MegaMath: Pushing the Limits of Open Math Corpora

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=megamath-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=megamath-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=megamath-2025&mode=compare)
<!-- ask_atlas:end -->

> **One-sentence assessment:** MegaMath is a 371.6B-token open math corpus with unusually detailed web, code, and synthetic-data recipes, but repository-level licensing and exact-match decontamination do not resolve item-level rights or semantic leakage.
> **Reading priority:** Essential
> **Paper type:** Large-scale mathematical pre-training corpus and construction recipe
> **Knowledge categories:** Data Construction and Open Release Recipes
> **Best for:** Researchers building or auditing open mathematical pre-training and continual-training corpora
> **Confidence:** High
> **Year / Venue:** 2025; COLM 2025
> **Authors:** Fan Zhou, Zengzhi Wang, Nikhil Ranjan, Zhoujun Cheng, Liping Tang, Guowei He, Zhengzhong Liu, Eric P. Xing
> **Institutions:** MBZUAI
> **Links:** [Paper](https://openreview.net/forum?id=SHB0sLrZrh); [arXiv](https://arxiv.org/abs/2504.02807); [DOI](https://doi.org/10.48550/arXiv.2504.02807); [Code](https://github.com/LLM360/MegaMath); [Data](https://huggingface.co/datasets/LLM360/MegaMath)

---

## 1. Problem: What question does this work address?

Open mathematical language-model training lacks a corpus that combines large scale, preserved mathematical notation, code relevant to scientific and numerical reasoning, and synthetic structured examples. Ordinary web extraction can discard equations, while broad web and code corpora contain substantial irrelevant or low-quality material. MegaMath asks how to recall mathematical content at hundreds-of-billions-of-token scale while retaining enough pipeline detail and release variants for different training stages.

## 2. Core idea: What is the main contribution?

MegaMath combines three distinct data families under one release: re-extracted English mathematical web documents, math-related code recalled from Stack V2, and synthetic Q&A, translated-code, and interleaved text-code records. The paper reports 215.1 million samples and 371.6 billion Llama-2-tokenizer tokens: 279.0B web, 28.1B code, and 64.5B synthetic. Its main contribution is therefore both a corpus and a collection of component-specific construction recipes, filters, ablations, and release variants.

## 3. Method: How does it work?

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

## 4. Evidence: Why should we believe it?

The paper reports controlled pre-training ablations for mathematical HTML extraction, MinHash-LSH settings, fastText seed construction, code-filter criteria, mixture ratios, Q&A prompts, and code-synthesis formats. TinyLlama-1B serves as a proxy model for many curation ablations; Llama-3.2-1B and Llama-3.2-3B support larger continual-training demonstrations. Evaluation spans ten mathematical benchmarks with CoT and program-aided prompting.

The official LLM360 GitHub repository provides web and code pipeline material and download instructions, while Hugging Face hosts the corpus. The HF card reports Parquet, English, a single current train split, approximately 217 million rows, and about 1.12 TB. These artifacts support reuse and inspection, but benchmark improvements are evidence about downstream utility under the tested training setups, not proof that every record is correct, licensed, or uncontaminated.

## 5. Novelty: What is new relative to prior work?

MegaMath's distinguishing feature is the integration of notation-preserving WARC re-extraction, time-aware web-quality filtering, learned mathematical code recall, multiple synthetic formats, restricted execution checks, and large public release variants. The paper also exposes ablations across these construction choices rather than presenting the final corpus as an indivisible mixture. This makes extraction and filtering decisions inspectable as part of the data recipe.

## 6. Limitations: What are the weaknesses or hidden assumptions?

- The HF dataset declares ODC-By, but a repository-level license does not establish that every Common Crawl page, Stack V2 repository, or derivative synthetic record can be redistributed under uniform terms.
- Code rows retain heterogeneous detected-license metadata, including records with no detected license. Item-level source and license auditing remains necessary.
- Exact 13-gram decontamination cannot detect paraphrased, translated, semantically equivalent, or differently formatted benchmark leakage.
- Learned fastText, FineMath, LLM, and code filters can produce both false positives and false negatives; their training labels and temporal distributions shape the corpus.
- LLM refinement and synthesis can introduce unsupported facts, incorrect reasoning, or homogenized style even when final outputs pass formatting or execution checks.
- Successful code execution verifies runtime behavior for one generated program and input context; it does not prove mathematical correctness or semantic faithfulness.
- The paper reports 215.1M samples, while the current HF viewer reports roughly 217M rows. This may reflect conversion or release evolution, but the exact reconciliation is unknown.
- The HF repository is mutable, the GitHub repository shows no formal release tag, and immutable revisions and file hashes are not recorded in the current metadata.
- The visible GitHub README states that some pipeline documentation remains under development. Exact synthetic-generation settings are not uniformly disclosed.

## 7. Uses: How can this work be used?

MegaMath can support from-scratch mathematical pre-training, continued training with Web-Pro, code-augmented mathematical modeling, and studies of synthetic Q&A or executable text-code mixtures. For corpus research, it provides reusable ablation questions about notation-preserving extraction, classifier refresh, time-dependent thresholds, code/text mixture ratios, and synthesis formats. For auditing, users should treat each component as a separate lineage branch and pin source snapshot, filter version, teacher model, license evidence, decontamination procedure, and release revision before reuse.

## 8. Reading notes: What should readers remember?

- The 371.6B-token total combines web, code, and synthetic objects with different provenance and verification contracts.
- Web-Pro is not merely a smaller web split; it adds learned scoring and LLM rewriting.
- Execution checks apply to the generated text-code subset, not to the entire corpus.
- ODC-By describes the HF release and does not erase upstream copyright or source-license obligations.
- Exact 13-gram removal is a narrow contamination control, not semantic decontamination.
- Pin an immutable HF revision and reconcile row counts before reporting reproduction results.

## 9. Citation

The official COLM record verifies the venue. The BibTeX below follows the official paper metadata.

```bibtex
@inproceedings{zhou2025megamath,
  title = {MegaMath: Pushing the Limits of Open Math Corpora},
  author = {Zhou, Fan and Wang, Zengzhi and Ranjan, Nikhil and Cheng, Zhoujun and Tang, Liping and He, Guowei and Liu, Zhengzhong and Xing, Eric P.},
  booktitle = {Conference on Language Modeling},
  year = {2025},
  url = {https://openreview.net/forum?id=SHB0sLrZrh}
}
```
