FSF 报告称，SFT 使用由推理模型生成的 thought traces。它没有识别上游 prompts 或任务、trace 生成器身份或 checkpoints、trace 模式、采样设置、选择规则、人工参与、来源权利或已发布示例。报告称，对 thought traces 的 RL 包含长度惩罚；除少数例外外，其他奖励不参考 thought。奖励方程、奖励权重、verifiers、标注者、校准、聚合、算法、优化器、调度、rollout 生成和更新规则均为 unknown。因此，报告支持将 SFT 和 RL 作为高层训练用途主张，但不支持 RLVR 或可复现的反馈契约。

报告还描述了安全 query filters、输入过滤和处理、其他 guardrails，以及用于改善缓解覆盖面的 red-team feedback。它没有披露这些机制的数据选择规则、阈值、保留率或训练关联。对网络安全评测而言，一个自定义 controller 运行多阶段思考和工具使用循环，在解析或验证出错时最多重试五次，并使用模型和任务特定的工具。Gemini 3 Pro 在该评测中使用 75 次尝试和 40 步挑战；这些是评测设置，而不是后训练 rollout 数或已部署推理预算。

