**输入。** 收集流水线爬取 24 万个带 GitHub URL 的 PyPI 包，经 Stars ≥5、PRs ≥3 筛选后保留 5.9 万个仓库，下载 10,416 个仓库，抽取 8.8 万个实例，再经筛选从 4,413 个仓库保留 3.8 万个。保留任务提供 issue/patch 上下文；未找到完整的公开逐任务来源清单。（论文 §3.1；附录 A.2。）

**构造与验证。** 作者从 2.6 万实例子集中生成 2,097 个 F2P 函数；加上现有测试后共有 4,630 个测试。上下文抽取依次供给 Gherkin 描述生成、测试代码生成、可选的 traceback 修订和执行。一个有效测试应在原始仓库状态失败、在参考补丁之后通过。代码仓库提供 Docker（Ubuntu 22.04）和非 Docker evaluator 命令，但没有发布每个 episode 的镜像 digest、依赖锁定或重放记录。（论文 §3.2；GitHub README 与 Dockerfile。）

**rollout、选择与用途。** 在常规实验中，DeepSeek-V3 以 30 次迭代、32k max tokens 在 OpenHands 的 ReAct-like agent 中运行。论文报告约 1.7 万条未评估轨迹和 2,300 条正确轨迹。对过滤后的扩展研究，Llama-3.1-70B-Instruct 保留 `identical`/`mostly` 的补丁比较。论文用 OpenRLHF 研究 SFT/RFT、KTO 与 OREO，并未建立通用 reward model。公开数据集只暴露 `input`、`from`、`f2p_pass`、`f2p_count`、`reward` 和 `instance_id`；`from`、每个 reward 值的语义以及行到论文实验的映射均未披露。复现或训练前应固定 HF revision、GitHub commit、镜像/依赖版本、来源快照、prompt、seed 和命令。
