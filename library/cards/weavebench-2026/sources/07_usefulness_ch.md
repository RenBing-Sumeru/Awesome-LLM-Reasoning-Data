对 `environment_agent_trajectory_data` 而言，WeaveBench 是 evaluation environment 与 episode schema 参考。可复现记录应保留 task ID 与 provenance、P1-P3 atoms、任务包 revision、VM hash、应用与服务状态、截图和工具 observation、规范化 GUI 及 CLI/代码/文件/浏览器动作、完整 chat trace、交付物、日志、judge prompt/model/version、clause 与 dimension 证据、hack 判断、scalar score、terminal threshold，以及 episode 属于成功、部分成功、失败还是超时。把这些字段连在一起，可支持回放研究、跨接口失败分析、shortcut audit 和环境版本比较。

对 `benchmarks_evaluation_surfaces` 而言，mixed judge 是需要审计的具体设计，而不是现成可信 reward。研究者可比较 full-episode judgment 与 outcome-only check，检查八个维度和 clause 证据，用独立人工 adjudication 测量 false positive 与 false negative，扰动 prompt 与 judge version，并测试 hidden-anchor isolation 能否防止 gaming。论文中 33.3% 到 53.5% 的 outcome-only 变化提供 ablation target，而非 calibration certificate。

任务构造可作为 evaluation recipe 复用：定义混合 cooperation archetype，要求 P1 通道不可替代、P2 交错阶段和 P3 跨应用状态，封装自包含资产与 anchors，执行独立 blind review，并用多个智能体 pilot。派生基准还应发布逐记录 provenance、拒绝理由、pilot 身份与设置、不可变环境、evaluator test 和完整 rollout retention，因为这些信息在本工作中不完整或为 unknown。

当前复用等级是**仅限 evaluation 与 audit**。官方论文没有用 WeaveBench 训练；发布的任务包和展示的最佳轨迹都不应被视为作者认可的 SFT、RL、preference 或 reward-model data。训练复用仍受以下缺口阻断：train/evaluation partition、decontamination analysis、包含失败在内的完整 trajectory manifest、逐记录权利、judge calibration，以及 GPT-5.5 对 Claude Opus 4.7、threshold 0.8 对 0.5 两组冲突的协调。
