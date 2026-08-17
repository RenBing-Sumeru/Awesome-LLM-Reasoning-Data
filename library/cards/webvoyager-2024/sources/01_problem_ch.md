WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models 回答的问题是：开放网页智能体面对实时网站、截图和变化的页面状态；只用模拟器或文本评测会漏掉这种多模态不确定性。主来源是 https://arxiv.org/abs/2401.13919；公开状态为 ACL 2024 main / arXiv（2024）。

决策边界：它应作为 live-web 多模态智能体基准和评测协议收录，不是确定性程序验证器。评测面是：一个任务包含用户指令、网站上下文、截图/页面观察、浏览器动作轨迹、最终回复、任务日期或站点条件，以及评测判断。它对 atlas 的价值在于任务对象和反馈规则可以一起审计。
