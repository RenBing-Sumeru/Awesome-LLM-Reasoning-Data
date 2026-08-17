ShareGPT4Video collects 40K detailed captions, trains a scalable video captioner, and packages temporal descriptions that can supervise both understanding models and text-to-video systems. The closest comparison is WebVid-style short captions and frame-only visual instruction data; unlike that neighbor, the primary object here is ShareGPT4Video and the feedback boundary is caption detail/temporal consistency review and downstream video benchmarks, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 472（checked 2026-07-27；https://scholar.google.com/scholar?q=%22ShareGPT4Video%3A+Improving+Video+Understanding+and+Generation+with+Better+Captions%22+%22Lin+Chen%22&hl=en）

Open dataset: yes
Dataset name: ShareGPT4Video
Official URL: https://huggingface.co/datasets/ShareGPT4Video/ShareGPT4Video
Scale: 40,000 densely captioned videos in the public high-quality set
Record form: video id or frames, temporal event timeline, and a long detailed caption or derived instruction response
File / storage format: JSON metadata and downloadable video/caption archives
Domains / languages: dense temporal-caption demonstrations; see the official data card for exact language and domain splits
Construction and filtering: diverse public videos sampled for temporal coverage; GPT-4V-assisted seed annotation followed by ShareCaptioner-Video; selection uses caption detail/temporal consistency review and downstream video benchmarks
License / access constraints: official data-card terms; original video licenses remain applicable
Intended use: video-language pretraining and instruction SFT
