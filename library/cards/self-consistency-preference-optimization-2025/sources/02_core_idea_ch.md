在 iteration t，当前模型为每个问题采样 k 个回答。vote function 提取最终答案并统计答案精确一致次数。最高频答案簇提供 chosen 回答，最低频答案簇提供 rejected 回答；只有 chosen 票数达到阈值 tau 时才保留该偏好对。当同一答案对应多个回答时，从该簇随机抽取一个回答。偏好对权重 w 等于 chosen 与 rejected 的票差除以 k。

训练目标把相对当前模型作为 reference 的加权 DPO，与 chosen 回答上的加权 NLL 项结合。训练后的模型再生成下一 iteration 的偏好数据。SCPO 还提示 Llama-3 Instruct 8B 生成新问题；若生成问题没有得到足够一致支持的答案，就由一致性过滤器移除。半监督变体使用 gold-correct 与 gold-incorrect 回答构造权重为一的偏好对，无标签条目仍使用一致性规则。

相对只在推理时使用 self-consistency，SCPO 把 rollout 计数转为持久偏好样本，并把投票分布蒸馏进单次采样模型。相对 reward-model 自训练或 LMSI，它用答案频次代替外部标量 judge，并优化加权 preference 与 NLL，而不是只用 NLL。它直接属于 Rollout, Search, and Test-Time Trace Data，因为重复采样、答案分组、拒绝回答和票差共同定义训练对象。
