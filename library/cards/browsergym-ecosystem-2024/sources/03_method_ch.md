1. 输入：benchmark adapter、网页任务、浏览器运行依赖、agent policy 或 scaffold，以及由 AgentLab 管理的实验设置。
2. 环境初始化：adapter 启动目标网站或数据 split，暴露 observation/action space，并定义 reset、step 和 termination 行为。
3. Rollout：agent 读取观测、输出浏览器动作，环境返回更新后的页面状态和特定 benchmark 的反馈，直到终止或预算耗尽。
4. 输出：BrowserGym 记录轨迹、分数、元数据和日志，可进一步聚合成 multi-benchmark 报告或 leaderboard。
5. 评测：verifier 是 adapter-specific 的，可能是网页状态 predicate、答案检查、轨迹指标或原 benchmark 定义的 success function。

复现要固定 BrowserGym/AgentLab commit、Playwright/浏览器版本、网站快照或 live-service 日期、benchmark package 版本、public/hidden split、prompt、模型 API、retry 策略、timeout 和每个 adapter 的 evaluator 代码。
