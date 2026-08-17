Instruction filtering with a strong model can cost nearly as much as training, while random or surface-level selection keeps redundant and low-utility examples.

The paper's decision boundary is the released Superfiltering scored instruction data training object, not a model-only report or an evaluation-only benchmark. One record contains instruction, optional input, output, GPT-2 instruction-following difficulty score, and selection membership; its selection boundary is low instruction-following difficulty scores rank records before fixed-percentage selection, and the records are consumed by small-subset instruction SFT.

L4 facts: the official ACL 2024 Main page, public records at https://github.com/tianyi-lab/Superfiltering/tree/main/data, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
