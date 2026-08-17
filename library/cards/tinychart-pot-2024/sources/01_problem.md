Compact chart models struggle with multi-step arithmetic because answer-only targets hide how values should be extracted and combined.

The paper's decision boundary is the released TinyChartData training object, not a model-only report or an evaluation-only benchmark. One record contains chart image, question, Python program-of-thought, and final answer; its selection boundary is program execution and final-answer agreement, and the records are consumed by chart instruction SFT with program-of-thought supervision.

L4 facts: the official EMNLP 2024 page, public records at https://huggingface.co/datasets/mPLUG/TinyChartData, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
