一句话贡献：WebMall - A Multi-Shop Benchmark for Evaluating Web Agents 把一个任务包含购物指令、四个模拟商店、商品 offer、任务类别、观察、跨店动作、购物车或 checkout 状态、gold offer-URL set 和完成指标。绑定到具体反馈契约，形成可复用对象。

核心机制：该基准从商品 offer 构造模拟商店，并定义 11 类、5 个任务组中的 91 个任务。反馈契约： gold offer-URL set matching；product-search、add-to-cart 和 checkout 任务还用 precision、recall、F1 表示部分完成。最接近的对比对象是：WebShop、WebArena 电商任务和实时购物智能体基准。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
