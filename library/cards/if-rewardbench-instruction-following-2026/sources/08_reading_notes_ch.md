1. **一句话定位：**用 checklist 和多回答偏好图元评测指令遵循 judge。
2. **方法抓手：**842 条指令，覆盖单轮、多轮和持续上下文指令，保存全部成对偏好关系。
3. **数据抓手：**每条记录含 messages、checklist、constraint type、responses 与 preference graph。
4. **证据锚点：**listwise 分数比传统 pair benchmark 更能预测下游优化效果。
5. **复用决定：**非常适合 reward/judge 选择与图式偏好研究；公开测试不可混入训练。
