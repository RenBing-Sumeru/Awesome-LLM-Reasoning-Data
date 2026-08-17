1. **精确逻辑 RLVR：** 把模型 hypothesis 解析为规则，分别计算 derivation、conservativity 和 minimality reward；先报告三项分数，再决定是否合成二值成功，便于诊断 reward hacking。

2. **偏好数据：** 对同一题生成多个候选，用 solver 排出合法最小解、可解释但不保守解和无法推出 observation 的错误解，构造高质量 chosen/rejected 或 rubric 标签。

3. **鲁棒评测：** 对四种渲染使用相同逻辑实例，报告 worst-case accuracy 和 prompt 方差。若任务需要真实世界因果、开放文本解释或不可形式化创造力，DeFAb 的闭世界规则 verifier 不能直接替代人类判断。
