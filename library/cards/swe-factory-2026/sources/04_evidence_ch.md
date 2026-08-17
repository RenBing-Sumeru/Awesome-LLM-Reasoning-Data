在 671 个任务的 benchmark 上，accepted paper 报告 GPT-4.1 mini 产生 435 个 output，其中 337 个环境通过 fail-to-pass，单 issue 成本 $0.047、耗时 26.3 分钟。Kimi-K2 产生 424 个 output、321 个有效环境，成本 $0.056、耗时 30.2 分钟；DeepSeek-V3 产生 358 个 output、282 个有效环境，成本 $0.037、耗时 23.0 分钟。这些是报告配置下的构建产率与成本结果，不是逐条 release verification。

两组消融说明关键组件的作用。在 44 个包含 binary test resource 的任务上，禁用 binary-file downloading 后，三个 Builder model 的 fail-to-pass 数量都降为零。移除 execution feedback 后，有效数量分别降至 GPT-4.1 mini 的 2/671、Kimi-K2 的 18/671 与 DeepSeek-V3 的 5/671。证据支持 binary recovery 与 execution feedback 在本 benchmark 中的作用，但没有单独隔离每个代理角色，也不能保证迁移到其他语言与 build system。

Exit-code parser 在 1,217 个构建实例上评估，其中 1,201 个提供可用 before/after log pair。人工检查得到 TP=923、FP=0、TN=262、FN=16，即 precision 1.00、recall 0.983、F1 0.991。四个 false negative 来自 marker identifier typo，另 12 个来自 `set -e` 提前终止。这是较强的 parser 证据，但 annotation 与更正后的 record ID 未公开，而且 nonzero-before 仍存在 error-to-pass 风险。

模型实验报告五个 SFT model 都有提升。Qwen2.5-Coder-14B-Instruct 在 SWE-bench Verified 上的 resolve rate 从 5.8% 升至 21.0%。该结果说明报告的 task/trajectory/SFT 组合可能有用，但不能证明 2,809 条 trajectory 全部成功、链接正确、无污染、可复现或可合法复用。
