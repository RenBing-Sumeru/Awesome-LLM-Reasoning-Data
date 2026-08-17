论文在 TRAIL 上评测；文中描述 TRAIL 含 148 条 OpenTelemetry trace、841 个 span-level error，使用 20+ 类错误 taxonomy。报告指标是 localization accuracy、weighted category F1 和 joint localization-categorization accuracy。

Table 4 报告该框架在 TRAIL-GAIA 上达到 0.547 category F1、0.823 localization accuracy、0.616 joint accuracy；在 TRAIL-SWE-bench 上达到 0.698、0.860、0.638。证据边界在 mapper 和 judge 设置：框架输出被翻译到 TRAIL category，bottom-up/top-down judging 都用 GPT-5.4，TRAIL 标注一致性会限制 category-level claim 的含义。
