DROP 的一句话贡献是：构造一个众包阅读理解 benchmark，让大量问题必须解析段落指代并做加法、计数、比较或排序等离散操作。核心机制是在段落上做对抗式问题编写，并允许答案不是简单 span，而是可用广义 EM/F1 评分的数字、日期或文本组合。

相对 SQuAD 式抽取 QA，DROP 把评测对象从“找到局部答案 span”改成“从段落多个事实推出答案”。反馈契约仍是答案匹配而不是证明检查：预测在归一化字符串、数字或日期组件上与 gold answer set 匹配才算成功。方向标签是 answer-level discrete textual reasoning benchmark。
