长度控制只修正一个显眼混杂因素。它不能证明 judge 真正理解事实性、安全性、推理深度、任务意图或领域正确性，也不能消除风格偏好、位置敏感、训练数据重叠、模型家族偏好等其他 judge bias。

这个指标是聚合的 leaderboard 指标。高 LC win rate 不是某条回答正确的证书，低分也不能证明模型绝对不会解某类任务。结果会随 API 模型版本、prompt 模板、参考回答、cached annotations、evaluator config 和公开 benchmark 污染而漂移。官方仓库代码是 Apache-2.0，README 标注数据为 CC BY-NC 4.0，因此下游再分发和商业复用需要单独核验许可。
