训练问题来自 HotpotQA 与 2WikiMultihopQA。主 rollout 记录有序的推理、搜索、结果观察段和终局答案。每轮搜索后，OASES 抽取当时可用的信息状态，要求同一模型只基于该状态回答原问题，再用 EM/F1 对照参考答案评分。相邻状态分数差分配给触发该变化的搜索段，终局结果分数分配给最终答案；检索结果 token 不参与 policy loss。每条评估 rollout 接收自己的状态答案终局分数。搜索与评估记录合并后计算 return 和 GAE advantage，再通过 PPO 更新共享 actor/critic，并加入格式惩罚。

默认模型为 Qwen2.5-7B-Instruct，实现基于 verl，检索使用 E5 与 Wikipedia。评测覆盖 NQ、HotpotQA、2WikiMultihopQA、Bamboogle 与 MuSiQue。论文报告每题一条主 rollout，加上数量随前缀变化的评估 rollout，且训练后期评估开销下降。本卡没有确认作者官方代码或数据链接。数据集版本、Wikipedia 快照/索引、检索 cache、采样参数、完整搜索/评估 buffer、格式拒绝记录、随机种子和逐记录奖励账本仍为 unknown。
