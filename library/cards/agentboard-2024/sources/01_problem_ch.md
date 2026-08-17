AgentBoard 要解决的问题是：多轮 LLM agent 只看最终成功率会遮蔽中间进展和失败位置，应如何做可诊断评测。一手来源是《AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents》（arXiv:2401.13178，NeurIPS 2024 Oral）以及论文脚注给出的官方仓库 https://github.com/hkust-nlp/AgentBoard。评测对象是在 9 个环境、1,012 个 curated tasks 中的一条部分可观测交互 episode：agent 观察状态、采取动作、接收环境反馈，并由成功率和过程指标共同评分。

这张卡的边界是 agent 评测与诊断 benchmark，不是训练语料，也不是脱离轨迹的泛化排行榜。它对 atlas 的价值在于把“过程中是否推进任务”纳入反馈契约：模型可能最终失败，但仍能留下可度量的 partial-progress 证据。复用前要固定任务版本、仓库 revision、模型/scaffold、API 行为、解析规则和 progress metric 的精确定义。
