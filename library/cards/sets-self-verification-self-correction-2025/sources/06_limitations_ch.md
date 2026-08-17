Self-verification 与 self-correction 由同一模型产生，错误可能相关并被强化。把“未出现指定错误短语”视为正确的规则对措辞、格式、语言和 API 模型变化都很脆弱。False positive 会过早停止修正；false negative 会浪费预算，甚至破坏原本正确的答案。Exact-match voting 可能拆分语义等价的自由文本答案，随机平局处理也引入方差。

报告中的 compute-optimal curve 是在每个数据集和模型上评测整个网格后选择 hyperparameter，因此新任务若没有 validation feedback，不能直接得到该前沿。平均输出 token 忽略输入上下文增长与硬件 latency；专有模型版本和服务行为也会漂移。Benchmark 套件答案结构化，不能证明方法适用于开放式判断任务。未确认的发布无法提供全部 prompt 的可执行实现、分支历史、被拒 revision、seed、成本或许可证。因此，报告的准确率提升不能证明轨迹质量或 verifier 校准。
