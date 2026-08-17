MMLU-Redux 追问的是：如果 MMLU 本身包含错误答案、歧义题或其他缺陷，那么高风险使用 MMLU 分数是否可信。主要来源是 Gema 等人的 "Are We Done with MMLU?"，2024 年 6 月 arXiv，并有官方 Hugging Face 的 MMLU-Redux 2.0 发布。

收录边界是 benchmark audit 和 corrected evaluation surface。它不是从零构造的新通用推理基准，也不是模型训练配方。一个数据对象是原始 MMLU 题目、原答案键、复标题决定、错误类别和任务元数据。

反馈契约是 mixed：原始 MMLU 分数来自答案键 exact match，而 Redux 审计加入人工裁决，判断原题/答案键是否正确、歧义、错误或不可用。它对 atlas 的价值是给 aggregate score 复用前的逐行 benchmark 审计提供具体模板。
