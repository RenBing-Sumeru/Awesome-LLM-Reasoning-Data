Multimodal assistants usually accept only whole images or rectangular boxes, so users cannot refer naturally to tiny, irregular, or nested regions.

The paper's decision boundary is the released GRIT training object, not a model-only report or an evaluation-only benchmark. One record contains image, point/box/free-form region, referring phrase, instruction, and grounded response; its selection boundary is region coordinates/masks, source labels, and referring/grounding benchmark scores, and the records are consumed by region-aware multimodal SFT.

L4 facts: the official ICLR 2024 page, public records at https://github.com/apple/ml-ferret#grit-dataset, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
