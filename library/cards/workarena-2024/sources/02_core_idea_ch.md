一句话贡献：WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks? 把一个任务包含 ServiceNow 工作目标、种子实例状态、角色或凭证上下文、浏览器观察、动作、业务对象变化和终止验证输出。绑定到具体反馈契约，形成可复用对象。

核心机制：该基准通过 BrowserGym 暴露 ServiceNow workflow，并评估常见知识工作任务。反馈契约：BrowserGym 任务调用任务级 validate 函数，基于 ServiceNow 状态和谓词返回 reward、stop、message 和 info。最接近的对比对象是：消费者网页导航基准、静态办公 QA，以及没有企业状态的浏览器任务。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
