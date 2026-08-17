本文的贡献是把比较式 verification 改写为面向整个候选集合的文本生成。给定题目和带索引的解答摘要，GenSelect 要求推理模型筛查相互矛盾的答案，分析剩余方法，比较数学精确性、完整性、清晰度、效率与稳健性，最后输出 `Judgment: [IDX]`。因此，selector 的原生信号是生成式 rationale 加一个离散索引，而不是经过校准的标量 reward。它能观察题目、提供给它的摘要、候选顺序和最终答案；它无法看到摘要过程中丢失的推理细节、选择时的 ground-truth correctness、隐藏模型状态，也无法判断候选池是否覆盖了正确方法。

当全部候选无法同时放入 context 时，方法把同一比较组织成 N 叉淘汰赛。对 64 个候选，论文比较了需要六个串行轮次、总计 63 次比较的二叉赛制，与需要四次首轮调用和一次四路决赛、共两轮的 16 路赛制。最终报告的设置采用分支数 \(N=8\)、两轮淘汰赛、在随机候选排列下重复 32 次，再对所选答案做 majority voting。候选池大小、分支数与 selector 重复次数是三个不同字段，不应合并成一个含糊的“N”。

最接近的 baseline 包括 majority voting、作为 discriminative outcome reward model 的 Qwen2.5-Math-RM-72B、逐点 QwQ GenRM，以及 PairJudge-RM 一类两两淘汰赛方法。GenSelect 把比较接口从单候选或双候选打分改成联合 N 路生成式推理；它复用了 prompting、解答摘要、淘汰赛与多数聚合，并未引入新的 base model 或 verifier training objective。相关的 OpenMathReasoning split 展示了这种接口的训练数据序列化，但其构建早于且不同于论文中未发布的评测候选池。
