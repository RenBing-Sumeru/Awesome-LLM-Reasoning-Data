官方家族论文识别出 Nano、Super 和 Ultra，并报告多环境 RL、跨任务族的同时训练、训练/推理解耦的异步方式、GRPO、masked importance sampling、最高 1M-token 上下文以及推理时 reasoning-budget control。它还称将发布 NVIDIA 拥有再发布权的数据、软件、recipe 和权重。

官方 Nano 模型卡给出了更详细但仅限模型的披露。其数据表列出 141 个数据集和 10,648,823,153,919 个 token，而另一处正文称 Nano 约训练了 25T token。它识别公开、爬取、合成、私有第三方和 NVIDIA 内部数据类别，并称最终预训练与后训练数据已发布，其中混合了无需门控的样本和需要门控或批准的材料。

官方开发者仓库说明其开放 recipe 只使用数据的开源子集，结果可能不同于使用额外专有数据的技术报告结果。这些来源支持部分发布、混合数据的判断，但不能建立来源、reward、环境、rollout 和 benchmark 的完整家族级映射。
