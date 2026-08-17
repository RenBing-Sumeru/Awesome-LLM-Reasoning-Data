Supervised tuning is bounded by a fixed demonstration set, while ordinary self-training can reinforce a model's own errors without a changing comparison signal.

The paper's decision boundary is the released SPIN iteration datasets training object, not a model-only report or an evaluation-only benchmark. One record contains prompt, human response, current-policy response, and self-play iteration; its selection boundary is a preference-style objective separates human responses from current-policy responses, and the records are consumed by iterative self-play fine-tuning that consumes the generated responses.

L4 facts: the official ICML 2024 page, public records at https://huggingface.co/collections/UCLA-AGI/datasets-spin-65c3624e98d4b589bbc76f3a, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
