MUIAnno 适合作为 mobile GUI grounding 评测的 schema 和审计参考。复用记录应保留 screenshot ID、app/category 来源、图像分辨率、元素 taxonomy 版本、bounding-box 坐标约定、嵌套元素处理规则、可用的标注/验证状态、prompt template、模型输出 JSON、IoU 阈值、类别匹配规则和 evaluator 版本。

在 atlas 中，它最适合作为 observation-level evaluation surface，或用于分析 UI perception 错误的标签源。它能帮助 GUI-agent 数据 schema 把 screen state、visual element、semantic class、model prediction 和 scoring evidence 分开。没有单独的许可证、污染和标签质量审计时，不应直接当作 reward 或训练语料。

实际复用清单是：固定 artifact revision，确认许可证和截图权利，抽样跑 evaluator，检查 icons、nested controls 等难类，记录 API 模型版本，并把 aggregate score 与 per-element match record 分开保存。
