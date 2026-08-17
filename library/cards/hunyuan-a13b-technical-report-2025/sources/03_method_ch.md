**基础语料与上下文准备。** 报告沿用 Hunyuan-TurboS 系列的预训练流水线，包括预处理、去重、低质过滤、去噪、主题标注、模型辅助抽取，以及带语义去重的后处理。报告给出的汇总量包括：超过 20T 的基础 token、强化后的 250B STEM 子集、300B token 的快速退火阶段，以及先扩展到 32K、再到 256K 的上下文训练。这些都是语料与流程的汇总披露，没有记录清单。

**分领域 SFT 质量控制。** 各推理领域使用不同的反馈链，而不是统一 judge。数学结合生成式奖励模型和自动解题验证；代码使用 critic 与 sandbox；逻辑采用自动思维链评价和人工审查；科学使用高级 LLM 验证器与拒绝采样。报告未给出生成模型、阈值、接受率和人工审查协议。

**On-policy 推理 RL。** GRPO 在 150K 道题上训练，领域比例为 2:2:1:1，并排除选择题、判断题和证明题。课程从 24K 上下文推进到 32K。报告明确说明训练为 on-policy、使用大 batch、增加 rollout 采样数量、不使用 KL penalty，采样温度为 0.6–0.8；但 rollout 倍数、batch size、learning rate 和训练步数均为 unknown。

**全场景 agent 构造与反馈。** 合成引擎把 user、planner、tool、agent、checker 分成五个角色，调用 sandbox 工具、MCP server 和合成工具，覆盖 30 多类 agent system instruction，并创建 20,000 种 tool/action/response 格式组合，重点包括 Excel 与 deep search 等任务。全场景 RL 可进行 candidate/reference 比较，也可读取思维链、调用工具并检查长度或约束；30 多个服务覆盖 16 个子主题。Agent 奖励既检查特殊标记及顺序，也按参考答案核对工具名、参数和值。环境快照和评分权重没有公开。

