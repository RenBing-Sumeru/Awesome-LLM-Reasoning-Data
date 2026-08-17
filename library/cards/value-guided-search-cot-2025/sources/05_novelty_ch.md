既有基线是按步骤切分的过程监督：先定义推理步骤，再通过人工、LLM judge 或重复 rollout 为这些步骤取得标签，训练 PRM，并用其给候选排序。标准 test-time baseline 则生成完整回答，再通过多数投票、加权投票或 best-of-N 做选择。两种接口用于长 CoT 都代价较高：密集步骤标注难以扩展，完整回答采样则要先消耗预算，之后选择器才能淘汰路径。

VGS 改变了监督对象。一个训练样本由随机截断的 roll-in 和固定 policy 续写组成，完整回答的三分类结果被施加到 rollout token 上。因此，学习分数估计的是从任意 token prefix 出发、条件于该 policy 的完成成功率，而不是人工切分步骤的正确性。搜索在粗粒度的 4,096-token 边界消费这个分数，使数据生成单元与推理选择器共享 prefix-value 接口。

新的部分不是单独的最终答案核验、regression via classification、beam search、DVTS 或投票，也不只是收集了更多 CoT。其具体变化是四个部分的组合：（1）用多种规模模型生成 roll-in，增加 prefix 多样性；（2）用固定 policy 生成 rollout，定义明确的 value target；（3）从终点标签得到密集 token-prefix 监督；（4）在显式 generation budget 下做分块选择。250 万个 pair 的发布使该接口可检查，但 token-ID 打包方式和缺失的拒绝项仍限制部分分析。

对本分类而言，方向信号是 rollout data 可以训练未来搜索所需的 selector，而不仅用于提供入选 SFT trace 或 pass@k 统计。它也暴露出可复用的审计问题：value target 条件于 rollout policy 与过滤后分布，因此 generator 强度、提示混合或失败保留策略改变后，同一分数的含义也会变化。

复用前，应与完整回答多数投票及预算匹配的 selector 比较，检查 `math-verify` 边界情况，测量不同 generator 规模上的校准，把全失败组保留为单独 audit split，并记录完整分支决策。性能提升本身不能证明 token-level target 表示了语义上的推理进展。
