对 `environment_agent_trajectory_data` 赛道而言，SWE-MERA 展示了仓库任务如何连接 prompt 来源、base-commit 状态、patch、可执行 tests、构建/测试观察和终端反馈。它适合评测软件工程智能体、审计刷新流水线，并检查实现是否符合声明的 verifier 语义。

支持的 `training_use` 仅为 evaluation。发布包含参考 patches 与 tests，却没有规范智能体轨迹语料、偏好数据集、reward API、SFT 配方或 RL 实验。用参考 patches 训练还会模糊基准边界并增加污染。

安全使用应固定 HF 和代码修订，同时强制 FAIL_TO_PASS 与 PASS_TO_PASS，记录完整 test report 和 critical failure，从不可变依赖重建容器，并保留每次智能体尝试与中间 patch。使用者还应对齐 split 成员，在可能时保留未公开未来任务，审计上游许可/PII，并在强化、受控网络的 sandbox 中运行仓库。
