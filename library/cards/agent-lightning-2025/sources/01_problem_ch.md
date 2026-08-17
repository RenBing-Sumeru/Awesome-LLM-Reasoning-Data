Agent Lightning 被纳入“前沿报告与数据披露账本”，因为它披露的是框架和轨迹模式，而不是规范训练语料。用户提供的任务和智能体可在客户端运行，客户端通过 OpenTelemetry/AgentOps 插桩或基础的 OpenAI 风格 API 追踪器捕获执行。执行被表示为带元数据、输入和输出的组件调用；抽取出的训练转移包含 LLM 输入/上下文、LLM 输出/动作和标量奖励。状态还可携带语义变量、程序计数器、变量值、调用栈和资源上下文。结构化提示、工具调用和奖励可作为 trace span 流向 LightningStore，但没有官方工件链接到覆盖全论文的 execution、rollout、trace 或 span 语料。

