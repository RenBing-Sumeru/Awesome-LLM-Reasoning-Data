一句话概括其贡献：让同一个 policy 生成可执行 Python 任务，用该 policy 的八次求解尝试估计每个任务的 learnability，再依靠 terminal programmatic reward 同时更新 proposer 与 solver，而不使用外部 RL-stage 任务答案语料。

| 契约要素 | AZR 对象或信号 |
|---|---|
| Curriculum state | 持续增长的 deduction、abduction 与 induction buffer，由 identity triplet 和 base-model-generated seeds 初始化 |
| Proposal context | deduction/abduction 使用均匀采样的六个历史 triplet；induction 使用一个 buffer 中的 program |
| Proposed task | 确定性的 Python program/input/output triplet；induction 另含十组 I/O 与一条自由文本 message |
| Proposal validation | 成功解析与执行、返回值、未命中禁用模块/关键词，并在两次执行中产生相同 output |
| Proposer feedback | 用当前 policy 的八次 solver 尝试估计成功率；零成功时 learnability 为 `0`，否则为 `1 - success_rate` |
| Solver feedback | deduction 检查 Python type/value equality；abduction 执行预测输入；induction 要求合成程序通过全部五组 hidden I/O |
| Reward granularity | 只在 response 最后 token 附着一个 terminal scalar；格式正确但答案错误为 `-0.5`，格式失败为 `-1` |
| Training use | 通过六个 task-role group 上的 Task-Relative REINFORCE++ 进行 RLVR |

executor 同时充当 environment 与 verifier。它能够观察 parse 成功、exception/timeout、返回值、两次运行的可重复性、Python equality 和 hidden-test functional behavior；它不能证明语义新颖性、安全性、没有隐藏状态、稳健确定性，也不能证明预期推理真正导致了答案。没有 learned reward model 或 LLM judge 检查 reasoning trace，因此反馈属于 answer-/episode-level，而非 process supervision。

该方法代表 autotelic curriculum construction：任务分布与 solver 能力共同演化，当前 policy 同时提供交互两侧。相较依赖固定外部任务集或更强模型 solution trace 的 pipeline，AZR 在 RL 阶段移除了这种输入，改由可执行任务生成推动训练。它并未移除上游预训练、人工 scaffold 设计或 privileged executor feedback，也没有把所得在线 episode stream 作为数据集发布。

在 Atlas 中，最近的对照包括 AlphaMath 的 almost-zero-data self-training、GENIUS 风格 unsupervised self-training，以及 self-play/critic recipe。AZR 的区别性接口是三类程序任务生成与共享 executable verifier 上的 role-relative RL；对相邻工作的具体差异仍应回到各自 primary source 核验，不能仅凭标题推断。
