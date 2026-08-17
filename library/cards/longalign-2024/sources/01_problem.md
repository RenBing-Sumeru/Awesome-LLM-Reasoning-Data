Extending positional capacity does not teach a model to follow instructions over long documents, and naive batching makes 64K-context SFT inefficient and unstable.

The paper's decision boundary is the released LongAlign-10k training object, not a model-only report or an evaluation-only benchmark. One record contains long context, instruction, assistant answer, and length or packing-group metadata; its selection boundary is length and format checks, response review, and long-context benchmark evaluation, and the records are consumed by long-context instruction SFT with sorted or packed batching.

L4 facts: the official Findings of EMNLP 2024 page, public records at https://huggingface.co/datasets/THUDM/LongAlign-10k, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
