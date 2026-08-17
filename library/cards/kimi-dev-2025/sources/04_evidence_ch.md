开发环境池由论文所述 2,356 个 SWE-Gym、3,846 个 SWE-bench-extra 与 3,671 个 R2E-Gym-Lite 任务组成，共 9,873 个。内部平台基于 Kubernetes，声称支持超过 10,000 个并发 sandbox 和超过 25,000 个 Docker image。这些数字只描述论文系统的规模，并未给出 image identity 或可复现性。

在论文 agent evaluation 条件下，适配模型在 SWE-bench Verified 上报告 48.6% pass@1 与 74.0% pass@10。嵌套数据实验使用 100、200、500、1,000、2,000 和 full trajectory 子集；200 条轨迹的 SFT-prior 点出现退化，而 RL prior 在低 adaptation-token budget 下更有效。这些比较依赖论文所用 shuffle、prompt、checkpoint 与执行配置。

长程分析报告适配后的 RL prior 在 70 turn 之后仍继续提升，而 SFT、mid-trained 与 Base prior 分别约在 70、60、50 turn 进入平台。Kimi-K2 stage annotator 只提供粗粒度行为分析，且 reflection 类别包含 test-writing 行为，因此不能把它当成 ground-truth 因果分解。

Test-time self-play 每个 issue 抽样 40 个候选 patch 与 40 个 test，丢弃无法在 buggy repository 上失败的测试，再在修复前后交叉执行。论文协议下，SWE-bench Verified 从 1-by-1 的 48.0% 提升到 40-by-40 的 60.4%。这是 evaluation-time selection evidence，不是额外训练证据。

官方 resources 发布 4 个 evaluation JSONL，含生成 patch、test、log 与 result，并提供 rollout/evaluation code 和预处理仓库说明。官方 Hugging Face 发布最终 73B BF16 Agentless 模型，但未单独发布 agent-adapted checkpoint、mid-training/cold-start/RL corpus、内部 Docker fleet 或论文训练代码。
