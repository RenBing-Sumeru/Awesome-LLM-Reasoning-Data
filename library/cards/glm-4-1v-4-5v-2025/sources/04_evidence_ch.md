这份报告对前沿 VLM 给出了较具体的构造证据：命名的来源类别、初始池或标注数量、过滤规则、回答标签、难度标签来源、领域奖励逻辑和若干训练日程。例如，超过 100 亿图文初始池、2.2 亿 OCR 图像、4,000 万自然图像 grounding 标注、超过 1.4 亿 GUI 问答、5,000 万 instruction 混合样本、12 万预训练步和 1 万长上下文步。这些数字属于不同阶段，不能相加成一个最终发布数据集规模。

反馈证据也较具体。报告记录了弱 LLM judge 接受模糊范围或近似描述所导致的 reward hacking，并展示某个多模态子域的弱验证器会在奖励上升时同时损害本任务与无关 STEM benchmark。这支持使用盒 token 抽取、领域验证逻辑、单元测试和格式/风格奖励，也说明奖励设计影响报告中的训练；但它没有给出误接受率，不能证明最终验证器套件已经校准。

当前报告在 42 个公开 benchmark 上比较 9B GLM-4.1V、总参数 106B/激活 12B 的 GLM-4.5V 与其他开放和闭源系统。GLM-4.1V 到 GLM-4.5V 的示例变化包括：MMMU Pro 57.1 到 65.2、MathVista 80.7 到 84.6、ChartQAPro 59.5 到 64.0、OSWorld 14.9 到 35.8、AndroidWorld 41.7 到 57.0、Design2Code 64.7 到 82.2。报告还称 GLM-4.5V 的 RL 实验最高提升 10.6 个百分点。这些是模型评测结果，不是语料质量、许可或污染的直接测量。

跨领域实验从 GLM-4.1V-9B-Thinking 的 SFT 检查点开始，比较 STEM、OCR & Chart、Grounding、GUI Agent 和 mix-all RL 数据。单领域训练常会提升其他领域；mix-all 在五类中的三类最好，但并未改善 grounding 或 GUI agent。这支持异构任务间存在迁移，也保留了“并非所有领域都协同”的反例。准确训练样本数和逐领域课程记录仍缺失。

产物证据必须单独记录。官方 Hugging Face 卡以 MIT 提供 GLM-4.5V 和 GLM-4.1V-9B-Thinking safetensor 权重，仓库还链接 GLM-4.1V-9B-Base 权重。Apache-2.0 GitHub 仓库包含推理、示例、集成和带 lockfile、测试的 `glmv_reward` 包。它没有开放预训练/SFT/RL 数据、完整模型训练或 GRPO 基础设施、课程采样器状态、策略 rollouts、人工偏好、生产奖励日志或 reward-model 权重。

