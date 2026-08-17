General visual-instruction corpora lack localized pathology explanations, while clinical image datasets often provide only class labels and cannot teach a model to connect morphology to language.

The paper's decision boundary is the released QUILT-LLaVA-Instruct-107K training object, not a model-only report or an evaluation-only benchmark. One record contains pathology image crop, localized narrative or question, and diagnostic/explanatory response; its selection boundary is temporal/text localization, pathology terminology checks, and downstream VQA evaluation, and the records are consumed by domain visual instruction SFT.

L4 facts: the official CVPR 2024 page, public records at https://huggingface.co/datasets/wisdomik/QUILT-LLaVA-Instruct-107K, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
