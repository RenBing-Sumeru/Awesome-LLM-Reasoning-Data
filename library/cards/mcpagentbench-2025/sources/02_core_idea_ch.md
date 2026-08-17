核心贡献是在 tool-use, agent-environments, interactive-评测 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：Completion rate and execution-efficiency metrics 裁判 whether agents choose and invoke MCP tools correctly。

数据对象或环境是：Real-world MCP task definitions, simulated MCP tools, dynamic sandbox, candidate tool lists, and distractors。最接近的对比对象是 agent-environment, tool-use, and benchmark-harness papers in the same atlas category。方向标签是 environment_agent_trajectory_data，反馈方式是 environmental, 程序化。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
