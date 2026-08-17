- Read Section 2.1 of the [official paper](https://arxiv.org/html/2503.12524) for the exact aggregates: 1.6M SFT instances, 20K DPO preferences, 10K Online-RL instances, and about 12B SFT tokens.
- Read Section 2.2 for the thought-tag plus final-answer template, EXAONE 3.5 Instruct lineage, SimPER DPO, and designed GRPO variant. Do not infer teachers, reward type, or verifiability from those algorithm names.
- Treat the 32K maximum generation length, temperature 0.6, top_p 0.95, and repeated samples as benchmark evaluation settings, not training-data generation metadata.
- Use the official [repository](https://github.com/LG-AI-EXAONE/EXAONE-Deep) and [model collection](https://huggingface.co/collections/LGAI-EXAONE/exaone-deep) to verify released weights and inference materials. No data artifact is listed in the accepted metadata.
- Read EXAONE AI Model License Agreement 1.1 - NC before reuse: model access is limited to research under stated restrictions and does not confer rights to the undisclosed corpus, preferences, or RL records.

