Visual instruction datasets contain unsupported objects and relations, so SFT can teach hallucination even when the model architecture is unchanged.

The paper's decision boundary is the released HalluciDoctor corrected visual instructions training object, not a model-only report or an evaluation-only benchmark. One record contains image, original instruction-response, hallucination diagnosis, and corrected response; its selection boundary is image-grounded object checks plus POPE/CHAIR-style hallucination evaluation, and the records are consumed by cleaned visual instruction SFT.

L4 facts: the official CVPR 2024 page, public records at https://drive.google.com/file/d/1M0dZwF6nPuZMLeAH44VhFj0RCS4KxL5D/view?usp=sharing, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
