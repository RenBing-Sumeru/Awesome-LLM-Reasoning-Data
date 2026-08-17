可重建的 pipeline 如下：

1. **Task source。** 通过 Wikidata SPARQL 获取 rare entity，用 Search 与 Visit 收集 feature 和 related entity，再以概率 random walk 扩展 graph，直到达到预设 edge 数；generator 与 graph-size 配置未披露（Appendix A.2）。
2. **QA synthesis。** 采样 subgraph，生成 question 与 reference answer，再把精确事实模糊为大致年代、部分姓名或定性数量。论文没有报告 QA 总量、split、deduplication 或 decontamination（论文 §3.1）。
3. **Expert rollout。** 未披露的 open-source LRM 生成完整 ReAct solution。QwQ-32B 只作为示例出现，确切 teacher revision、prompt、temperature、rollout count 与成功率未知（论文 §3.2）。
4. **Thought reconstruction。** 丢弃 expert 原始 thought，但保留成功的 action–observation pair；另一个未披露的 instruction-following LLM 接收之前 history、已选 action 与后续 observation，为该步写入简洁 thought。
5. **RFT filtering。** 只保留最终答案正确、少于 32k token 且 tool call 多于五次的 trajectory，并从 loss 中 mask observation token。论文只说保留 2,000 余条，没有给出精确 manifest（论文 §4.1）。
6. **DUPO rollout 与 reward。** 每个 QA 采样八条 rollout。训练前去掉八条全对的简单 case；训练中去掉标准差为零的 group，并从同一 batch 复制合格 case。优化采用 group-relative advantage、token-level policy gradient、非对称 clipping 和 `0.1 format + 0.9 answer` mixed reward（论文 §4.2）。
7. **Training output。** 在 Qwen-2.5 3B、7B、32B、72B 上执行 RFT 与 RL，SFT 使用 Megatron，RL 使用 verl。Appendix A.4 报告主要 optimizer 参数，但 base checkpoint、seed、dependency commit、judge 配置和服务版本没有固定。

复现还必须冻结 live environment：Qwen-Agent code、Google Search 行为、Jina retrieval、Qwen-2.5-72B summarization、tool schema、API key、retry policy、page snapshot 与 30 次 tool-call 上限。公开仓库提供 inference/evaluation code 和 3B/7B/32B 模型，但不提供 synthesis code、2,000 余条 RFT 记录、完整 DUPO rollout 或 72B checkpoint。
