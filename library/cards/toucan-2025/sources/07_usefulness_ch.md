对指定的 **Environment and Agent Trajectory Data** 方向，TOUCAN 的价值在于公开从任务/工具声明到 assistant action、真实 observation、最终响应、选择标注和 provenance metadata 的 episode 边界。它支持比较 single-server、multi-server、irrelevance、diversified 与 multi-turn 构造，也具体展示了“可下载历史轨迹”与“可回放环境”的区别。

论文展示的训练用途**仅为 SFT**。在完成行数、权利、隐私与污染检查后，119,287 行配置可用于工具 agent supervised fine-tuning 或蒸馏式 imitation。论文不支持把该语料重新标为 RLVR、在线 environment RL、reward-model training、preference optimization 或 process-reward-model training；多维 judge annotation 是过滤信号，不是已披露的标量 reward。

信息更丰富的 full config 还适合非训练研究：分析工具调用序列、部分工具失败、judge/rule 分歧、目标工具遵从、领域混合，以及 SFT 投影丢失的信息。这些属于审计与构造用途，不应额外加入 `training_use`。

谨慎复用者应固定 HF revision `0df3cf3`，维持 119,287 个 SFT 行与 1,527,259 条 full trajectory 的关联，并在可用时显式保留 `subset_name`、工具 schema、message、评审与 MCP metadata，同时把 irrelevance 与普通 episode 隔离。高保证复用还需要逐记录 lineage manifest、冻结 MCP 回放 fixture 或明确的 offline-only 定位、接受/拒绝 ledger、重复与 benchmark overlap 检查、逐组件权利审查和有文档的 PII 扫描。benchmark 增益应独立复现，不能用来替代上述数据检查。
