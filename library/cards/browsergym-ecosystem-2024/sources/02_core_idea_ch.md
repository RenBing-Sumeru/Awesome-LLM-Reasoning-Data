核心贡献是一个可复用生态：把异构 Web-agent benchmarks 包到统一 BrowserGym 环境接口下，并配套 AgentLab 做 agent 构建、实验运行和分析。关键机制不是单一评分规则，而是把浏览器观测、动作、任务初始化、终止、日志和结果聚合规范成一套 API。

数据对象是一条环境 rollout：任务指令、浏览器观测、动作命令、页面状态、终止事件、分数和日志。反馈契约由每个 adapter 继承原 benchmark 的 evaluator 或环境 predicate。最接近的对比对象是单独的 WebArena、VisualWebArena、WorkArena、MiniWoB、WebLINX harness，以及通用 RL gym 接口。方向标签是 browser-agent benchmark infrastructure。
