GroundedPRM 对自动过程监督做了两项改变：用 MCTS 结构而不是扁平独立 completion 分配信用，并加入可执行步骤检查，而不是只依赖终局成功或 LLM self-critique。生成式目标把标签与 rationale 配对，而不是只预测标量或类别。

MCTS、符号工具、outcome reward 与生成式 critic 都已有先例。该工作的贡献是联合数据契约：先组合局部工具 fidelity 与全局搜索 outcome，再训练产生 rationale 的 PRM。它对 `rollout_search_test_time_trace_data` 有明确方向价值，但缺失搜索树与运行 manifest，使发布证据弱于方法细节。

