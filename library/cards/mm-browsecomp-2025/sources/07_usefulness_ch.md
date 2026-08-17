这项 benchmark 可作为多模态 browsing-agent 评测 schema：问题、来源 URL 或证据描述、媒体类型、必要推理路径/checklist、最终答案、judge model、prompt、访问日期和工具预算。它适合检查 browser agent 是否真的查看了视觉证据。

做数据构造时，应把浏览轨迹和最终答案标签分开保存。只有当轨迹记录 observation、媒体访问、tool call、时间戳和 judge 决策，且不泄露受保护答案字段时，才适合进一步审计或训练复用。
