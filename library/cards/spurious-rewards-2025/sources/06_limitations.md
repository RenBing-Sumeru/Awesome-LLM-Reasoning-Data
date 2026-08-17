Author-stated boundary: random and incorrect rewards are analytical controls, not a capability-training recipe; outside Qwen2.5 they often fail or harm performance. Treat a Qwen-only score gain as insufficient evidence and rerun the matched reward controls on at least one non-Qwen family.

Mechanism boundary: the clipping analysis and ablations target this GRPO configuration with no KL or entropy loss. Before extending the explanation to another RL algorithm, template, or optimizer setting, reproduce the no-clipping control and log both behavior frequency and accuracy.

Curator audit risk: the public repository includes filtered/majority-labeled data, but no separate data card or independent data license was found. Check upstream DeepScaleR terms and exact file provenance before redistribution.

The paper also reports prompt sensitivity for Qwen2.5-Math-7B; pin and disclose the chat template before comparing baseline and post-RL scores.
