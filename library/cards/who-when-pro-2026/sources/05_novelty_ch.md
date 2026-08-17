最接近的 baseline 是从自然失败或合成破坏的智能体轨迹中进行失败归因。Who&When 使用 184 条纯文本轨迹和专家标签；MAST、TRAIL、AgentErrorBench、AEGIS、AgenTracer 与 AgentRx 扩展了规模、taxonomy 或归因方法，但在 Table 1 中都仍是 text-only。AEGIS 报告 9,533 条注入失败，而 Who&When Pro 报告 12,326 条，覆盖文本、图像、视频以及单智能体和多智能体 topology。

本文真正改变的是 replay discipline。在基于 reroll 的注入中，随机行为可能在预定错误步骤前就发生漂移，因此注入位置未必是相对成功运行的最早差异。Who&When Pro 重建成功前缀，在自适应错误 prompt 下由原 base agent 生成并替换恰好一个 action，且只有当任务 evaluator 把结果翻转为失败时才保留 episode。这把对照成功 anchor、环境 replay、受控干预、终局 outcome 和 agent/step/mode 标签接入同一个构造契约。

各组成部分本身并非都由本文首次提出。公开基准任务、ReAct 与多智能体框架、工具 cache、浏览器 replay、LLM 生成错误 prompt、失败 taxonomy、官方任务 evaluator、LLM 归因 prompt，以及 exact/macro-F1 指标都早于本文。贡献在于以多模态规模组合这些组件，并试图把标签 provenance 从“某模型认为这一步失败”增强为“相对成功执行，这是第一个被故意改变的步骤”。但它仍是受控合成因果，而不是对自然因果必要性的证明。

这对 reasoning data 的意义，是在粗粒度终局失败和自由文本 critique 之间引入一个中间反馈面。未来若记录公开，可以用于归因评测、失败条件检索、数据过滤或监督诊断。复用前必须核验成功 seed 链接、注入 action、任务 evaluator、replay 状态、被拒绝尝试、人工修正、来源任务重叠和权利。缺少这些对象时，只能把创新点作为 recipe 与审计对象研究，不能当作开放训练语料。
