**输入。** 作者通过文献回顾、专家咨询、实践经验和 LLM-assisted deep research 选取真实应用领域。候选仓库须使用 Python、至少有 50 个 GitHub stars、在此前 5 年内保持活动，并提供 ready-to-use weights 或较简单的环境配置；筛选时还检查 stars、forks、license、commit history 和功能。最终 54 个任务覆盖图像（16）、视频（3）、语音（8）、生理信号（3）、安全/隐私（9）、网页抓取（6）和办公文档（9），分布在 18 个仓库中。（AAAI 论文第 3 页；arXiv Appendix A, Table 4）

**构建与完整性检查。** 任务和仓库通过迭代共同细化：专家设计 non-trivial 任务，检查仓库能力，实际执行任务，调整参数，并在适用时生成预期输出或 ground truth。5 名计算机科学博士按照仓库说明验证依赖、配置、数据、模型和预期结果；论文报告所有保留任务都可由人完成。公开包把 prompt 和输入同仓库代码、工作目录、输出路径、配置、可选 ground truth 及定制 test script 关联起来。论文没有报告候选淘汰台账，也没有 train/dev/test split。

**Episode。** 被评测智能体接收选定仓库和任务 prompt。预期工作流依次为仓库理解、代码生成或修改、环境配置、代码执行和写入任务特定终态产物。实验使用 Aider v0.84.1.dev-21-gb2592267、OpenHands 0.33.0 与 SWE-Agent v1.0.1-61-gaa4e8ea1。扩展版报告每次运行使用 9 vCPUs、33 GB RAM 和 2965 GiB SSD；Aider 在本地 Python 3.12 Conda 中运行，OpenHands 使用官方 runtime container，SWE-Agent 使用带 Python 3.12 的 Ubuntu 20.04 Docker。模型采样设置为 temperature 0.5、top-p 1.0、模型默认 top-k 和 4096-token response cap，并服从各 framework 要求。论文所报的每个 framework/model 结果取两次独立运行的平均值。

**Verifier 与输出。** 每个任务的 Python grader 先检查输出是否存在、非空并可解析，写入 `Process`/ECR；再应用任务特定标准，写入 `Result`/TPR。最后一条 JSONL 记录包含 `Process`、`Result`、`TimePoint` 和 comments；`Result=true` 是 terminal success predicate。Alpha 另行加入人工与经济项，不能同程序化 predicate 混为一谈。监督信号附着在最终产物/episode 结果上，而不是经过验证的中间推理步骤上。

**Replay 要求。** 严肃复现应固定 GitHub commit `df188a73013393d036442bfb0f323c4c995fa5e1`，不能只引用 `main`；还需分别记录每个上游仓库 commit、容器 image digest、OS packages、dependency locks、外部模型/数据 hash、网络策略、framework/model 配置、随机种子、timeout 和 run manifest。公开 GitHub 树没有 tag 或 Release，也没有任务级上游 commit manifest。Hugging Face snapshot `22ca28cedaa927f8c65224df3c61a0ed4c0b93eb` 缺少 `code_base`、配置、ground truth、结果示例和 runner，无法独立 replay 整个基准。
