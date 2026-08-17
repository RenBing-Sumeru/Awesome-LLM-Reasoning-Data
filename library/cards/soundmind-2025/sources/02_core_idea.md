SoundMind serializes each logical problem as a colloquial prompt, a long teacher-written chain of thought, a final entailment label, and aligned question/answer speech. Relative to audio captioning corpora and audio reasoning sets without transcripts or paired chains of thought, it makes the multimodal target directly reusable and couples it to rule checks for answer format, label correctness, and response length, which places the paper in the instruction, demonstration, and rationale-data category rather than an audio benchmark-only category.

Google Scholar citations: 10（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=SoundMind%3A+RL-Incentivized+Logic+Reasoning+for+Audio-Language+Models&author=Xingjian+Diao&hl=en）

Open dataset: yes
Dataset name: SoundMindDataset
Official URL: https://huggingface.co/datasets/SoundMind-RL/SoundMindDataset
Scale: 6,446 samples; 5,184 train, 656 test, and 606 validation; more than 1,074 hours of speech
Record form: sample id, colloquialized user content, long chain-of-thought answer, binary entailment label, input speech, and output reasoning speech
File / storage format: one annotation JSON plus question.wav and answer_<label>.wav files per sample directory; preprocessing can produce Parquet for training
Domains / languages: English spoken natural-language inference and logical reasoning
Construction and filtering: LogiQA 2.0-NLI triplets are colloquialized, answered by DeepSeek-R1, rendered by MegaTTS 3, and packaged with known labels; training rewards check format, correctness, and length
License / access constraints: MIT; the Hugging Face release is public and ungated
Intended use: audio-language supervised fine-tuning, rule-reward reinforcement learning, and multimodal reasoning evaluation
