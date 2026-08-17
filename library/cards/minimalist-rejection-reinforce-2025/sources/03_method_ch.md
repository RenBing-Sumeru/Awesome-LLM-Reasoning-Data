每轮抽取 1,024 道 Numina-Math 题，每题生成四条最多 4,096 token 的响应。Math-Verify 根据 boxed answer 是否匹配赋予 -1 或 +1。RAFT 保留正响应做似然训练，RAFT++ 加入重要性采样和裁剪；Reinforce-Rej 在极简策略梯度更新前删除奖励一致的题组。实验在 Qwen2.5-Math-7B-base 和 Llama-3.2-3B-Instruct 上与 Reinforce、GRPO、PPO 和迭代 DPO 比较。

