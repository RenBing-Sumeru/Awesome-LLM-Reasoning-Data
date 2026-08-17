一句话贡献：WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents 把一个 episode 包含用户购物指令、模拟商品目录页面状态、搜索/浏览/定制动作、选中商品、奖励组成和可选人类演示轨迹。绑定到具体反馈契约，形成可复用对象。

核心机制：作者用真实商品数据和众包指令构建模拟购物网站，再通过交互训练和评测智能体。反馈契约：程序化商品、属性、选项和价格匹配，为选中商品计算购物奖励。最接近的对比对象是：静态语言 grounding 数据集，以及没有可扩展奖励交互的网页基准。方向标签是 verifier-anchored agent evaluation，即可复用单元是任务对象加验收规则。
