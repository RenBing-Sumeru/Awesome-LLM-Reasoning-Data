已有 SWE-bench 数据 pipeline 依赖为每个仓库手工写环境和测试 parser；自动环境工作也常直接让单个 LLM反复修 Dockerfile。SWE-Factory 的改变是拆分为四个协作 agents，并通过 environment memory 复用历史经验，同时把判分统一成 shell exit code。

其新意不在 F2P 概念本身，而在消除两个规模瓶颈：项目特定日志解析与人工 fail2pass 核验。这样同一工厂能跨语言生产可执行实例，并给出构建成本、precision/recall 等数据质量指标。
