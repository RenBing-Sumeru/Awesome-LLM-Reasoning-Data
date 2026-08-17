Best-of-N（BoN）通过多次采样提高至少出现一个可用回答的机会，但普通 Full-BoN 必须完整生成 N 条轨迹，再用答案一致性或奖励模型排序。论文指出两类相互叠加的成本：KV cache 与生成成本随 N 增长，外部奖励模型还会引入额外显存、时延及其训练数据依赖。因此，关键决策不只是“哪个完整答案获胜”，还包括能否在足够早的解码阶段识别潜在优质轨迹并停止其余候选。

ST-BoN 将其处理为白盒测试时选择问题。可审计的数据对象应包括同一 prompt 的候选前缀、token 与 hidden-state 历史、Chain-of-Embedding（CoE）特征、首次分歧步 c、buffer window 内逐步一致性分数、最终候选、停止元数据及完整答案。这些对象服务于 test-time compute 与 evaluation，论文并未把它们定义为训练语料。官方仓库提供实现和若干 benchmark 输入文件，但没有证明论文使用的全部候选、CoE 分数、被拒轨迹和 prompt manifest 已作为版本化数据发布。
