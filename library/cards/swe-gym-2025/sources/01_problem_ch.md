权威出版入口是 [PMLR record](https://proceedings.mlr.press/v267/pan25g.html) 及其 21 页终版论文，发表于 2025 年 Proceedings of the 42nd International Conference on Machine Learning，PMLR volume 267。Repository-level 软件工程 agent 需要的不只是 issue text 与 gold patch。训练还需要可复现代码快照、依赖、动作接口、可执行测试，以及能标注完整交互轨迹的成功信号。SWE-Gym 从真实 GitHub issue 与 pull request 构建这一 substrate。

验证后的版本包含来自 11 个仓库的 2,438 个 Python 任务。每个任务把自然语言 issue 与 repo、base commit、version、人工 patch/test patch 以及 PASS_TO_PASS/FAIL_TO_PASS 测试绑定起来，使 issue 成为可用于 agent SFT、outcome-verifier 训练和 verifier-guided test-time selection 的环境数据对象。

发布内容是一组分离工件，而不是单一语料：任务、Lite 子集、Raw 候选、success-only SFT 对话、成功/失败 rollout、verifier mixture、Moatless 数据、模型、fork 和 Docker image。它们的 schema、license、ID 与 revision 不同，因此开放性必须逐工件陈述。

SWE-Gym 属于“数据构建与开放发布配方”，因为它覆盖从 issue/PR extraction、半人工 executable-environment setup、gold-patch test validation、trajectory sampling、成功/失败过滤，到 SFT、outcome-verifier learning、Best@k selection 与多工件发布的生命周期。它不只是 repository-agent benchmark 或模型榜单；Atlas 的分类决策以构建与封装契约为中心。本 Card 不需要第二个 category。

这里的 L4 证据边界来自 venue-final paper，以及已检查的官方代码、任务数据、trajectory release、model organization、environment/agent fork 与 Docker surface。L4 不认证安全复用。64,689 到 2,438 的 rejection ledger、task-to-image digest/SBOM manifest、稳定的 rollout-to-SFT/verifier lineage、若干组件许可、semantic contamination audit 与数量差异协调仍不可用。
