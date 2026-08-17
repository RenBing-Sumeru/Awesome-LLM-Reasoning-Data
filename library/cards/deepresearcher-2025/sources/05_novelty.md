Compared with fixed-corpus search RL, DeepResearcher places live search and a multi-agent page-reading subsystem inside the training environment. Network failures, noisy pages, URL choice, retries, and cache state become experienced transitions. Loss masking also makes the environment/policy token boundary explicit.

GRPO, F1 reward, and multi-agent reading are established components. The direction signal is their integration into scalable live-web on-policy training, plus disclosure of prompt filtering and rollout allocation. The contribution is a training/environment recipe and episode schema, not a separately released trajectory corpus.

