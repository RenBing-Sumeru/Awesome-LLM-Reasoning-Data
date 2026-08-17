ShoppingBench 要回答的问题是：当用户意图包含商品属性、长尾知识、同店多商品、优惠券和预算限制等真实电商约束时，应该怎样评测购物智能体。主来源是 arXiv:2508.04266；当前 arXiv API 记录为 v4，2026-06-18 更新，标题为 “ShoppingBench: A Real-World Intent-Grounded Shopping Benchmark for LLM-based Agents”，并备注 accepted for oral presentation at AAAI 2026。

本卡片的判断边界是 benchmark、模拟购物环境和轨迹数据。数据对象不是单个商品搜索问题，而是用户指令、采样的真实商品、交互式 sandbox/search 环境、工具调用、观测、最终选品或答案，以及任务级指标。论文报告 sandbox 覆盖超过 250 万真实商品；arXiv HTML 给出的唯一商品数是 2,746,368。

Atlas 相关性：ShoppingBench 是浏览器/工具智能体评测面，正确性依赖状态化交互和约束满足，而不是纯文本 QA。L4 备注：作者、arXiv 状态、AAAI oral 备注、仓库、数据文件、intent 类别和 train/test 数量已从 arXiv HTML/API 与官方 GitHub README 核验。仍需审计商品数据权利、发布许可证、评测器实现，以及是否存在隐藏或未来 benchmark 划分。
