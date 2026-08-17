WONDA 研究的是：为什么用“形式上正确”的 solver 输出训练一次性 invariant generator，模型在困难 C 程序上仍不能稳定帮助 verifier。ICML 2026 论文及 arXiv v2 把问题定位到训练目标本身：UAutomizer 输出的归纳不变量可能长达数千字符，枚举大量 case，夹带类型转换与冗余布尔结构，并编码某一种 solver 特有证明，而不是模型更应学习的简洁程序关系。因此，直接使用这些目标可以保留正确性，却降低教学价值。

论文的数据对象不是自由形式 chain of thought。来源记录包含 C 验证查询、目标循环位置、UAutomizer baseline 判定与运行时间，以及一个或多个原始不变量；curated 记录再加入规范化形式、可选的 Kimi K2 Thinking 简化结果及 rationale、最终 target invariant、彼此独立的正确性与充分性判定、verifier 时间、加速标签/倍数和四级质量分。SFT 序列化器把它变成带 marker 的 C 程序和单个 JSON 目标：`{"marker": ..., "content": ...}`。

该工作属于 Data Construction and Open Release Recipes，因为核心贡献是可重建的变换与选择契约：规范化、生成语义替代、形式化分级，再把合格目标序列化用于 SFT。它也邻近 programmatically verifiable outcome data，但 canonical category 保持为构造 track。论文没有提供 process-supervision 标签，也没有开展 RLVR 实验，更没有证明模型的隐藏推理过程正确。

其 L4 证据边界较清楚：论文 v2 与附录给出质量函数、prompt、数据量、SFT 设置、评测指标、硬件和 UAutomizer 版本；官方仓库与 Hugging Face collection 发布代码、raw/curated/evaluation 表及模型。仍未解决的是 item-level 来源许可、按程序分组的 split、语义去污染、与论文完全匹配的 tagged code release，以及独立复现。
