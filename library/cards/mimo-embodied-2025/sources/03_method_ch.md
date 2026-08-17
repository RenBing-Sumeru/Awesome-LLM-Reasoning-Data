全部模型组件均从 MiMo-VL 7B-SFT-2508 初始化。第 1 阶段把继承的通用数据与 PixMo-Points、RoboAfford、RoboRefIt，来自 BridgeData V2/RoboVQA/AgiBot/HoloAssist 的规划来源、第一视角来源、SQA3D、自建 3D 定位数据、VLM-3R、RefSpatial 与 EmbSpatial-SFT 混合。

第 2 阶段继承这些数据，并加入覆盖感知、参与者意图/交互、元动作、交通知识、论证与规划的自动驾驶来源，包括 CODA-LM、LingoQA 式会话、DriveLM、OmniDrive、nuScenes-QA、MME-RealWorld、IDKB、MAPLM、DriveAction 与 NuInstruct。

第 3 阶段为情境分析、候选方案、备选方案、可供性/空间约束、风险、轨迹评估与论证生成 CoT。生成器身份、提示词、解码方式、来源子集、推理轨迹数量、过滤、正确性验证与被拒记录均未知。

第 1–3 阶段的全参数训练采用批大小 512、AdamW、学习率 2e-6、权重衰减 0.05、余弦调度、32,768 上下文；第 4 阶段采用批大小 32、学习率 1e-6、权重衰减 0、相同的优化器/调度/上下文设置与全参数训练。训练轮次、步数、预热、精度、硬件、计算量与随机种子未披露。
