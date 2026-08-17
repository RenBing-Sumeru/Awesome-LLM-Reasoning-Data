对指定的 rollout/search/test-time trace 类别，本 Card 只能作为**方法与审计参考**，不能作为安全训练数据复用。它给出具体检查项：rollout 数、最终答案 comparator、随难度变化的 selector、rejection 规则和局部 rewrite 代理。受控复现可在相同源行和 rollout 预算下比较 shortest-correct、fixed-quantile、Q-DYN、no-refinement 与 full-objective。

做构造研究时，应记录 source ID、template、checkpoint/tokenizer revision、全部 completion、抽取答案、comparator 结果、token count、selection rank、排除原因、rewrite candidate、KL estimate 和最终 pair ID；报告核验错误与不同难度的保留率。这样才能将可执行配方变为可审计 rollout dataset，而不是从 benchmark 分数推断质量。

做训练时，保留 SFT-on-positive 与 DPO-L-on-pair 的区别：Table 4 表明纯目标均无法恢复作者报告的权衡。归因给 selection 前，应匹配 context、loss mix、length term、base checkpoint、decoding policy 和评测预算。未记录 overlap 与许可证前，不要复用 AIME/MATH/LiveCodeBench 提示。

训练复用被以下缺失项阻断：生成数据、不可变 manifest、provenance/license、comparator 审计、split 和去污染。公开代码是起始实现，不是论文数据对象的可复现发布。
