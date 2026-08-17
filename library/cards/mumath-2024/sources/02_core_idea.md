MuMath treats augmentation as a matrix over both problem form and visible solution structure: it reformulates wording and reasoning organization, converts forward problems into backward variants, alters expressions or difficulty, and nests outlines and plans inside the final demonstration. GPT-4 writes these objects, but selection differs by branch, using source answers where derivable and majority sampling where new questions have no reference; the released records are SFT targets, not online tool interactions.

Google Scholar citations: 13（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MuMath%3A+Multi-perspective+Data+Augmentation+for+Mathematical+Reasoning+in+Large+Language+Models&author=Weihao+You&hl=en）

Open dataset: yes.
Dataset name: MuMath-Data.
Official URL: https://huggingface.co/datasets/weihao1/MuMath-Data.
Scale: about 304K records for the paper's main n=2 experiments; approximately 751K for the current scaled n=6 release used as stage 1 by MuMath-Code.
Record form: each actual JSON object has `gt` plus `messages`; messages contain a user problem and an assistant natural-language derivation with a final answer.
File / storage format: one public JSONL file named `MuMath-Data.jsonl`.
Domains / languages: English grade-school word problems and high-school competition mathematics across the seven MATH subjects.
Construction and filtering: GPT-4 performs four augmentation families; known answers filter derivable transformations, a GPT-4 judge screens expression replacements, and 30-solution majority sampling selects answer-unknown alterations.
License / access constraints: public and ungated, but the official dataset card declares no license; upstream benchmark and GPT-4 output terms require review.
Intended use: mathematical SFT, distillation, augmentation ablations, curriculum staging before code-integrated training, and data-scaling studies.
