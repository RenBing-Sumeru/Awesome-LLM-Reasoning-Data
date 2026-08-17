论文的主要证据是一套可运行生态和一次大规模 multi-benchmark 实验：6 个 SOTA LLM 在 BrowserGym 暴露的 6 个常用 Web-agent benchmarks 上被比较。报告的发现不只是 leaderboard；它显示模型排序会随 benchmark 类型变化，在该设置下 Claude 3.5 Sonnet 在多数 benchmark 领先，而 GPT-4o 在视觉相关任务上更强。

行级证据来自可运行 adapters、浏览器轨迹日志、环境 predicate 和原 benchmark 分数。证据边界就是 adapter 边界：如果被包装的 benchmark 有网站漂移、隐藏状态、嘈杂 success predicate 或不同 prompt，BrowserGym 只能让运行更规整，不能消除这些风险。比较分数时必须使用同一 BrowserGym/AgentLab release、浏览器后端、benchmark split 和 agent scaffold。
