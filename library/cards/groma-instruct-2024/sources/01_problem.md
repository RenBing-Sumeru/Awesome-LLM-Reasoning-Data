Whole-image instruction tuning cannot reliably connect a phrase in dialogue to a precise object region, while box-only systems often lack open-ended conversation targets.

The paper's decision boundary is the released Groma Instruct training object, not a model-only report or an evaluation-only benchmark. One record contains image, region tokens or boxes, grounded user dialogue, and assistant response; its selection boundary is region-box consistency, source annotations, and grounding benchmark scores, and the records are consumed by grounded multimodal instruction SFT.

L4 facts: the official ECCV 2024 page, public records at https://huggingface.co/datasets/FoundationVision/groma_instruct, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
