论文报告 Mobile-Agent-v3 在 AndroidWorld 上达到 73.3，在 OSWorld-Verified 上达到 37.7；同时报告 GUI-Owl-7B 在 AndroidWorld 上为 66.4、在 OSWorld 上为 29.4，并报告 TRPO 训练变体在 OSWorld-Verified 上达到 34.9。

逐样本证据来自环境执行：轨迹必须按 benchmark 的成功定义完成 GUI 任务。这比 text-only answer 更可审计，但论文级数字仍依赖 benchmark 版本、云环境状态、模型 checkpoint 和 scaffold 设置。

证据边界是：公开 aggregate score 不暴露每条轨迹、过滤决策或训练数据 lineage。复用自进化轨迹时，需要 artifact-level 访问，并单独审计 accepted、rejected、timeout 和 ambiguous runs。
