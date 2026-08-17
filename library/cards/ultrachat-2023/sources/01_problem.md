Human-written multi-turn instruction conversations are expensive and small, while single-turn instruction sets do not teach a chat model to maintain context across an exchange. Existing synthetic datasets also often leave the origin of user turns and topic coverage unclear.

UltraChat replaces manual dialogue writing with a structured synthetic pipeline: define three sectors of user needs, create topic or task metadata for each sector, generate both user and assistant turns with an OpenAI dialogue model, and train UltraLLaMA on the resulting conversations. It releases 1,468,352 English dialogues whose retained context supports multi-turn SFT.

L4 facts: primary source https://arxiv.org/abs/2305.14233; arXiv technical report, 2023; boundary: synthetic post-training conversations, not pretraining; atlas value: explicit prompt-source-to-dialogue lineage; data object: topic-steered multi-turn user/assistant records; evaluation surface: corpus statistics and model-based chat evaluation.
