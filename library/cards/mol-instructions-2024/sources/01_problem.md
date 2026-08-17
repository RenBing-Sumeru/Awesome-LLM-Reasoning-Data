General instruction corpora do not connect molecular strings, protein sequences, biomedical text, and task-specific outputs in one reusable training format.

The paper's decision boundary is the released Mol-Instructions training object, not a model-only report or an evaluation-only benchmark. One record contains task instruction, molecular/protein representation or text input, and structured or natural-language target; its selection boundary is chemical/biological labels, exact structured targets, and task-specific metrics, and the records are consumed by domain SFT and cross-task transfer.

L4 facts: the official ICLR 2024 page, public records at https://huggingface.co/datasets/zjunlp/Mol-Instructions, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
