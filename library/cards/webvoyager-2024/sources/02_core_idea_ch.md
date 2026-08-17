一句话贡献：WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models 把一个任务包含用户指令、网站上下文、截图/页面观察、浏览器动作轨迹、最终回复、任务日期或站点条件，以及评测判断。绑定到具体反馈契约，形成可复用对象。

核心机制：作者构建 LMM 驱动浏览器智能体，并通过 Selenium 在真实网站上端到端测试。反馈契约： GPT-4V 自动评测器：根据任务、回复和最近截图判断成功，并配合可选人工检查及人工一致性校准。最接近的对比对象是：文本网页智能体、静态网页快照和仅模拟器网页智能体基准。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
