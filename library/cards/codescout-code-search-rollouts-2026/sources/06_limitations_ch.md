**代理 target 与 verifier 边界。** gold location 来自修复 patch 所修改的代码。这是可审计代理，而不是“理解该 issue 所需全部代码”的完整定义：必要但未修改的上下文可能缺失，某个修改位置也可能只是实现选择，而非唯一相关位置。verifier 只计算终点集合重叠，不运行测试、不验证修复，也不判断中间命令和推理是否高效或忠实。

**零奖励语义不充分。** 发布保留 8,281 条零定位奖励行，却没有标注每个零分来自错误位置、缺失或格式错误的 finish 调用、轮数耗尽、环境故障、取消还是 retry。生成器代码区分其中部分路径，并对达到最大步数仍未 finish 的 rollout 做 loss mask；然而公开行缺少 `loss_mask`、`stop_reason` 和错误类别。因此不能把所有零分统一解释为语义上错误的搜索。

**计数与分组来源。** 公开的 54,845 行比论文名义直接 RL 预算多 3,645 行。14B 发布多出 160 个四次尝试组；4B 多出 379 组，且六个 4B 组不完整，成员数从一到六不等。没有不可变 run manifest 说明它们究竟来自 restart、retry、恢复训练、evaluation、重复日志还是有效的额外优化步。分析者不能假设一条公开行就对应一次唯一的计划训练 rollout。

**配置漂移。** 论文规定 14B 为四条 rollout/四轮，4B 为八条 rollout/六轮。已检查脚本默认值却分别为 14B 八条/六轮和 4B 八条/十轮。自由形式 Hydra override 在原则上可以匹配论文，但报告实验所用的精确命令与 resolved configuration 没有公开。因此，即使固定仓库 commit，也不足以恢复论文配置。

**重放与奖励重算。** 公开行含 task key，却缺少仓库 URL、base commit、应用的 bug-inducing patch、patch 衍生 gold set、不可变环境或容器 ID、生成 checkpoint SHA、随机种子、完整采样设置、logprob、停止原因和 loss mask。重算奖励需要外部连接预处理任务 artifact；精确再生轨迹还需要更多未发布状态。代码虽然固定 SkyRL 与 OpenHands SDK 版本，但未发现端到端 lockfile/run manifest，也没有完整训练指南。

**覆盖与污染。** gold 抽取和实验集中在 Python 仓库。terminal scaffold 可能可以泛化，但其他语言、构建系统、生成代码、重命名和跨语言修改的抽取规则尚未建立。论文从训练的 128 个仓库中排除了 SWE-Bench Verified、Lite 与 Pro-Python 的仓库，但没有报告 issue 文本、patch/代码内容、近重复或预训练污染审计。仓库级分离不能解决这些更广泛的重叠。

**奖励 shaping。** 14B 的精确四轮 bonus 独立于定位质量奖励交互长度。它可以区分偏好长度的轨迹，也会使两个同样错误的尝试获得不同训练信号。相反，达到轮数上限而未 finish 的轨迹会被 loss-mask，即使其搜索 transcript 含有有用的部分证据。没有逐行公开顶层总奖励与 loss mask，下游用户就无法复现所有公开轨迹实际受到的训练暴露。

**发布范围与谱系。** 公开 artifact 只覆盖 4B 和 14B 训练 rollout。evaluation rollout 在别处发布，而 4K 条成功筛选的 1.7B RFT 样本及 1.7B RL rollout 没有映射到本数据集。缺少官方 manifest 时，不能仅凭模型名称或共享 `instance_id` 字符串推断这些发布之间的关系。

**许可证。** 论文为 CC BY 4.0，代码为 MIT；但已检查的 rollout dataset 和预处理 SWE-Smith code-search dataset 都没有声明数据许可证或 license 文件。上游仓库、issue、patch、衍生 target 与生成 chat 的权利没有形成统一文档链。公开可下载并不等于获准再分发、商业训练或发布衍生数据。

条目状态保持 `partial`。该 artifact 对审查多次终端搜索尝试与失败样本很有价值，但精确训练集成员关系、失败原因、实验配置、记录级重放谱系、更广泛污染与数据复用权利仍为 unknown。
