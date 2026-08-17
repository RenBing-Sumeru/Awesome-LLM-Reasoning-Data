最强实验证据受已发布训练 recipe 和三个 Qwen3 规模的条件限制。论文 Table 4 报告，SFT 使 BFCL-v3 multi-turn、Tau-Bench 与 ACEBench-Agent 的平均分分别提升 +8.67、+4.29 和 +11.57。对 Qwen3-8B，后续 RL 在 BFCL 与 Tau-Bench 上又分别增加 +4.88 和 +3.46。这些是论文 configuration 下由作者报告的 benchmark delta；本 Card 没有独立重跑训练或评测。

负面结果同样重要：RL 并不改善所有模型与 benchmark 组合。Qwen3-1.7B 在 RL 后的 Tau-Bench 得分略微下降，作者把它归因于小模型对 noisy reward 更敏感。这限定了“更多生成环境或 programmatic outcome check 会自动带来单调增益”的说法。

构造证据同时包含规模与 rejection。266 个合成 environment candidate 中，191 个通过 100-round not-fail selection，75 个被拒，拒绝率为 28.2%。论文把 type/attribute error 与 state-management inconsistency 列为主要 failure class。Table 2 报告每个保留环境平均有 4.58 条 constraint、21.38 个 state category 与 18.58 个 tool。但由于至少 0.85 的 selector 把 warning 与 pass 合并，保留数量不能证明严格 check 的 85% 都通过。

release evidence 已在对象层核验。固定官方 dataset 暴露 191 条 environment row、4,684 条 SFT scenario、2,550 条 RL scenario，以及声称共 9,022 条的 SFT trajectory。SFT scenario 省略 check function，RL scenario 包含 executable checklist function。trajectory revision 中 raw 与 masked schema 不兼容，导致默认 Hugging Face loader/viewer 失败，但单独源文件仍可下载。官方 collection 没有 RL rollout dataset。

论文还让 Claude-4.5-Sonnet 对 tool-program alignment、functional correctness 与 robustness 打分，报告平均值高于 8.5，并称与人工判断一致。这是作者运行的 LLM assessment，不是独立 semantic verifier audit；它不能证明 check-function coverage、没有 false reward、抵抗 reward hacking、代码执行安全或跨版本 replay equivalence。

综合来看，证据支持一个较窄结论：在所述 setup 下，程序合成环境可以提供有用的 SFT 与 outcome-reward training surface。它不证明每条公开 SFT trajectory 都满足终态正确性、生成 verifier 无偏、RL rollout 可公开复现，也不证明 benchmark gain 等同于 data quality 或合法/安全复用。
