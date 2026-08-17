**输入与 checkpoint 操作。** benchmark prompt 通过 system template 渲染；对复杂题它要求 `## Step` 格式。policy 检测到分隔符后，以已有前缀在 `So, the answer is ` 后解码一个 checkpoint 答案，记录它，再回滚状态。主实验使用 Llama-3.2-1B-Instruct；附录 B.3 还测试 Qwen3-0.6B。论文没有披露代码、seed、parser 规则、stop token 或保存状态的持久化序列化。（论文 §3.1、§4.1、附录 A.3。）

**搜索与 reward。** 首步采样 N 条路径；后续每步由 M 条存活路径各采样 N/M 个子路径。对每条当前路径得到 checkpoint 答案和 PRM 分数。相等答案形成一个簇；簇分数是成员路径分数之和。按该和排序簇，从每簇的最高路径轮转选择，直到保留 M 条路径，再继续。主实验的路径分数是最后一个推理步骤的分数。DeepSeek 的 Llama3.1-8B-PRM-Deepseek-Data 取输出 `+` 的概率；Skywork-o1-Open-PRM-Qwen-2.5-7B 取最后 token 的 0–1 value-head 分数。（论文 §3.2、§4.1、附录 A.4。）

**候选扩展与预算。** 对每个 checkpoint，CCA 构造 `前缀 + cue + checkpoint 答案`，与完成路径一同交给 PRM 打分，返回最高分。采样使用 temperature 0.8、top-p 0.9、N∈{16, 32, 64, 128}；选择器方法 M=4。早停在 checkpoint 分数超过 tau 时停止；tau=1 表示不早停。这是 training-free 的测试时方法。复现需要精确的 policy/PRM revision、prompt/normalization 规则、PRM 格式、checkpoint、分数、聚类决策、benchmark ID、硬件和运行时，而不能只依赖论文超参数。
