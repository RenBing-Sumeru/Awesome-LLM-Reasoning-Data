一句话贡献：TabMWP 把 table-grounded grade-level math word problems 做成带 gold answers 与 multi-step solutions 的 benchmark；PromptPG 则用 answer correctness 产生的 policy-gradient feedback 学习 GPT-3 prompt 中应选择哪些 in-context examples。

核心机制：每个问题把 semi-structured table 与 natural-language question 配对；free-text questions 期望 numeric answers，multiple-choice questions 期望从 options 中选择 text span。数据集还保存 table image 与 structured spreadsheet-like form，因此可用于 text-only、table-structured 和 multimodal table reasoning。

反馈契约：评测是 answer-level accuracy。free-text numeric answers 会把 prediction 与 label normalize 到两位小数后比较；multiple-choice answers 会把 generated text 映射到最相近 option。分类理由：TabMWP 主要是 table-grounded mathematical reasoning 的 benchmark/evaluation surface，gold solutions 是可选 rationale-like fields。最接近的比较对象包括 GSM8K 类文本数学题、WikiTableQuestions/TAPEX 等 TableQA 设置，以及 FinQA、TAT-QA 这类 finance/table numerical reasoning datasets。
