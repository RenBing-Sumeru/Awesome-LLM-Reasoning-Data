论文给出三类应当分开理解的证据。

- **Formalizer 证据。** 在 300 道 OmniMath 题上，Goedel-Formalizer-V2 有 228 道通过，Kimina-Autoformalizer 为 161 道。通过论文中的检查支持 formalizer 对比，但没有量化整个合成陈述池的语义错误率。
- **修正证据。** 在 MiniF2F pass@32 上，32B 模型由标准模式的 88.1% 提升到自我修正模式的 90.4%，8B 模型由 84.6% 提升到 86.7%。去掉具体编译错误会明显降低修正效果，去掉此前 CoT 也会造成较小下降。这说明反馈在系统中有用，但不能证明每条修正轨迹都包含有意义的数学信息。
- **训练与多样性证据。** RL 提高 pass@1，而 checkpoint averaging 可以恢复训练后期下降的 pass@N 多样性。不同 averaging 系数与 RL checkpoint 在 pass@1 和 pass@N 之间存在权衡，因此最终模型效果不能只归因于数据。
- **工件证据。** 官方仓库包含推理/自我修正脚本、Lean 编译器封装、mathlib4 子模块和 benchmark JSONL；官方 8B/32B Hugging Face 模型页可用。MathOlympiadBench 以 Apache-2.0 标签发布 360 行，包含形式化陈述、非形式化前缀、证明代码或 solved 字段、来源标识和类别。

基准结果说明在所报告预算下端到端流程有效，但不能为未发布的 S1/S2/S3 逐条背书，也不能证明自动形式化忠实，或替代数据谱系与去污染审计。

