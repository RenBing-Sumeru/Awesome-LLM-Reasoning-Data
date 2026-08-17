DeepResearcher 研究在嘈杂、动态的开放网络中对研究 agent 进行端到端强化学习，而不是依赖固定 RAG 语料。需要区分四类数据对象：80,000 条过滤后源问题；on-policy 的推理、JSON 工具动作与观察流；终局答案与奖励；以及训练后的 DeepResearcher-7b checkpoint。

官方仓库发布 train/dev/test prompt Parquet、代码和评测路径，官方 Hugging Face 页面发布 checkpoint；这些工件并不能证明原始训练 rollout、被拒同组轨迹或网页快照已经版本化发布。

