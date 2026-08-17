MMLU-Redux asks whether high-stakes MMLU scores are trustworthy when the benchmark itself contains wrong answers, ambiguous questions, or otherwise defective items. The primary source is Gema et al., "Are We Done with MMLU?," arXiv June 2024, with an official Hugging Face release for MMLU-Redux 2.0.

The collection boundary is benchmark audit and corrected evaluation surface. It is not a new general reasoning benchmark from scratch and not a model-training recipe. A data object is an original MMLU question with its original answer key, re-annotation decision, error category, and task metadata.

The feedback contract is mixed: the original MMLU score is answer-key exact match, while the Redux audit adds human adjudication of whether the original item/key is correct, ambiguous, wrong, or otherwise unusable. Its atlas value is a concrete template for auditing benchmark rows before using aggregate scores.
