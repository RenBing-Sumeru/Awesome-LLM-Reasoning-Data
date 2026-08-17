Thought Anchors 把句子条件化的 **continuation distribution** 设为 trace attribution 的主要单元。早期 forced-answer 方法会中断 trace，再询问此时能否已经生成答案；本文的比较则允许后续推理在保留或移除当前句子的条件下继续展开。因此，即使某个早期规划位置还不能输出正确最终答案，该规划决定仍可以表现出重要性。

该方法还把普通 resampling importance 与明确的 counterfactual subset 分开。它不把每个替代都视为有意义的干预，而是仅保留 all-MiniLM-L6-v2 cosine similarity 低于 0.8 的替代句。这是一个具体且可审计的语义 filter，但 embedding model 与固定 threshold 仍只是近似，并不能保证因果意义上的语义差异。

在 artifact 层面，发布的价值在于保留了分数之下的 substrate。用户可以检查 base solution、句子边界、continuation arrays、抽取答案、正确性、句子功能标签、直接依赖与多种 importance statistics。正确和错误 base trace 以及错误答案 outcome 共存。因此，该 corpus 可以用于研究 trace 在何处改变方向，而不仅是依据论文标量给句子排序。

本工作连接了三个分析层：black-box continuation distribution、receiver-head attention pattern，以及 attention-suppression sentence graph。它们之间的部分一致具有科学区分度，但仍应作为不同证据通道处理。receiver attention 本身不是因果证明；resampling 成本高且对 replacement distribution 敏感；masking 可能产生分布外输入。其新意是协调的方法工具集与公开的干预数据，而不是已经解决的推理因果理论。

这也不是 tree search 或 best-of-\(N\) 数据选择方法。keep/remove bank 的采样目标是估计影响，而不是搜索最高 reward 答案；论文没有训练 policy、reward model、process reward model 或 RLVR agent。论文报告的用途是 evaluation 与 audit。把发布描述为可直接用于 SFT、preference learning 或强化学习的数据，会把已证实用途扩展到证据之外。

出版与发布状态也必须保持边界。论文是提交到 ICLR 2026、页面显示 under review 的 arXiv preprint；尚未核验 acceptance decision。代码、dataset 与 project page 均为官方公开 artifact，但发布缺少 semantic version、完整 count manifest、record-level generator lineage 与 decontamination report。因此，开放性提升了可检查性，却不等于 artifact 已经 audit-complete。
