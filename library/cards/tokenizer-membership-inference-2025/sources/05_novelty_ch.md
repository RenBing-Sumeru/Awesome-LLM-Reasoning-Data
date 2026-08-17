以往 LLM MIA 通常检查模型 loss、概率或生成输出，其评测会继承标签不确定、时间分布漂移，以及可负担测试模型与封闭大模型不匹配的问题。

本文把可观测对象改为 tokenizer 词表和 BPE merge 过程，提出基于 shadow 的 Vocabulary Overlap 与单 shadow 的 Frequency Estimation，并测量防御下隐私—压缩率权衡。MIA、shadow 训练、BPE 和阈值分类都不是新的；创新是 tokenizer 专用、可复现的攻击面。复用前须核实 tokenizer 训练数据能代表目标 LLM 语料。

还应报告词表大小、辅助数据来源和目标 tokenizer 实现，因为它们都会改变信号及其解释。

它把污染审计前移到预处理组件，尤其适合封闭模型无法提供概率接口的情形。

这也使审计成本更易与常规 tokenizer 训练预算对齐。
