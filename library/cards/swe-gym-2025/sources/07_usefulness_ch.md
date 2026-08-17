对“数据构建与开放发布配方”轨道而言，SWE-Gym 展示从 issue sourcing、可执行环境、trajectory sampling、成功/失败保留，到 SFT、outcome-verifier training 与 Best@k 的完整 pipeline。分离的 success-only 与 failure-preserving release 很适合研究封装方式如何改变可用学习信号。

复用时应固定 repo/base commit、harness 与 scaffold revision、dependency lock、test bundle、image digest、dataset revision、精确 instance/trajectory ID 与 model checkpoint。签名 manifest 应把每个派生 SFT/verifier 行映射回 sampled rollout 与执行结果。

单元测试应审计 flakiness、不完整性与可利用性；learned verifier 应报告 calibration 与错误选择率。失败环境构建与 Moatless rejection 应带 reason code 保留。语义 issue/patch overlap 与 code-clone 检查应补充 repository disjointness。

任务环境、sampled failure 与平衡 verifier data 在 accepted `training_use` 范围内适用于 agent training 与 test-time selection。它们默认并不具有完整许可或不可变绑定，报告的 benchmark 提升也不能认证任务质量、模型可加载性、运行时可复现性或权利完整性。
