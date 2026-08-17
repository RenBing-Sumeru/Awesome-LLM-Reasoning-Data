Existing chart corpora are small, tied to a few templates, and weak on scientific charts, so chart-language models overfit familiar layouts and question types.

The paper's decision boundary is the released MMC training object, not a model-only report or an evaluation-only benchmark. One record contains chart image, question or alignment instruction, and answer; its selection boundary is source tables or captions, answer checks, and chart benchmark evaluation, and the records are consumed by chart alignment and multimodal instruction SFT.

L4 facts: the official NAACL 2024 page, public records at https://huggingface.co/datasets/xywang1/MMC, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
