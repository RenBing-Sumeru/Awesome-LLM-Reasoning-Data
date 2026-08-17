1. **覆盖指令：**收集单轮、多轮和 system-prompt steerability 场景，细分格式、内容、条件与交互约束。
2. **编写清单：**为每条指令拆出可独立判断的 checklist item，并标记 constraint type。
3. **生成回答：**采样多个模型回答，保留从完全遵循到部分或明显违反的质量梯度。
4. **建立偏好图：**依据 checklist 满足情况与整体质量标注全部 response pair，形成一致的 preference graph。
5. **元评测：**judge 分别执行 constraint assessment 和 overall assessment，再用图排序一致性衡量 listwise 能力；代码和数据在官方仓库开放。
