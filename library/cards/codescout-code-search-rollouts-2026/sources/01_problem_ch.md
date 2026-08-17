CodeScout 处理软件工程 agent 强化学习中一个范围明确但后果重要的数据问题：仓库搜索策略既需要多次、可检查的尝试，也需要自动判断其是否定位到 issue 所涉及代码的信号。最终补丁测试可以验证修复，却成本较高，并把搜索与编辑、依赖安装和执行混在一起；只发布一条最佳轨迹则会隐藏策略失败频率、不同尝试之间的差异，以及产生学习信号的终点契约。

论文把 SWE-Smith 中的 Python issue-resolution 任务转换为代码定位环境。agent 获得 issue 描述和已知仓库路径，使用 Unix terminal 搜索处于修复前故障状态的仓库，并以一次结构化 `LocalizationFinish` 调用结束。gold target 从 issue 的修复 patch 中抽取，分为文件、module/class 和 function/method 三层。流程不安装依赖，也不运行测试：任务是定位，而不是修复验证。

本 Card 关注的核心数据对象是官方 rollout 发布。其 **54,845 行**中的每一行都记录 `instance_id`、训练 `step`、`rollout_number`、完整工具调用对话、工具定义和终点奖励分量。其中包括 **39,040 条 CodeScout-14B 行**与 **15,805 条 CodeScout-4B 行**。对话保留 terminal 命令和 observation，奖励字典公开文件、module、entity 三层 F1、三者之和以及 multiturn 字段。

该对象准确属于 **Rollout, Search, and Test-Time Trace Data**，因为多次尝试、分组结构、终点评分，以及对被拒绝或失败样本的处理，都是一等数据属性。发布保留 **8,281 条零定位奖励行（15.10%）**，而非只保留成功输出；许多 task-step 组同时包含零分和正分尝试。因此，即使它是在线训练数据而不是测试时搜索 benchmark，该 artifact 仍适合用于失败与选择审计。

发布物并不能完整重放。54,845 行比论文中 4B+14B 的名义预算 51,200 多 3,645 行；六个 4B 分组不完整；当前启动脚本默认值与论文不一致；逐行数据还缺少 gold target、仓库 commit、策略 checkpoint、随机种子、停止原因、loss mask 和采样 logprob。因此本 Card 保持 `partial` 状态与 L4：论文和固定版本 artifact 足以支持细致的双语说明，但行数来源、许可证和精确重放仍未解决。
