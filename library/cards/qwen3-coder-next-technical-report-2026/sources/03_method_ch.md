报告使用 Qwen3-Next-80B-A3B-Base，并将 Qwen3-Coder-480B-A35B-Instruct 用于若干网页、QA 和轨迹操作。它将与 issue 相关的 pull request 挖掘为缺陷状态、修复和测试三元组，构建可运行环境，并通过重写和扰动仓库来合成 bug 或 issue。多个 agent framework 生成多轮轨迹；精确 framework 配置以及环境/测试生成组件身份披露不完整。

prompt 来源包括 GitHub 代码和 pull request、现有开源软件工程数据集、Common Crawl 或领域网页、专有 SFT 语料、文档 QA、合成仓库任务和生成的编码智能体任务。报告称拥有约 600B 仓库级中期训练 token、约 80 万个合成可验证软件工程任务，以及 807,693 个 PR 派生仓库实例。它没有提供来源 manifest、来源比例、仓库版本列表或任务与轨迹发布。

可运行 Docker 环境和验证脚本通过 Kubernetes 上的 MegaFlow 进行评估或 rollout。候选单元测试由独立生成解之间的多数共识保留。过滤器移除 benchmark 重叠，要求有差异的缺陷/修复执行，并拒绝失效 verifier、歧义任务、不一致环境、错位测试、畸形轨迹以及简单或噪声 RL 实例。混合权重、解码、rollout 分配、精确阈值、reward 系数和日程未披露。
