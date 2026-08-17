ShoppingBench 适合研究购物智能体、Web/工具使用评测、多步约束满足，以及从强智能体向小模型蒸馏轨迹。它的价值在于暴露简单商品搜索看不到的失败：部分商品相关、同店约束、优惠券计算、预算满足和长尾知识缺口。

实际复用从 arXiv:2508.04266 和 https://github.com/yjwjy/ShoppingBench 开始。README 给出具体设置步骤：解压商品文档、初始化环境/搜索引擎、分别运行 product/shop/voucher/web intent 的 rollout 脚本，再运行 evaluation 脚本。仓库也包含 SFT 和 RL 训练入口。

使用分数或轨迹前，要固定仓库 commit、商品压缩包 checksum、解压后的索引、测试文件、划分策略、外部 web-search provider、评测器代码、prompt/scaffold、模型 API 版本和随机种子。商品数据权利和发布许可证在直接检查前都应视为开放问题。
