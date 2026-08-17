1. Collect dialogue prompts for helpfulness and harmlessness, including red-team interactions. 2. Produce alternative assistant responses. 3. Ask annotators to choose the preferred response under the relevant objective. 4. Save the context with chosen and rejected answers. 5. Train a reward model, then use it in RLHF.

Reproduction requires dialogue provenance, task separation, response-generation policy, annotator instructions, aggregation, reward-model setup, and RL objective. The same answer pair can receive a different judgment under another prompt, so context must remain attached.
