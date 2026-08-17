Predicate induction 带有状态。Algorithm 1 把验证后的定义存入共享 buffer，在不同题目之间复用名称，按需展开定义，并提升高频 predicates。因此单条生成记录可能依赖不断变化的 library，但公开发布没有记录 buffer 版本或构造顺序。

程序生成显式考虑答案类型：prompt 枚举数字、分数、方程、表达式、区间、解集、向量、矩阵、三角函数值、格式化数字、单位等结构化形式。论文在 MATH-500 上报告：完整的两阶段 predicate-and-type 系统 verified accuracy 为 68.2%，取消 predicate guidance 的单阶段生成是 41.6%，两阶段系统去掉 answer-type list 后是 26.3%。

对 GRPO，论文把程序级 reward 定义为：答案正确且结构干净给 2.0；正确但有 singleton-predicate penalty 给 1.9；答案错误但调用全部建议 predicates 给 0.5；其余给 0。固定版本的公开训练脚本使用 Qwen2.5-3B-Instruct、rank-32 LoRA、4-bit 加载、每题六次生成、device batch 6、八步累积、3e-6 learning rate 和 20 epochs。实现中的 partial credit 只要求检测到任意一个建议 predicate，比论文的“全部 predicates”条件更弱。

公开的 6,093 行 split 只有 `instruction`、`input`、`output`、`domain`、`answer` 和 `predicates`。源 CoT、MATH ID、生成器、重试序号、执行日志、解析结果、verifier 分量、reward、拒绝历史和恢复谱系都不是逐行字段。
