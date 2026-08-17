该工作的核心贡献是在 20,000 个唯一 SWE-rebench-V2 PR 任务上，将两种教师模式与两类 agent harness 交叉，发布 207,489 条 episode。MiniMax-M2.5 生成显式 thinking 轨迹，Qwen3.5-122B-A10B 生成 non-thinking 轨迹；两种教师分别结合 OpenHands 与 SWE-agent 系列接口，形成覆盖九种编程语言的四个公开配置。

数据单元保留 state–action 证据，而不只保留终局答案。每条记录包含 `instance_id`、代码库、代码库许可证标签、语言、`trajectory_id`、结构化 `trajectory`、序列化工具定义、`resolved`、嵌套的 patch/类别元数据和 `hf_dataset_name`。对话轮次区分 system、user、assistant 与 tool 角色；MiniMax 记录可保留 `reasoning_content`。反馈契约来自环境，并位于 outcome 级：代码库测试把 patch 标为已解决（`1`）、未解决（`0`）或结果不可用（`-1`），而不是逐步正确性监督。

发布物有意保留非成功 episode：65,244 条已解决、95,487 条未解决、46,758 条 outcome 不可用。相对于 resolved-only 子集，这些数据暴露失败搜索、部分进展和 harness 交互模式，可在明确目标下采样。相对于 SWE-rebench-V2 本身，新意在于从任务基底物化教师与环境的交互 episode；底层 PR、agent framework 和可执行测试思想均为复用，而非本工作首次提出。
