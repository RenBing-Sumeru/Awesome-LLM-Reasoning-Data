Mol-Instructions maps 17 biomolecular task families into a common instruction-input-output schema and publishes more than two million examples spanning molecule design, property prediction, protein understanding, and text tasks. The closest comparison is single-task molecular models and generic biomedical chat data; unlike that neighbor, the primary object here is Mol-Instructions and the feedback boundary is chemical/biological labels, exact structured targets, and task-specific metrics, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 279（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Mol-Instructions%3A+A+Large-Scale+Biomolecular+Instruction+Dataset+for+Large+Language+Models&author=Yin+Fang&hl=en）

Open dataset: yes
Dataset name: Mol-Instructions
Official URL: https://huggingface.co/datasets/zjunlp/Mol-Instructions
Scale: more than 2 million biomolecular instruction records
Record form: task instruction, molecular/protein representation or text input, and structured or natural-language target
File / storage format: JSON task files for molecules, proteins, and biomolecular text
Domains / languages: cross-object biomolecular instruction data; see the official data card for exact language and domain splits
Construction and filtering: public molecule and protein databases organized into 17 task families; source database labels, templates, and language-model-written explanatory instructions; selection uses chemical/biological labels, exact structured targets, and task-specific metrics
License / access constraints: CC BY 4.0 under the official DATA_LICENSE; upstream database terms remain applicable
Intended use: domain SFT and cross-task transfer
