FoVer 把反馈契约从人工判断或采样式 outcome 判断迁移到形式工具对单个步骤的接受结果。它先约束 LLM 输出与 verifier 兼容的形式解答，再改造原本面向整题解答的工具，使每个目标推理步骤能够被独立检查。

| 契约要素 | 形式逻辑分支 | 形式证明分支 |
|---|---|---|
| Prompt 来源 | symbolic FLDx2 entailment 案例，排除含 `assump` 的证明 | GSM8K、MetaMathQA 中源自 GSM8K 的案例，以及 Big-Math 文字题 |
| 轨迹作者 | Llama 3.1 8B 与 Qwen 2.5 7B | Qwen 2.5 7B 同时负责 statement 转换与 proof 生成 |
| 环境 | 通过 FLDx2 checker 与 FoVer wrapper 调用 Z3 | 通过逐步骤 wrapper 调用 Isabelle/HOL |
| 接收单元 | 只使用允许前提与先前结果的一次逻辑推理 | 生成 theorem 环境中的一条 Isabelle proof command |
| 监督 | 与有序步骤对齐的二元标签 | 与有序步骤对齐的二元标签 |

对 Isabelle 分支，系统先把所有生成的证明步骤替换为 `sorry`，检查 statement 与 proof 的语法；生成标签时恢复目标步骤，其他步骤继续使用 `sorry`，因此 Isabelle 检查的是“假定周边步骤成立”条件下的局部有效性。对 Z3 分支，每条推理被规范化为独立的 satisfiability 或 validity 查询。

训练后的 PRM 为每个步骤输出 `correct` 或 `incorrect`。推理时，这两个 token 的归一化 logits 构成步骤 reward；Best-of-K 用候选解答所有步骤分数的最小值作为解答分数，再选择最高者。因此，形式工具输出是训练反馈，学习后的 PRM 则是可复用的近似 judge。
