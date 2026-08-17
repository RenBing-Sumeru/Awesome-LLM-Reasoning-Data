Box-level conversations blur object boundaries and cannot supervise questions about parts, stuff regions, or overlapping objects at pixel granularity.

The paper's decision boundary is the released Osprey-724K training object, not a model-only report or an evaluation-only benchmark. One record contains image, mask or region, referring instruction, and grounded assistant response; its selection boundary is mask grounding, source labels, and pixel-level benchmark scoring, and the records are consumed by mask-aware visual instruction SFT.

L4 facts: the official CVPR 2024 page, public records at https://huggingface.co/datasets/AntGroup-MI/Osprey-724K, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
