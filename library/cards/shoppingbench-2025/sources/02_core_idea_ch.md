一句话贡献：ShoppingBench 构建了一个真实意图 grounded 的购物 benchmark 和 sandbox，使 LLM 智能体可以在复杂购物目标上评测，而不只是做简单商品查找。核心机制是采样真实商品、派生 grounded intents、模拟用户指令、暴露购物/搜索工具，并评分最终轨迹是否满足商品相关性和意图约束。

数据对象是购物指令加环境状态、工具调用、检索到的商品列表、商品详情观测、可选 web-search 观测、最终答案/商品组合和评测分数。反馈契约是混合但主要环境化的：商品相关性、知识约束、同店约束、预算/优惠券约束、累计商品相关性和绝对成功率，都把轨迹绑定到具体商品和约束检查上。

分类理由：它属于 `environment_agent_trajectory_data`，因为它是带轨迹和工具反馈的交互式购物 harness。最接近的比较对象是 WebShop 和其他电商/Web 智能体 benchmark；ShoppingBench 的区别在于更丰富的 grounded intents、大规模 sandbox，以及把 GPT-4.1 成功工具轨迹蒸馏到更小 Qwen3-4B agent 的路径。
