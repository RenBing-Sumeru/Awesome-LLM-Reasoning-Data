正确性只相对于已声明契约成立：反馈契约是 gold offer-URL set matching；product-search、add-to-cart 和 checkout 任务还用 precision、recall、F1 表示部分完成。离线商店用部分真实性换取可复现性。商品抽取、目录新鲜度、任务生成规则、checkout 模拟和 gold-set 语义都必须固定。

不要把论文解读成无限制真实世界可靠性证明。公开 artifact 会进入后续训练语料，服务支撑环境会漂移，judge/评测器实现也可能随发布版本变化。
