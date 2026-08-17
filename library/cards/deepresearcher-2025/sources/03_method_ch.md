Prompt 来自 Natural Questions、TriviaQA、HotpotQA 和 2WikiMultiHopQA。质量过滤与无搜索 pass@10 检查删除低质量题和基础模型已能回答的题，留下 80,000 条、比例 1:1:3:3 的数据，其中 75% 为多跳。Qwen2.5-7B-Instruct 使用 verl/GRPO；每步采样 256 个 prompt、每题 16 条 rollout，共 4,096 条，每条最多 10 次工具调用，mini-batch size 也为 4,096。

环境在 50 节点 CPU 集群上运行真实搜索、browse、并行网页 reader 与 synthesis 服务。搜索失败可重试，相同查询可缓存七天。确切 temperature、随机种子、总步数/rollout 数、网页快照、handler 版本及被拒同组轨迹不在已核验发布中。

