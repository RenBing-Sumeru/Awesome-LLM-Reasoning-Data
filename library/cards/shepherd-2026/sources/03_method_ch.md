Tree-GRPO 的构造与训练流程如下：

1. 从 2,492 个 Endless Terminals 任务开始。对每个基础模型，每个任务采样 8 条基础策略 rollout，并删除 `pass@8=1.0` 的任务；Qwen3.5-35B-A3B 与 Nemotron-3-Super-120B-A12B 分别留下 442 和 530 个任务。
2. 每个训练步采样 16 个 prompt，每个 prompt 在新沙箱中生成 8 条根 rollout，共 128 条。每条 rollout 上限为 8 turns、每 turn 1,024 个生成 token、16,384 个输入 token；SkyRL 的 overlong filtering 会删除超过上限的轨迹。
3. 将工作智能体动作记录为不可变的意图/结果 effects。每个 scope 绑定模型提供方、工具、进程、文件系统、沙箱句柄和轨迹游标；effects 在持久分支图中实体化为提交。
4. 将工作智能体 transcript 与终局奖励交给 Claude Opus 4.7。元智能体选择一个先前回合，并提出它会在该处执行的 bash 动作；该动作经工作策略的 renderer 重渲染，以匹配工作智能体动作格式。
5. 将 scope 回滚到所选回合之前。保留共享前缀，创建隔离的子 scope，并采样 sibling 后缀。discard 子分支不会改变父分支，被选中的子分支可以 merge。
6. 用任务特定的终局结果奖励对根与 siblings 评分。前缀动作使用跨根 group baseline，后缀动作使用树内 sibling baseline，从而在 fork 之后定位信用。
7. 汇总 advantages，并以 clipped GRPO 更新策略。披露配置运行在 Modal 管理的 8-H100 节点上，使用 FSDP2、gradient checkpointing、`torch.compile`、Adam、0.01 weight decay、0.1 max-norm、20-step warm-up、无 KL loss、10 个 epoch 和总计 1,120 steps。每 10 steps 保存 checkpoint 并验证；渲染后的 HTML 漏掉了学习率数值。

官方 `shepherd-experiments` 仓库提供 Tree-GRPO 代码、论文其他应用、微基准和冻结底座快照，但不提供生成轨迹语料、训练检查点、任务 ID 划分清单或不可变 release tag。
