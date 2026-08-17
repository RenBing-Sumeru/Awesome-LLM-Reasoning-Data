核心贡献是在 AlpacaEval 式自动评测上加一个简单的长度控制层。旧的报告方式主要看模型相对基线的 raw win rate；这篇论文把 auto-annotator 的偏好建模为包含输出长度差的函数，然后把长度差设为 0，估计“同等长度下”的胜率。

数据对象仍然是 AlpacaEval 的成对比较记录：instruction、两个模型回答、生成器身份、随机化顺序、auto-annotator 偏好或偏好概率，以及对应指标。反馈契约不是确定性答案键，而是 LLM-as-judge 偏好加统计去偏。最近的对比对象包括原始 AlpacaEval、AlpacaFarm/Aviary 式自动偏好模拟器、MT-Bench 和 Chatbot Arena。方向标签是 automatic-evaluator debiasing：保留廉价、可扩展的自动 judge，同时在把分数当作模型质量之前审计并削弱一个已知混杂因素。
