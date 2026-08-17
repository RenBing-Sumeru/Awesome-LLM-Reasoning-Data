Short web captions omit objects, attributes, spatial relations, and scene context, so visual-language models receive weak language supervision even when image coverage is large.

The paper's decision boundary is the released ShareGPT4V training object, not a model-only report or an evaluation-only benchmark. One record contains image id, dense factual caption or visual question, and assistant target; its selection boundary is caption consistency checks and downstream multimodal benchmark scores, and the records are consumed by multimodal pretraining followed by instruction SFT.

L4 facts: the official ECCV 2024 page, public records at https://huggingface.co/datasets/Lin-Chen/ShareGPT4V, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
