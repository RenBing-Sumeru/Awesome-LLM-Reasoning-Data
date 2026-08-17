一句话贡献：SeeAct 说明 GPT-4V 这类多模态模型已经能提出有用的网页行动计划，但 web-agent 的真实表现取决于一个单独的 grounding 契约，即把模型意图映射到正确网页元素和浏览器动作。核心机制是一个通用网页智能体流程：视觉观察网页，根据语言任务生成动作决策，并在 Mind2Web 风格离线数据和真实在线网站上比较不同 grounding 策略。

数据对象是 agent-environment 的一步或一个 episode：任务指令、网页观察、元素/动作空间、预测动作，以及执行或匹配结果。反馈契约是环境式的：离线评测检查元素和动作是否匹配标注轨迹；在线评测在 live websites 上执行并判断任务是否完成。因此它代表的方向是“grounded multimodal web agents”，不是普通最终答案推理。

最接近的对比对象包括 Mind2Web 的文本/HTML 网页智能体监督、WebArena/VisualWebArena 的交互网页环境、WebVoyager 的多模态网页浏览，以及 SeeClick 这类 GUI grounding 工作。SeeAct 特别适合用来判断失败来自 planning、grounding，还是网站和运行环境漂移。
