阅读 ShoppingBench 时可把它看成三个耦合工件：intent-grounded 购物任务集、基于商品文档的 sandbox/search 环境，以及轨迹蒸馏 recipe。benchmark 价值在反馈契约，不只是模型排行榜。

需要记住的事实：当前 arXiv 标题是 “ShoppingBench: A Real-World Intent-Grounded Shopping Benchmark for LLM-based Agents”；状态是 AAAI 2026 oral / arXiv；benchmark 有四类 intent；arXiv HTML 报告 3,310 条指令和 2,746,368 个唯一商品；公开 README 列出 product/shop/voucher/web 测试文件和 rollout/evaluation 脚本。

开放 review 项：许可证、商品数据来源、评测器边界情况、web-search 依赖、划分是否不可变，以及轨迹蒸馏数据能否在不污染 benchmark 的情况下复用。
