核心贡献是在 web-gui-agents, environment-synthesis, coding-agent-generated-environments 上提供 本地元数据尚未完整固定规模，定量复用前必须回到官方发布版本核验，并把它组织成可复用评测面。核心机制是把任务输入、模型输出和反馈契约绑定起来；这里的反馈契约是：environment-specific web/GUI task checks and generated test predicates。

数据对象或环境是：large-scale synthesized web/GUI environments generated with coding agents。最接近的对比对象是 agent-environment, tool-use, and benchmark-harness papers in the same atlas category。方向标签是 environment_agent_trajectory_data，反馈方式是 environmental, 混合。复用时要保留的不只是概览分数，还包括任务对象、评测器、数据切分/版本和 产物谱系。
