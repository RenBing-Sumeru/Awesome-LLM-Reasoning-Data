对于 Data Construction and Open Release Recipes 赛道，Genius 最有用的地方是提供一个无标签偏好构造的完整 schema。复现者可以把一条源查询作为根对象，保存每个 policy 前缀与候选，附上每条未来 continuation 及其归一化 log probability，记录 beam 选择概率与随机 seed，再派生 chosen/rejected 轨迹和 advantage 权重。这样可以明确看到 policy-internal proxy 如何变成训练分布，以及为了审计这一转换，发布时必须保留哪些信息。

该方法也适合受控对比。实验室可以固定查询和候选 rollout，比较 foresight likelihood 与 answer checker、unit-test executor、process reward model、独立 LLM judge 或人工审计子集；还可以改变 beam size、rollout count、分数温度、continuation 长度归一化、rejected-path 采样，以及 ACO 与 DPO，同时测量下游分数和 pair-level false positive/false negative。论文 Table 3 和 Table 4 为这些消融提供了基线条件。

作为审计参考，当前发布揭示了一份实用清单：固定源数据 ID 和 policy hash；确认查询进入训练 message；区分从源数据复制的 response 与算法实际使用的字段；保存完整过程池和失败样本；记录 pair lineage 与选择概率；做逐条 benchmark overlap 检查；发布软件/硬件配置；并分别说明代码、源数据、生成偏好和 checkpoint 的许可证。可见的数组长度 guard 也可以作为重实现的端到端 smoke test。

复用等级：由于论文实验的 100K/128K 偏好快照、精确来源清单和不可变端到端配方均不可用，**直接训练数据复用被阻塞，等待核验**。在解决交接问题后，官方代码和 checkpoint 适合用作**阅读/审计参考与面向复现的实验起点**。HF 源数据集不能被误标为 Genius 生成偏好数据，benchmark 结果也不能替代逐条数据质量验证。
