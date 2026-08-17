MuMath-Code turns augmented math prompts into complete demonstrations that begin with natural-language analysis, invoke and debug Python, and end in an answer selected by ground truth or majority-vote guidance. Its closest neighbor is a tool environment or outcome-only corpus, but the released training target is the serialized worked trace consumed by SFT, making instruction, demonstration, and rationale data the primary category.

Google Scholar citations: 10（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MuMath-Code%3A+Combining+Tool-Use+Large+Language+Models+with+Multi-perspective+Data+Augmentation+for+Mathematical+Reasoning&author=Shuo+Yin&hl=en）

Open dataset: yes.
Dataset name: MuMath-Code-Data, including MuMath-Code-Data and the stage-1 MuMath-Data file.
Official URL: https://huggingface.co/datasets/weihao1/MuMath-Code-Data.
Scale: 600K stage-2 code-integrated records plus a 751K stage-1 natural-language corpus.
Record form: each JSON object has a `gt` answer and `messages`; the user message contains the math problem and the assistant message contains reasoning, Python code or debugging content, and a final answer.
File / storage format: two unauthenticated JSONL files, MuMath-Code-Data.jsonl and MuMath-Data.jsonl.
Domains / languages: English grade-school and competition mathematics derived from GSM8K and MATH, with Python tool use.
Construction and filtering: multi-perspective question augmentation is followed by GPT-4 prefix-CoT/code synthesis, interpreter execution and debugging; known answers or majority-vote pseudo-answers filter the candidates.
License / access constraints: the official dataset card declares no data license; access is governed by Hugging Face platform terms, and upstream problem and GPT-4-output rights need separate review.
Intended use: two-stage math SFT, tool-use distillation, debugging-trace studies, and comparisons of natural-language versus executable reasoning supervision.
