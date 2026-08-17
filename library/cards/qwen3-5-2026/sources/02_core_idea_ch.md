本 Card 将 Qwen3.5 视为部分前沿披露台账，而不是开放的智能体训练配方。发布材料把四项事实联系起来：原生多模态基础模型、pre-training 与 post-training 阶段、在逐步复杂化任务分布和百万规模智能体环境上扩展的 RL，以及面向大规模智能体脚手架与环境编排的异步框架。Qwen 自有检查点使所得后训练模型可用于推理。

但训练数据对象只停留在报告级披露。官方没有给出 task prompt、文本—图像—视频记录、observation、action、tool call、环境响应、reasoning trace、reward、termination 或 replay 的 schema，也没有命名 verifier 或 reward contract。对文本、图像、视频、Qwen-Agent、MCP 工具或 Qwen Code 的部署支持，只说明如何使用已发布检查点，不能证明训练它时采用了哪些 episode 或 feedback。
