The central contribution is to connect corpus scale with data efficiency: generate a clean 1.8M-example long-CoT corpus, then use a smaller model's repeated success rate to select 123K examples that are hard enough to remain useful. Quality and difficulty are separate gates, so an example must first be trustworthy before its training value is estimated.

Google Scholar citations: 26（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=MMFineReason%3A+Closing+the+Multimodal+Reasoning+Gap+via+Open+Data-Centric+Methods&author=Honglin+Lin&hl=en）

Open dataset: yes.
- Name: MMFineReason collection, including MMFineReason-1.8M, MMFineReason-123K, and the 2.3M full pool.
- Official URL: https://huggingface.co/collections/OpenDataArena/mmfinereason
- Scale: 1,810,926 filtered records; 122,603 difficult-subset records; 2,286,130 full-pool records.
- Form and license: Parquet datasets under Apache-2.0, with multimodal prompts, generated reasoning, answers, and metadata.
- Intended use: multimodal reasoning SFT, data-ablation studies, difficulty-aware selection, and later RL initialization.
