NVIDIA 的官方项目页称其发布预训练、后训练和量化 checkpoint、用于训练的数据集以及模型配方。官方 BF16 模型卡标明 OpenMDW License Agreement v1.1。发布页面还链接了 NVIDIA 的后训练集合和 NVIDIA-NeMo 仓库。这些事实支持权重、集合和配方确实已发布。

同一官方模型卡声明有 226 个数据集和 14.8T token，整体划分列为训练 100%、测试 0%、验证 0%；技术报告则另行陈述 20T-token 预训练。已检查材料没有解释两种总数之间的关系。模型卡还列出公开、爬取、合成、私有第三方、私有 NVIDIA、供应商和未披露等来源类型，并标出私有 search RL 与未披露本地环境。

报告在 SWE 教师阶段给出了明确的 reward 警告：最终隐藏测试 reward 可能错误奖励或惩罚完整 trajectory。NVIDIA 加入 mask 和负 advantage 处理，并关闭两条 gold-patch 泄漏通道；但已检查材料没有给出 reward 错误率、校准结果或完整的跨环境审计。

