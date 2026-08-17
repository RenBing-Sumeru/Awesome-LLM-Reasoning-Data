最有力的证据指向搜索契约、扩展成本和发布边界，而不是普遍的轨迹质量。

- **任务证据。** 正式接收的论文使用 Qwen2.5-7B 和 Llama 3.1-8B，在 ComplexWebQA、GPQA 与 FoolMeTwice 上评测该方法。论文报告其结果优于所比较的 RAG 与推理 baseline，并研究了 retrieval 与 search 的贡献。这些是作者报告的 benchmark 结果；它们不能证明每个生成分支在事实上正确，也不能证明分支可复用为训练数据。
- **预算证据。** 对 Qwen2.5-7B，论文报告 4 个 rollout 时平均生成 11,892 token，latency 为 Standard-RAG 的 2.8x；16 个 rollout 时报告 28,972 token 和 4.5x latency。这支持条件聚合层面的 compute-quality trade-off，但没有发布逐样本 token、检索调用、wall-clock、hardware、seed 或 cost 记录。
- **仓库输入证据。** 固定版本的官方仓库包含 100 条 CWEBQA 记录、100 条 GPQA 记录及另一个 100 条 evidence 文件、200 条 FMT 记录和 200 条 ScienceQA 记录。ScienceQA 不在论文的三个结果表中。这些文件确认的是有限 benchmark 输入，而不是所生成 MCTS 搜索数据的发布。
- **生成器证据。** 源码包含 trace writer、可选 tree printer、arguments 输出、retrieval 实现、evaluator 和 discriminator，可以在本地生成终点 JSON 和逐 rollout JSON。核查的 Git tree 没有论文运行的 `run_outputs`、`.tree` 文件、原始全节点 archive 或逐记录结果包。
- **失败证据。** 论文指出 early retrieval error 的放大、factual confusion、information overload、latency、action-selection complexity 和 unnecessary expansion。公共 release 不包含衡量这些失败发生频率所需的分支级记录。

artifact 核查在仓库 commit `3b4c64ebc8192916c9e671ba7e97f18d1f7b9d74` 上验证了官方链接、代码路径、输入数量、输出 schema 以及未提交运行 artifact 的事实。它没有独立复现论文的 accuracy、latency 或模型调用结果。
