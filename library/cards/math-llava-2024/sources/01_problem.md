# Problem

Open multimodal instruction sets commonly attach only one or a few questions to each image, leaving much of the visual evidence unused and giving SFT consumers weak coverage of mathematical question forms. Math-LLaVA selects 40k images from 24 public sources, then expands them into about 360k image-question-answer records.

The decision boundary is data selection and synthetic demonstration construction, not a new reasoning objective: learned clarity and complexity classifiers choose images, GPT-4V writes additional or rewritten questions and short answers, and LLaVA-1.5-13B consumes the released records through SFT.

**L4 facts:** official source ACL Anthology 2024.findings-emnlp.268; Findings of EMNLP 2024; Track 01 object is an image path plus user prompt and assistant answer; collection state `L4_carded` with one controlled category.
