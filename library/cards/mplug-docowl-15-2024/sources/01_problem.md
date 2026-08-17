OCR-free document models often learn isolated OCR or VQA tasks without a unified representation of text location, page structure, and explanation-bearing answers.

The paper's decision boundary is the released DocReason25K and DocStruct4M training object, not a model-only report or an evaluation-only benchmark. One record contains document image, question or structure instruction, concise answer or detailed reasoning response; its selection boundary is known short answers, structure targets, and document benchmark metrics, and the records are consumed by structure alignment followed by document instruction SFT.

L4 facts: the official Findings of EMNLP 2024 page, public records at https://huggingface.co/datasets/mPLUG/DocReason25K, release scale and terms were checked on 2026-07-27. The paper is included because its central contribution directly constructs or curates serialized post-training targets.
