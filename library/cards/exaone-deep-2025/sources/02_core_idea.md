EXAONE Deep is a family of reasoning-specialized models fine-tuned from the corresponding EXAONE 3.5 Instruct checkpoints at 2.4B, 7.8B, and 32B scales. The report names three post-training methods: supervised fine-tuning, DPO with SimPER, and Online RL with a designed GRPO variant. It reports 1.6M SFT examples, 20K preference examples for DPO, 10K Online-RL instances, and approximately 12B tokens in the SFT set.

The disclosed training object is a process-formatted response. A query is followed by a thought-tag reasoning section, then a final answer intended to summarize the reasoning in a self-contained form. The paper describes the thought section as supporting step-by-step progression, reflection, self-checking, and correction. It labels broad SFT groups as Math, Code, Science, and Others, but does not identify source datasets or how the traces were authored.

The release is an open-weight-in-practice, research-purpose model release—not an open-data release. The DPO preference relation and Online-RL feedback are named at the algorithm level, but their labelers, reward source, verifier, environment, rollouts, and acceptance rule remain unknown.

