Contamination audits usually measure a checkpoint immediately after pre-training, although deployed models are subsequently shaped by SFT or RL. A small apparent leakage gap can therefore hide information that post-training later exploits, producing misleading math and code scores.

The paper creates matched clean and contaminated continuations of open checkpoints, then applies SFT or GRPO and evaluates both leaked and non-leaked benchmarks. Its output is a controlled audit of when post-training turns dormant benchmark overlap into inflated or transferable performance.
