安全复用等级是 **可用于 evaluation 和 audit reference，模型/inference artifact 可用；training-data reuse 被阻断**。研究者可以使用已发布权重、prompt template、inference/search script、部分竞赛输入和部分 prediction，在公开配置下研究模型行为；这些 artifact 不能复现论文中的 GRPO/RFT 训练，也不能重建 verifier 数据集。

对于数据构造，论文给出有用的概念 schema：保留问题与自然语言证明、专家三级分数、verifier analysis、专家 meta-score、generator self-analysis、自评分、采样 verifier 集、采样 meta-assessment、有效缺陷投票、选定标签、routing decision、reward value、模型/checkpoint 版本和 lineage。稳健重建还应保留被提出与遗漏的缺陷、拒绝证明、分歧和转人工样例，而不是只保留正标签。

对于 verifier 研究，可据此设计四类独立审计：scalar-score accuracy、针对 false rigor 的 issue-level precision、针对漏报的 issue-level recall，以及相对独立专家或形式化子集的 calibration。在适用时应加入不同模型家族 verifier 或 formal checker，使多采样一致性不只是同一模型 lineage 的重复证据。如果研究目标包含惩罚遗漏缺陷，还应修改 Appendix A.3 的规则。

对于 test-time compute，已披露的 8-sample one-shot、32-thread sequential 和 64-by-64 high-compute protocol 可用于预算匹配的 ablation，分别考察 generation count、verification count、refinement round、self-selection 和 external selection。有形式化版本时，结果应分别报告 learned-verifier score、专家判断和 formal-checker outcome。

本论文也是前沿报告的强审计清单：应要求披露 `n/m/k`、数据集数量、专家 agreement、自动标签错误率、竞赛排除、来源权利、GRPO/RFT 代码、reward log、失败记录和 checkpoint lineage。在这些信息发布前，适当用途是方法比较、verifier failure analysis 和 evaluation reproduction，而不是训练语料再分发或形式证明有效性主张。
