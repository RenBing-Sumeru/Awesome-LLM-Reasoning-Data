可由证据重建的流水线如下：

1. **输入与检索底座。** 论文评测 ComplexWebQA、GPQA 和 FoolMeTwice。它描述了约 100K 条用于 ComplexWebQA 的 Bing snippet、80K 条 Wikipedia passage 加 60K 条用于 GPQA 的 Bing document，以及约 30K 条用于 FoolMeTwice 的 benchmark passage。每次检索提供 top 10 文档。这些论文运行语料没有作为不可变 snapshot 发布。
2. **节点扩展。** Qwen2.5-7B 或 Llama 3.1-8B 在 A1-A6 中选择动作，并生成直接回答、推理、分解、以检索内容为条件的文本或总结。检索过程包括 query generation、query execution、knowledge reflection、summary 或 integration。搜索使用最大深度 5、最多两个子问题和并发扩展。
3. **节点评分与回传。** 多个 completion 按答案等价性分组。多数答案的频率估计 confidence，多数 cluster 内的平均 log-likelihood 成为 reward，并更新 UCT 统计 Q 和 N。论文没有公开 retrieval-necessity、similarity、early-error 或 consistency-pruning 的数值阈值。
4. **终点选择。** 分支在产生有效答案节点或达到配置的深度或 preset limit 时停止。语义等价的终点答案被分组，轨迹节点 reward 相乘并累积，再由归一化后的 group score 选择最终答案。
5. **预算研究。** 4 个 rollout 是主要设置，8、12、16 个用于消融。论文运行的 decoding temperature 是 unknown。

公共代码是 generator 实现，不是冻结的执行记录。它可以写出包含终点 solution node 的 `Final Solutions.json`、每个 rollout 一个节点的 `Rollout Solutions.json`、可选 `Potentials.json`、可选的递归文本 `.tree` 文件、`args.json`，以及聚合调用量或 token 总数。可选 tree printer 能展示 Q、N、V、UCT、节点文本和 children，但仓库没有提交生成后的 tree 或论文运行输出包。discriminator 会计算 confidence、survival rate 与 combined score，但核查到的逐问题持久化路径保存的是 correctness boolean，而不是这些 score vector。

复现还需要解决实现一致性。论文描述 Bing Search 与 LangChain，而核查的仓库检索代码使用 Cohere embedding、Azure/FAISS 路径、外部 credential、未提供的 index 或 evidence path，以及硬编码的 GPT-4o retrieval-query helper。示例脚本使用 FMT、Llama-3.1-8B-Instruct-Turbo、16 个 rollout 和 temperature 0.1；parser 默认值则包括 15 个 rollout 和 temperature 0.4。这些默认值都不能证明主要的 4-rollout 论文运行使用了什么未公开 temperature 或具体服务。
