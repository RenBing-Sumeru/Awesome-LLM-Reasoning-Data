Natural-language math augmentation and code-interpreter training had usually been developed as separate paths. The former broadens question coverage but inherits arithmetic weaknesses, while the latter teaches executable problem solving over a comparatively narrow prompt set.

MuMath-Code combines the two by augmenting GSM8K and MATH from multiple perspectives, asking a teacher for prefix reasoning plus interleaved Python and debugging, and training a consumer in two stages. The data decision is whether a complete problem-reasoning-code-answer trace passes a known or pseudo-answer check and should enter SFT.

L4 facts: primary source ACL Anthology 2024.emnlp-main.274 / arXiv:2405.07551; EMNLP 2024; data object 751K MuMath natural-language records plus 600K MuMath-Code tool-integrated records; evaluation surface GSM8K, MATH, GSM-Hard, SVAMP, TabMWP, ASDiv, and MAWPS; collection note: two public JSONL records were read on 2026-07-14.
