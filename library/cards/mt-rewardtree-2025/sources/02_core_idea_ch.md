论文的核心贡献是面向机器翻译的 search-to-preference 接口：在同一前缀下，用两个下一 token 各自采样补全的期望质量进行比较，再把选出的兄弟分支对转成用于 implicit PRM 的 pairwise data。在 approximate MCTS 循环中，当前前缀是 state，下一 token 是 action。模型只扩展 logits 最高的 top-2 token，从每个 child 生成三条完整翻译，以这些 rollout 的 COMETKiwi 均值作为 child 的 node value，保留 value 更高的分支，并重复到 EOS。

该构造的 feedback contract 是 `judgment_required`，而不是 programmatic correctness。COMETKiwi 观察完整翻译并输出标量质量估计；它看不到人的真实意图、基于参考译文的充分性、单个 token 的因果质量，也无法判断 top-2 以外的低概率分支是否最终更好。prefixed pair 的 `chosen` 与 `rejected` 共享已生成前缀，并在一个兄弟 token 处分叉，因此可作为 step-level supervision；但发布 schema 并未把该前缀或 token 作为独立字段暴露。DPO 或 KTO 随后从 policy/reference 的 log-ratio 导出 implicit token reward，而不是使用人工 token 标签。

论文内部最接近的对照是 arbitrary 或“vanilla”pair variant，其中两条翻译不要求保持相同前缀下的兄弟分支关系。MT-RewardTree 将 selection unit 从纯 sequence preference 改为由 rollout value 支持的 token-anchored branch decision，因此代表了机器翻译中的 metric-guided search-to-process supervision。关键边界在于：论文描述的是带 tree value 的构造过程，发布物却只有筛选后的 pair，而不是可审计的 tree corpus。
