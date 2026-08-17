AgentRL 被纳入“前沿报告与数据披露账本”，因为它把多轮智能体与环境的接口具体化，但没有发布完整的论文运行轨迹语料。训练围绕经过调整的 AgentBench Function Calling 任务：ALFWorld、DB、Knowledge Graph、OS 和 WebShop。任务 worker 构建 system/user 提示，解析并执行 OpenAI Function Calling 响应，注入观察与奖励历史，并将会话维持到完成或异常终止。披露的记录模式包括任务索引、提示、工具定义和调用、动作、观察、环境状态、奖励、终止信号和轨迹。该框架是异步且容器化的：控制器管理任务 worker 与会话，仓库材料描述了 FastAPI worker、HTTP/gRPC 传输和 Docker 支持的环境。

