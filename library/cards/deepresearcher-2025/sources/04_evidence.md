The EMNLP paper specifies the trajectory grammar, tool interfaces, observation masking, reward equation, prompt mixture, filtering total, and rollout allocation. The repository exposes Apache-2.0 code, train/dev/test Parquets, generation/evaluation paths, and a DeepResearcher-7b checkpoint.

The paper reports gains up to 28.9 points over prompt-engineered baselines and 7.2 over RAG-based RL agents; training curves and cases show planning, cross-validation, redirection, and abstention-like behavior. These are policy-level results under stated evaluations. They do not validate every trace, page, citation, or reward decision and do not substitute for an original rollout release.

