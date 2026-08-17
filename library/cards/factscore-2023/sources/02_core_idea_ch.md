核心贡献是一个 metric 与评测协议：把长回答拆成 atomic facts，判断每条 fact 是否被可靠知识源支持，再把 supported fact 的比例报告为 FActScore。它把事实性评测从整段回答 pass/fail 改成 claim-level precision accounting。

机制上分两层。Human FActScore 由标注者识别 atomic facts，并根据知识源判断支持关系。Automatic FActScore 用 atomic-fact generator、知识源检索和 support judge 近似这个流程。官方实现暴露 estimator 选择、长度惩罚参数、abstain detection hook、cache/data 目录，以及自定义知识源注册接口。

相近工作包括 FEVER 式 claim verification、QAGS 类 factuality metric、摘要事实性评测和后续 grounding benchmark。区别在于，FActScore 把长回答内部的 atomic fact 定义为行级反馈对象，而最终 scalar score 只是聚合结果，不等于证据本身。
