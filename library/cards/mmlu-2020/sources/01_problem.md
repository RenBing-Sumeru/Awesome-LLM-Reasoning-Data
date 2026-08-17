MMLU asks whether a language model can answer broad academic and professional multiple-choice questions without being narrowed to one task family. The primary source is Hendrycks et al., "Measuring Massive Multitask Language Understanding," submitted to arXiv in September 2020 and published at ICLR 2021; the official repository publishes the evaluation code and test package.

The collection boundary is benchmark and evaluation surface. It is not a training recipe, not a preference dataset, and not a proof or execution verifier. A data object is a text question from one of 57 subjects, four answer choices, a reference option, and subject/split metadata; the feedback contract is exact match against the answer key under the chosen prompt and scoring harness.

Its atlas value is that MMLU became a baseline for measuring broad knowledge and problem solving, and later benchmark-audit work such as MMLU-Pro and MMLU-Redux explicitly uses it as the object being hardened or audited.
