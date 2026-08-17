软件工程 Agent 通常需要仓库专属环境——锁定的依赖、测试运行器和 held-out tests——才能判断最终 patch 是否有效。构建和维护这些环境成本较高，缺失或损坏的依赖还会使原本有用的 issue 无法进入后训练。Dockerless 研究的是：当 policy 在最小基础镜像中运行时，是否可以由学习型 program verifier 代替仓库专属测试，为 SFT 筛选和强化学习提供反馈。

论文给出了两类相关数据对象。Verifier 训练记录包含 issue、仓库 checkout、golden/reference patch、candidate patch、二值执行标签，以及由 GLM-5 生成的验证问题、证据化回答和最终判断序列。下游记录则是 OpenHands 在最小 Ubuntu 镜像中的完整软件 Agent rollout，以 candidate patch 和 Dockerless 分数结束。论文报告的内部规模为 3.7K 个独立 verifier 训练 issue、16K 条下游候选 rollout（其中 4K 条入选 SFT），以及 776 条 verifier 评测样本。

本工作属于环境与 Agent 轨迹方向，因为其核心对象是从 issue 与仓库状态，经 shell/tool 交互，到最终 patch 与反馈的完整谱系。它不是开放数据发布：未核验到论文专属的 verifier 语料、16K/4K 轨迹集、776 条评测清单、代码、模型权重或项目页。
