1. **一句话定位：** RuVerBench 检验 LLM 是否可靠判断 Agent 长输出的 rubric 满足性。
2. **方法抓手：** 深研/代码输出、criterion 拆分、人工 gold、prompt/batch/vote 对照。
3. **数据抓手：** 2,458 条报告或代码输出—rubric—人工二元判断实例。
4. **证据锚点：** Judge 噪声明显，batch 有准确率代价，投票收益快速递减。
5. **复用决定：** 适合 Agent Judge 选型；训练前必须报告人工一致度与成本曲线。
