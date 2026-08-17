正确性继承自被包装的 benchmark 和 adapter。BrowserGym 的 success 值只证明该次运行中 adapter 的 evaluator 返回成功，不自动证明语义任务完成超出了原 benchmark 契约。

生态可以统一日志，但仍可能在比较不等价的任务、live services、action abstraction、prompt 和 hidden-test 政策。浏览器版本、网站依赖、登录状态、captcha、网络故障和模型 API 变化都会改变结果。公开日志和任务配置可能污染未来 agents；把轨迹用于训练或 reward 前必须审计 adapter 代码。
