Chart models often specialize in one chart type or one task and fail to transfer from synthetic plots to real-world charts.

The paper's decision boundary is the released ChartSFT training object, not a model-only report or an evaluation-only benchmark. One record contains chart image, task instruction, and chart-to-table, QA, extraction, or reasoning target; its selection boundary is table reconstruction checks, source answers, and chart benchmark scoring, and the records are consumed by chart-to-table alignment followed by multitask SFT.

L4 facts: the official Findings of ACL 2024 page, public records at https://huggingface.co/datasets/FanqingM/ChartAssistant, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
