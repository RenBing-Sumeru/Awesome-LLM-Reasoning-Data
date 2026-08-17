Training on a large general instruction pool wastes compute and can dilute the examples most useful for a specific downstream capability.

The paper's decision boundary is the released LESS selected instruction data training object, not a model-only report or an evaluation-only benchmark. One record contains instruction-response record, gradient or influence score, target task, and selected split; its selection boundary is gradient similarity estimates each record's influence on the target task, and the records are consumed by targeted instruction SFT on a selected five-percent subset.

L4 facts: the official ICML 2024 page, public records at https://huggingface.co/datasets/princeton-nlp/less_data, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
