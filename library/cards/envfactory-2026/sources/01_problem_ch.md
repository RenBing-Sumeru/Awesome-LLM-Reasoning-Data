权威论文记录是 2026 年 5 月 18 日提交的 arXiv:2605.18703v1；没有核验到 peer-reviewed venue，因此 venue 保持为 arXiv preprint。证据冻结覆盖官方 EnvFactory repository 的 commit `eff3b22d3fc26afa14165cfe208c2a4c9ecc39e3`、作者链接的 VeRL fork commit `dab0fcb68c46509ba3120eb8d35aa47e17bdb55f`，以及引用部分列出的三个固定 Hugging Face dataset revision。

EnvFactory 处理的是一个具体的 agent-data 瓶颈：tool-use post-training 需要大量可执行、有状态的环境、可行的多工具任务、交互轨迹和 outcome feedback，而人工构造和验证这些对象成本很高。它用 source-grounded synthesis pipeline 构建本地 MCP environment，派生 dependency-feasible scenario，生成 assistant/user 多轮交互，再把选中的 conversation 转换为 SFT 和 RL record。

数据对象是关联 bundle，而不是泛化的 transcript。一个 environment 包含 research note 或 schema sketch、标准化 metadata 与 tool schema、有状态 database schema、可执行 Python tool 和 MCP interface。生成 episode 再加入 initial state、user profile 与 scenario、dialogue history、reasoning、tool call 与 response、reference call、target final state、reward component 和 stop condition。这些是受真实来源启发的合成本地环境，不是在原始 production API 上执行。

论文报告 85 个 verified environment、七个 domain 中的 842 个 tool、1,622 个 SFT conversation 和 953 个 RL conversation。官方 HF 发布使用不同单位：26,463 条 SFT-FILTERED row、53,412 条 SFT-ALL row 和 3,092 条 RL row，且都只有 `train`。SFT row 是把保留的 tool-call 或 user-interaction step 展开后得到的；RL row 是 turn-level。conversation count 与 expanded row count 不能相加、互相替换或写成同一规模。

本 Card 归入 `environment_agent_trajectory_data`，因为 state、action、observation、tool schema、environment transition、terminal condition 与 composite reward 共同定义训练记录。它不能证明真实服务等价性、安全的无限制复用，也不能用 benchmark gain 证明数据质量。accepted metadata 继续保持 `partial` 和 `L3_summary_ready`；双语正文达到 L4 阅读深度，但不升级 workflow state。
