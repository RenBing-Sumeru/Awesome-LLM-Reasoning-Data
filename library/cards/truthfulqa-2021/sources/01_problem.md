# 01 Problem

TruthfulQA asks whether a language model can answer truthfully when the prompt is designed around common false beliefs, misconceptions, rumors, or socially repeated myths. The primary sources are the ACL 2022 paper page, the arXiv version, and the official `sylinrl/TruthfulQA` repository/software artifact. The ACL page identifies the work as a long paper in ACL 2022, pages 3214-3252, with DOI `10.18653/v1/2022.acl-long.229`.

The decision boundary is truthfulness under adversarially selected open questions and multiple-choice variants. It is not a general factual QA dataset, a retrieval benchmark, a safety policy taxonomy, or a training recipe. The concrete problem is that web-trained language models can imitate human text so well that they reproduce popular falsehoods instead of correcting them.

The evaluation surface is a benchmark item containing a question, a category, truthful answers, false answers, and scoring modes for generation and multiple choice. The paper reports 817 questions across 38 categories, including health, law, finance, and politics. The paper, venue page, DOI, code/software artifact, task scale, and scoring families are pinned; score reuse still needs exact prompt formatting, model output collection, evaluator version, and contamination notes.
