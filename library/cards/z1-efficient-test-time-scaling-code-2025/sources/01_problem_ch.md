Z1 处理一个相互耦合的数据与推理问题：长推理轨迹可以通过监督微调迁移更强的问题求解行为，但不加区分地生成长回答会增加测试时成本，也可能在简单问题上浪费 token。因此，论文考察由较短和较长 teacher 响应组成的代码数据能否训练一个较小模型，并在推理时用显式预算控制其思考长度。

公开数据对象很具体。官方 `Z1-Code-Reasoning-107K` 只有一个 `train` 切分，在一个 Parquet shard 中包含 107,173 行。每行字段为 `id`、`question`、`response` 和 `token_num_qwen`；`response` 是未分段的推理与答案目标，而不是相互独立的思考字段和最终答案字段。论文把简单提示与较短轨迹、复杂提示与较长轨迹联系起来，但发布中没有 simple/complex 或 short/long 标签。

它属于 **Rollout, Search, and Test-Time Trace Data**，因为研究变量是轨迹长度与运行时思考预算。它没有发布多候选、被拒绝生成、搜索树、verifier 分数或逐行预算日志。EMNLP 2025 Industry Track 论文及附录、ACL 与 arXiv 记录、官方 GitHub 仓库以及官方 Hugging Face 数据和模型工件支持本卡达到 L4；这些证据并不能建立正确性、许可证、去污染或完整构造可复现性。
