一句话概括其贡献：用短 local context 下、对 LLM-segmented reasoning step 求等权平均的 student likelihood 替代 full-prefix response likelihood，再用该分数为每个 prompt 选择一条完整 answer-correct response 进入 SFT。

基线 GALP 对整条 response 的 token log probability 求平均；每个 token 都以 prompt 和全部已生成 prefix 为条件。该准则在论文 controlled within-teacher study 中有效，因为 response style 与长度相对接近；但在长 mixed-teacher regime 中，它反转了真正有用的 teacher 排序。

LALP 改变打分接口的两个部分：

- **Local conditioning。** GLM-4.5-Air 把完整 solution 切分成 step。对于 `s_i`，LocalLP 对目标 student 的逐 token log probability 求平均，条件只包括 prompt、`s_i` 内已生成 token，以及之前紧邻的 `k` 个 step。
- **Equal-step aggregation。** LALP 按 step 数对 LocalLP 求平均，因此每个 segmented reasoning move 无论 token 长度如何都等权。均值最高的完整 candidate 被选中。

输出仍是一条完整 response。Selector 不会保留某个“good step”、给每个 step 生成二元 label，也不会用 step score 训练 student。`step_level` 描述打分发生的位置；`full_episode` 描述被保留的监督对象。训练是通过普通 SFT 完成的 response-level distillation。

反馈契约是 mixed：

| 组成 | 提供什么 | 不能证明什么 |
|---|---|---|
| Final-answer match | candidate pool 的接收条件 | 中间过程有效或推理忠实 |
| GLM-4.5-Air segmentation | 逻辑 step boundary | ground-truth step structure 或 segmentation correctness |
| Student likelihood | student-specific scalar ranking | 真值、因果训练价值或通用数据质量 |
| Argmax rule | 每个 prompt 一条 selected response | 置信校准、tie quality 或鲁棒性 |

因此，LALP 只对已通过独立最终答案条件的 candidate 排序。它不是 correctness verifier，也不是 process supervision。高 local likelihood 表示某个 transition 对特定 pretrained student、在所选 segmentation 与 window 下熟悉或 plausible，不表示该 step 在数学上正确。

最接近的 prior-work baseline 是 GRAPE 风格的 global likelihood selection。LALP 保留 model-aware、pre-SFT scoring 思路，但把单位从完整 trajectory 移到 local step，因为论文认为 reasoning 以组合方式泛化。与 prompt-level diversity 或 difficulty selection 相比，它固定 prompt 并在 response 间选择。与 verifier-based trace filtering 相比，它假定最终答案正确，排序的是监督效用，而不是检查有效性。

其方向信号是 student-specific response curation：同一个 candidate pool 对不同目标 student 可以产生不同优选数据。审计信号则是该分数依赖 LLM segmenter、local window、student pretrained distribution 和未发布 candidate ledger。解释 selected 817 responses 时，这些依赖必须保持可见。
