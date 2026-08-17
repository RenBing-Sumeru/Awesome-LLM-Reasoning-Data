TokenSqueeze 把模型自身 rollout 转为对长度敏感的 preference supervision。对 N 次采样，它计算经最终答案比较判为正确的比例 p，设 \`q = alpha*(1-p)\`，将 c 条正确轨迹按 token 长度排序后选前 \`ceil(q*c)\` 条。较容易提示偏向更短正例，较难提示可保留更多深度。每个被选正例与一条更长错误响应配对，每题最多 64 对（论文 §3.1）。

逐步改写时，轨迹 \`(prompt, s1, ..., sN)\` 在此前上下文条件下为每一步生成 64 个 rewrite。选择器保留最短、且原步骤和改写步骤之后*未来 continuation 分布*的估计散度低于 epsilon 的候选。公开近似只用一条采样 continuation 和 512-token window；它是局部分布代理，不是逻辑有效性证明（论文 §3.2；附录 B）。

数据契约为：数学提示/参考答案 -> 带标签的采样响应 -> equality outcome/length -> chosen correct 加 longer incorrect pair -> 可选 rewritten chosen trace/KL -> 长度感知 DPO 加 SFT。反馈能观察答案一致性、候选长度和局部分布变化；不能观察证明有效性、faithfulness、捷径或污染。

最接近的背景是 shortest-correct self-training。*Self-Training Elicits Concise Reasoning* 每题选一条最短 parser-correct rollout 做 SFT；TokenSqueeze 则选随难度变化的正例集合，使用更长错误 rejection，以 KL gate 逐步改写，并加入长度感知 DPO。
