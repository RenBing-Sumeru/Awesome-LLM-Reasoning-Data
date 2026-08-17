对于 Data Construction and Open Release Recipes 赛道，OpenCUA 是高价值参考，因为它公开了大部分转换链：经同意的人类记录、原始事件压缩、状态—动作对齐、隐私与质量复核、反思轨迹合成、步骤过滤、来源混合、SFT 格式、静态动作评测和交互式任务评测。它适合比较多模态 agent 数据集中来源或 verifier 错误会在哪一环进入。

研究者可以将 AgentNet 用于截图条件下的动作 SFT、反思轨迹蒸馏、动作 grounding、离线 policy 比较、轨迹分析，或研究人类错误与恢复。已发布的 CoT generator 也是构建替代 reflector、rationale 忠实性检查，以及区分 L1 动作、L2 reflection 和 L3 observation 的消融实验起点。

安全复用需要比模型 headline 分数更窄的结论。应固定 dataset 与 model revision，分别解析轨迹和 metadata JSONL，检查目标领域中的权利与隐私，并保持人类动作与 Claude 编写推理之间的区别。评测时，应把 AgentNetBench 视为首选步骤动作一致率，并使用可回放环境支撑整项任务结论。要复现论文中的模型训练，仍需要未发布的 launcher/configuration 细节和外部来源快照。
