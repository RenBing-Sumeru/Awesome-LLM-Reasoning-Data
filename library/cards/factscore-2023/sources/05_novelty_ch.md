先前 baseline 多是 answer-level 或粗粒度 claim-level factuality evaluation。这类指标容易遮蔽长回答的混合质量，因为一个段落内部可能包含许多可独立检查的事实。FActScore 把评测单位改成 atomic facts，并把 factual precision 定义为 supported claims 的比例。

新的信号来自明确的数据对象和反馈契约：long response -> atomic facts -> retrieved/source evidence -> support labels -> aggregate precision。检索式验证和 claim label 本身并不新；新意在于把它们打包成可复用的长文本事实性协议，并提供人工标注、自动 estimator、已发布模型输出、Python package 和自定义知识源支持。

复用前要检查 atomic facts 是否过细或过粗，unsupported 标签是否来自 retrieval miss 而非事实错误，知识源对目标领域是否完整，abstention 是否一致计入，长度惩罚是否适合任务，以及 automatic judge 是否已经相对论文报告版本发生漂移。
