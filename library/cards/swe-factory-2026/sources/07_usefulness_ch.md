对“数据构建与开放发布配方”轨道而言，SWE-Factory 提供一条具体蓝图：issue/PR sourcing、binary-resource repair、四角色环境生成、execution-feedback refinement、gold-patch validation、trajectory collection 与 full-parameter agent SFT。复现实验可在固定 task pool 与 budget 下，消融 binary recovery、role separation、execution feedback、memory retrieval 与 exit-code semantics。

该发布也是一项审计案例。策展者可以对比 671 条 task、2,809 条 messages-only trajectory 与 430 条 Gym environment，检查发布是否跨构建阶段保留 object identity。更强的实现应在一个 signed manifest 中保存 task/rollout ID、Dockerfile 与 evaluation-script revision、image digest、verifier log、outcome label、rejection reason、human correction、training subset，以及 checkpoint/prediction binding。

Verifier 设计者可以保留标准 marker，同时区分 assertion failure、infrastructure error 与 timeout。人工审计应公开 record ID、独立 annotation、agreement 与 adjudication、更正后的 parser outcome，以及 false-positive/false-negative 分析。Container 构建者应为不可信仓库执行增加 digest-pinned image、dependency lock、SBOM、resource hash，以及 network/secret control。

复用等级为：**当前可作为配方与审计参考；训练或评测复用在完成核验前应阻断**。代码、671 条任务、2,809 条轨迹、430 条 Gym 记录与 checkpoint 都是有用起点，但使用者必须独立解决上游权利、checkpoint license、source contamination、逐行 lineage、trajectory success 与 environment immutability。Accepted training-use 边界只有 SFT、agent training 与 evaluation，不应推导 preference、process-reward 或 RL 主张。
