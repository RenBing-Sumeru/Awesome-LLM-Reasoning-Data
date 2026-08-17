既有工作的基线并不是“没有自我训练”。STaR-style 方法已经利用自生成解进行 bootstrapping，Self-Rewarding 让模型充当回答级 judge，ScPO 从 self-consistency 构造偏好，步骤级偏好方法会构造局部监督，搜索方法也使用未来模拟或回溯。作者相关的 φ-Decoding 工作还使用 foresight 平衡推理时的 exploration 与 exploitation。Genius 围绕不同的数据边界重新组合这些组件：输入是没有外部 outcome label 的通用查询，同一 policy 的未来 likelihood 为每个局部分支提供 value。（论文 §1、§5、Appendix B.1）

具体变化有三部分。第一，它在每个回答决策位置物化未来 continuation 及其长度归一化 log probability，而不是只判断最终答案。第二，同一个归一化 foresight 分布既驱动下一轮 beam 探索，也驱动 chosen/rejected 轨迹构造。第三，ACO 把估计的 advantage gap 带入优化，而不是假定所有合成偏好同样可信。由此得到的、面向发布的数据对象应是一条保留来源信息的带权轨迹对，而不是只含答案的 rejection-sampling 记录。

哪些部分并非新方法也应明确保留。Beam search、自回归采样、future rollout、DPO 的 policy/reference log-ratio、preference pair 和自我训练都早于 Genius。论文没有引入外部 verifier、新的执行环境、带正确性标签的过程数据集，或经过验证的污染控制方法。其证据是组合与消融层面的主张：在受测模型和数据设置下，foresight sampling 与 advantage-aware weighting 相比具名方法提高了最终 benchmark 平均分。

该工作对推理数据研究的方向意义，是尝试在只有 prompts 和 policy 时制造监督。这使它适合检验 policy-internal proxy 在多大程度上可以替代标签，但也把 generator、search policy 和 evaluator 合并为同一误差来源。复用前，应在带标签审计子集上将 foresight ranking 与独立 verifier 对比，测试分数跨 checkpoint 与长度的校准，保存全部 rejected branch，并修复或解释发布代码的交接问题。缺少这些检查时，扩大规模可能只会放大稳定的代理误差。
