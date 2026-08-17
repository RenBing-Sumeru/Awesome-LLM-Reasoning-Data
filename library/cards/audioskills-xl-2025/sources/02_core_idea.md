AudioSkills-XL expands multiple audio sources into 8M capability-labeled QA pairs and separates a 250K controlled-thought subset for reasoning-focused training. Relative to caption-only audio pretraining and the earlier AudioSkills mixture, it makes record id, audio waveform, duration, and ordered conversation turns the reusable target and uses language/audio filtering, source-specific checks, duration limits, and dataset ablations as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 230（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Audio+Flamingo+3%3A+Advancing+Audio+Intelligence+with+Fully+Open+Large+Audio+Language+Models&author=Arushi+Goel&hl=en）

Open dataset: yes
Dataset name: AudioSkills-XL
Official URL: https://huggingface.co/datasets/nvidia/AudioSkills
Scale: 8M audio question-answer pairs, with related AF-Think containing 250K reasoning-prefixed pairs
Record form: record id, audio waveform, duration, and ordered conversation turns
File / storage format: Parquet audio/conversation records across eight configs
Domains / languages: English sound, music, speech, long-audio, and audio reasoning tasks
Construction and filtering: caption and QA generators expand source metadata into capability-specific conversations; language/audio filtering, source-specific checks, duration limits, and dataset ablations
License / access constraints: official NVIDIA Open Model/Data License; source audio terms also apply
Intended use: audio-language SFT and reasoning tuning
