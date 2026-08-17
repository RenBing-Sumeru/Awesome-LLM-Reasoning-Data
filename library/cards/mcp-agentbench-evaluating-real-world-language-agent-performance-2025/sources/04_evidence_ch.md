基准共有 600 个 unique query，在单／多 server 与单次／并行／顺序调用交叉形成的六类中各 100 个。论文使用官方 API 评测十个 model family，主要设置为 ReAct，兼容时再测 native tool calling。部分 identifier 带日期，例如 `gpt-4o-2024-11-20`、`deepseek-v3-0324`、`deepseek-r1-0528` 和 `qwen3-235b-a22b-thinking-2507`；另一些 provider version 与 request manifest 未固定。因此，结果应视为论文时期的 API measurement，而不是模型的永久属性。

Table 1 中，Qwen3-235B-A22B 的 ReAct 平均 Pass Rate 最高，为 64.7%；Kimi K2 的 native tool-calling 平均值最高，为 61.0%。scaffold 选择会显著改变结果：Qwen3-235B-A22B 从 ReAct 的 64.7% 降至 native tool calling 的 40.2%。作者把许多 TC failure 归因于没有发出 tool call 和过早终止。这说明 prompt/tool wrapper 是被测契约的一部分，但不能证明某种 scaffold 会产生质量更高、可复用的 trajectory。

judge calibration 使用 60 条 Claude 3.7 Sonnet output，每类 10 条，由三位专家标注。MCP-Eval 与专家 majority 的 agreement 为 91.67%，Cohen's kappa 为 0.734；专家间 Fleiss' kappa 为 0.671，三人 unanimous agreement 为 86.67%。等价地说，MCP-Eval 在该小样本的 8.33% case 上与 human majority 不一致。这些都是作者报告的校准结果，不是独立的 adversarial false-positive/false-negative audit。

定性 error analysis 包括 query misinterpretation、拒绝使用工具、遗漏关键信息和 hallucination。官方来源没有链接逐类数量、原始 600 条任务表、完整 evaluated episode 或逐题 judge output，因此读者无法把这些 failure 独立关联到 server selection、call、observation、retry、termination 与 verdict。

现有证据只能支持较窄的结论：MCP-AgentBench 能在 answer-level judge 契约下区分论文时期的 agent/scaffold 配置。它不能证明 executable replay、trajectory label quality、training value、license coverage、security robustness 或对 33 个无状态文本 server 之外环境的泛化。
