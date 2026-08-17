对于 `environment_agent_trajectory_data`，Tool Zero 可作为可审计离线工具使用训练记录的字段规范：保存 query/history、candidate schema、自然语言 thought、selected tool subset、序列化 call、已有 observation、ground-truth call、reference AST、每个 reward 分量、final scalar、source revision、augmentation provenance 与 rejection status。形式化轨迹还提示应记录 environment/user observation，但不能为实际从未执行工具的记录虚构这些字段。

对于 `training_usage_optimization_objectives`，论文提供了奖励 curriculum 的受控 ablation 目标：固定 overlap 与固定 AST reward、调度式 GG-GRPO、移除 format reward、移除 multi-tool bonus、name masking 开关，以及分别测试四种 multi-turn transformation。研究者还应加入语义等价测试、替代有效调用、可执行环境检查、reward-gaming probe 与失败样本保留，之后才能把规则 verifier 视为可靠。

该论文也是一个发布审计案例：比较 ToolACE 公开 11,300 行 subset 与论文训练报告的 99,266 条记录；固定 ACL 与 OpenReview 设置；区分 framework URL 与 method code；核对表 4、5、9；并报告逐样本 train/evaluation overlap，而不只报告 tool-set overlap。

复用等级：**阅读/审计参考与重建配方；论文专属训练复用在完成核验前被阻断**。已核验的上游 ToolACE/xLAM 数据集可以按各自 card 与 license 研究，但不能重建 Tool-Zero 语料。报告的 benchmark surface 可指导评测设计，但没有已固定版本的 Tool-Zero evaluation package 或 checkpoint。
