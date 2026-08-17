MathHay 可作为长上下文数学评测的设计样式：把相关文档检索、数值 grounding、计算步骤和位置鲁棒性分开记录。

复用字段应包括 topic、subtopic、源文档日期、相关文档 id、无关文档 id、上下文长度、文档位置、任务类型、问题、Python 解法、最终数值答案、模型输出，以及 verified/unverified 状态。

在 atlas 中，它是 benchmark card 与类似环境的检索任务之间的桥。它可以启发长上下文审计清单，但任何训练或 reward 用途都需要更强的 artifact、许可证和语义验证审计。
