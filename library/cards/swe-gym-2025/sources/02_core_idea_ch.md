SWE-Gym 连接三层反馈。第一，半人工配置的仓库容器与专家编写单元测试定义程序化、环境化的终局谓词。第二，成功 agent episode 成为 rejection-sampling SFT 数据。第三，平衡的成功/失败 episode 训练 outcome reward model，其成功概率通过 Best@k 排序多个候选轨迹。

OpenHands 提供带 terminal 与文件编辑动作的通用 CodeActAgent 轨迹；MoatlessTools 提供受约束的多阶段 workflow。二者都采用 filtered behavior cloning，而不是 online RL。因此 accepted `training_use` 仅保留 SFT、reward modeling、agent training 与 test-time compute，不增加 RLVR。

失败在被保留时才具有数据价值。491 行 SFT export 只有成功样本；单独的 sampled release 保存同样的 491 个成功和 5,564 个失败。另一个 2,636 行 verifier mixture 则精确平衡为 1,318 个成功与 1,318 个失败。
