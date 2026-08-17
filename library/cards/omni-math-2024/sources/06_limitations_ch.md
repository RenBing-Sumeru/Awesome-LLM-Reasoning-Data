正确性只相对于 benchmark 的参考答案和评分路径成立。规则匹配可能拒绝数学等价但格式不同的答案；LLM judge 的接受/拒绝反映 judge 行为，不等于形式化证明。Omni-MATH 不能被误读为定理证明基准、proof-step verifier，或模型推导过程必然正确的证据。

复现受数据版本、答案抽取、prompt 文案、judge 模型 revision、采样预算和模型发布日期影响。公开 HF/GitHub artifact 方便审计，但也提高了训练污染风险。把记录用作训练数据、评测数据或 reward-model supervision 之前，必须逐 artifact 检查 license 和再分发条款。
