Magpie converts an aligned open-weight model's latent instruction distribution into inspectable training records by sampling a user query from the bare chat-template prefix and then sampling its answer through the normal template. Compared with Self-Instruct-style seed expansion, the changed object is the prompt source: no seed questions or task list constrain generation; teacher and reward models still determine content and filtering, and the released static SFT conversations, not preference pairs or an online environment, define the category.

Google Scholar citations: 378（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Magpie%3A+Alignment+Data+Synthesis+from+Scratch+by+Prompting+Aligned+LLMs+with+Nothing&author=Zhangchen+Xu&hl=en）

Open dataset: yes
Dataset name: Magpie dataset family; audited release Magpie-Pro-300K-Filtered
Official URL: https://huggingface.co/datasets/Magpie-Align/Magpie-Pro-300K-Filtered
Scale: 4M original Air/Pro conversations; audited filtered subset has 300,000 train records in three shards, with 100,000 rows in the inspected first shard
Record form: uuid plus conversations, where each turn contains from and value; the inspected row has one human instruction and one detailed gpt response
File / storage format: Parquet; the full official family also exposes multiple raw, filtered, multi-turn, preference, and model-specific dataset repositories
Domains / languages: broad English instruction following with information seeking, writing, advice, planning, math, and code; controlled domain and multilingual variants are also released
Construction and filtering: Llama-3-Instruct generates both turns; quality/difficulty labels, response reward, nearest-neighbor distance, completion, repetition, safety, and length rules form configurable filters
License / access constraints: public and non-gated; the audited dataset declares the Llama 3 license, while code is MIT and other teacher-model terms remain applicable
Intended use: supervised fine-tuning, instruction-data analysis, mixture design, and optional preference optimization
