**任务输入与答案对象。** 主实验覆盖 CodeContest、LiveCodeBench release-v4 中 2024 年 8–11 月的问题、100 个公开 ARC-AGI evaluation problems，以及三个源自 Kaggle 的低复杂度 MLE-Bench 任务。扩展研究使用 120 个任务的公开 ARC-AGI-2 evaluation set。每个生成的非根节点都是完整 Python 答案或 ML-engineering 程序，而不是带标签的中间推理步骤。

**生成与修订。** AB-MCTS 以任务提示作为根节点。每次迭代在当前树中选择路径，使用 Thompson sampling 在 `GEN` 选项和已有回答/子树之间决策，生成一个完整答案，对其评分，再回传结果。选择 `GEN` 会产生新分支；沿已有回答遍历最终会生成子修订，supplemental solver 从任务、先前 assistant generation 和评估结果构造的反馈中组装修订请求。这就是变宽/变深响应—修订契约的实际操作。

**搜索模型。** AB-MCTS-M 用 mixed model 实现自适应分支；AB-MCTS-A 用聚合节点统计与共轭 Gaussian 或 Beta 模型。已检查的算法以及 `Node`/`MCTSResult` 实现中没有明确的分支剪枝或删除路径。“被拒绝”指没有成为最终答案，而不是在生成期间被抹除。所有节点都可以保留在本地序列化树中；最终提交代码对节点排序，并选择排名最高且包含有效 Python 代码的候选。隐藏测试不用于搜索评分。

**Evaluator 与终点使用。** CodeContest 和 LiveCodeBench 使用公开测试通过比例评分；ARC 使用正确完成的 demonstration example 比例；MLE-Bench 使用任务特定 validation metric，每个候选在一张 H100 上执行，时限一小时。最终评估使用隐藏代码测试、未见 ARC 精确输出或隐藏 MLE 测试。ARC-AGI-2 还把 Pass@k discovery（任意分支是否找到精确解）与竞赛式 Pass@2 selection 分开报告。这些契约结合程序执行与任务环境，可能产生搜索反馈与最终评估不一致。

**模型、采样与重复运行。** 主设置为 GPT-4o `gpt-4o-2024-08-06`、temperature 0.6，以及通过可变 `deepseek-chat` alias 调用的 DeepSeek-V3、temperature 1.0。LiveCodeBench 重复五次，CodeContest 与 ARC-AGI 重复三次，MLE-Bench 一次。ARC-AGI-2 扩展使用 `gemini-2.5-pro-preview-05-06`、`o4-mini-2025-04-16` 和 `deepseek-r1-0528`，temperature 均为 0.6。流程属于推理时搜索，因此没有披露 teacher model 或后训练 optimizer。

**预算与计量。** 主实验每个任务最多 128 次 LLM generation/API call，即 \(2^7\) 个新增答案节点。Standard MCTS 每次扩展生成五个子节点，最后一次只生成三个，使比较总数也恰好为 128 次调用。附录 ARC-AGI 分析扩展至 \(2^9=512\) 个节点。较后的 ARC-AGI-2 多模型实验使用 250 次生成调用，而不是 128 次。调用数只是名义预算：它不包含生成 token、evaluator 运行时间、重试、墙钟延迟、provider 价格或 MLE GPU 成本。

**持久化与发布。** NeurIPS supplemental code 可通过 `MCTSResult` 保存完整可达树，其 OpenAI-compatible client 还可保存请求与生成响应以及用量日志。TreeQuest 另提供多模型搜索、可视化、checkpoint/resume 和 ask–tell API。这些都是本地能力。supplemental logging 目录中没有实际实验输出，公开仓库也未提交论文运行轨迹语料，因此 `artifacts.data` 与 `artifacts.huggingface` 必须保持 `null`。
