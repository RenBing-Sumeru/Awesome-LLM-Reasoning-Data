Causal Agent Replay（CAR）处理随机性 LLM 智能体中的诊断缺口：失败的终局结果只能说明 episode 出错，静态阅读 transcript 却不能确定哪次决策导致失败，也不能判断从该点重跑是否会改变结果。权威论文是 2026-06-06 提交的五页 arXiv `2606.08275v1`。官方仓库在投稿后继续扩展实现，但不存在 arXiv v2、会议记录、DOI 或已发布的 CAR dataset。

CAR 把一个审计对象定义为事实根 `Trajectory` 加反事实子轨迹。根轨迹包含调用方提供的任务上下文；带有系统级指令、tool schema、model/provider/sampling 字段及 provider-native messages 的精确 `state_before` snapshot；每一步一个 `tool_call` 或 `final` action；标记为 `real`、`recorded` 或 `mocked` 的工具/环境 observation；final output；以及可选的调用方定义 outcome label 与 score。每个分支另有 `parent_id`、`branched_at_step` 和 `intervention_id`，并记录自己的后缀与 outcome。这是运行时记录结构与 replay 方法，不是可下载的训练轨迹语料库。

该工作归入 `environment_agent_trajectory_data`，因为它把 state、action、observation、终止行为、分支 lineage、环境语义和 replay fidelity 设为一等对象。其决策边界是 evaluation 与 failure audit；它不训练 policy，不发布 SFT/RLVR/process-supervision 样本，也没有证明可安全回放带真实副作用的工具。本卡证据覆盖 arXiv v1、GitHub `v0.2.0`、经代码与测试源码检查的实现，以及 PyPI `0.0.1`；实时 provider/tool replay 和后续仅存在于仓库的 Who&When 结果没有被独立复现。
