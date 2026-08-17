一句话贡献是：直接从 Qwen2.5 Base 运行带 critic 的标准 PPO，为每个采样推理 prompt 生成 64 条响应，用程序化二元答案奖励训练，并在不经过 SFT warm start 的情况下把同一配方扩展到 0.5B–32B。

| 契约要素 | 公开 prompt 对象 | 在线训练对象 |
|---|---|---|
| 输入 | `human.value` 问题 | 套入具名 `think` 与 `answer` section 的 prompt |
| 参考 | `assistant.ground_truth.value` | 供检查器使用，不作为目标文本展示给 policy |
| 行为 | 未发布 | 完整采样响应 token 轨迹 |
| verifier 观察 | 未发布 | 解析出的 boxed answer 与归一化数学比较 |
| reward | 未发布 | 终局 Boolean 正确性映射为 1 或 0；中间奖励为零 |
| value 反馈 | 未发布 | 每个响应 token 状态上的独立 critic 预测 \(V(s_t)\) |
| advantage | 未发布 | 因 \(\gamma=\lambda=1\)，为 \(R-V(s_t)\)，随后做 batch normalization |
| 分组 | 三个具名 prompt 文件 | 每题 64 条响应；每次生成迭代采样 128 个唯一 prompt |
| 失败 | 未发布 | 训练中会出现错误、无法解析、截断、重复及其他失败响应 |

反馈契约是 answer-level、程序化、终局式的，不标注中间推理步骤是否正确。论文称提取 answer span，并在与参考“exact match”时奖励 1。公开实现更具体：它要求具名 `answer` section 内存在 `\boxed{...}`，用 `solution2answer` 归一化候选与参考，再通过 `is_equal` 检查数学等价。这一差异会影响解析失败、等价形式接受范围和 reward hacking 审计。

learned critic 提供 trajectory-value 估计，而不是过程正确性标签。当 \(\gamma=\lambda=1\) 时，每个 token 的 return 都是同一个终局结果，advantage 再减去 critic 当前 value 预测。critic 可以降低重复前缀的估值，但这不等于验证推理逻辑。

公开 prompt 语料服务于 ORZ 的 RLVR 配方；本 Card 不把它归类为 SFT 数据，主要方法也不是蒸馏。单独的 14B transfer 实验从蒸馏 checkpoint 开始，但不会改变核心 Reasoner-Zero 对象。
