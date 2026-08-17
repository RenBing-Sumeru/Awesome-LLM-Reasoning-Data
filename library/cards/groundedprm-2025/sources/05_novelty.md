GroundedPRM changes automatic process supervision in two ways. It uses MCTS structure rather than flat independent completions for credit assignment, and it adds executable step checks rather than relying only on terminal success or LLM self-critique. The generative target pairs a label with a rationale instead of predicting only a scalar or class.

MCTS, symbolic tools, outcome rewards, and generative critics each predate the work. The contribution is their joint data contract: local tool fidelity and global search outcome are combined before training a rationale-producing PRM. The paper is directionally useful for `rollout_search_test_time_trace_data`, but absence of trees and run manifests means the release evidence is weaker than the method detail.

