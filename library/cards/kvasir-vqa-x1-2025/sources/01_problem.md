Existing gastrointestinal VQA data emphasizes atomic recognition and offers limited compositional reasoning or controlled robustness testing.

Kvasir-VQA-x1 groups atomic Kvasir-VQA pairs by image, samples one to three facts, and uses Qwen3-30B-A3B to merge questions and naturalize answers before clinical-expert validation. The decision boundary is whether the released image-question-answer record is a reusable supervised target with explicit source provenance and complexity, rather than an evaluation prompt or model-only artifact.

L4 facts: primary source arXiv:2506.09958 and DOI 10.1007/978-3-032-08009-7_6; venue Data Engineering in Medical Imaging, Springer; data object Kvasir-VQA-x1 with 159,549 records over 6,500 GI endoscopy images, split into 143,594 train and 15,955 test examples; evaluation surface standard and transformed-image medical VQA; collection note: full paper, actual public records, CC BY-NC 4.0 terms, generation repository, and exact tables checked on 2026-07-27.
