初始 evaluation 证明的是 collaboration problem，而不是 data quality。报告的 model/task combinations 中，agents 即使错误也经常同意：agreement rates 为 74.3%–99.3%，assertive turns 平均只有 0.2%–5.5%。多个模型在 collaborative mode 下比 single-agent chain-of-thought 更差，说明额外 dialogue 与 compute 不会自动改进 reasoning。

Self-training 后，论文报告 Collaborative Reasoner models 持续优于同一 base 的 fine-tuned chain-of-thought variants，最高达到 **16.7 percentage points absolute** 的增益。Human evaluation 使用 100 对 MMLU-Pro conversations，每对由三名 annotators 评审，结果显示训练后 disagreement 更有效、conversation 更自然。这些是论文设置下的 system-level results，不能证明每个 accepted turn 都是好的 collaborative move，也不能让未公开数据被独立审计。

Construction evidence 对 accepted scale 的披露很具体。Table 9 报告：

| Model | MBPP-CR | MATH | MMLU-Pro | ExploreToM | Total accepted turns |
|---|---:|---:|---:|---:|---:|
| Llama-3.1-8B | 33.8K | 85.1K | 160.6K | 100.1K | **379.6K** |
| Llama-3.1-70B | 33.3K | 88.5K | 99.8K | 89.7K | **311.3K** |

这些 totals 描述的是保留用于训练的 turns，不是 released examples。没有对应 public conversation 或 SFT/DPO files，Qwen-2.5-7B-Instruct 与 Ministral-8B-Instruct 的 counts 也未披露。

Appendix A 为反馈边界提供了最直接证据。Long reasoning responses 与 lengthy contexts 会导致 belief extraction 失败。Binary correctness 还会把推动 solution 但没有给出 final correct answer 的 turn 标成 negative。因此，只有在 judge 正确抽取 intended belief 后，gold match 才可靠；最终 label 衡量的是 answer disclosure，而不是 conversation 的 procedural quality。

Agreement correctness 比 agreement 更严格：两个 agents 可能在相同错误 belief 上停止。跟踪 gold 可在 evaluation 中发现这一点，但按 agreement 停止仍会提前终止 interaction。论文还观察到 over-agreement、excessive politeness 与 verbosity 持续存在；报告的 training filter 并不直接优化这些 social metrics。

官方 supplemental 与 single-commit repository 提供的是 code evidence，不是 data release。它们含 generation、belief extraction、evaluation、filtering、DPO/SFT 与 Matrix 代码，却没有 conversation corpus、selected rows、reject population、checkpoints 或 logs。因此 benchmark result 不能证明 conversation provenance、label accuracy、release completeness 或 reusability。
