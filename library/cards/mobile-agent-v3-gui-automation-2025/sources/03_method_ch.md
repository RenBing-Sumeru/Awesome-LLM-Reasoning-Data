1. 输入：用户 GUI 任务、截图或 GUI 状态、动作空间定义、云端虚拟环境状态、模型历史和 benchmark 任务规范。
2. 流程：初始化 GUI 环境；由 GUI-Owl 或 Mobile-Agent-v3 scaffold 观察并规划；执行动作；收集观察和结果；判断成功或失败；把通过的轨迹和反馈送入自进化数据循环。
3. 输出：benchmark 分数、任务轨迹、state-action-observation 日志、被判定成功或失败的 run，以及官方仓库暴露的模型/数据 artifact。
4. 反馈：AndroidWorld 和 OSWorld-Verified 提供环境级任务成功指标；框架内部还使用轨迹正确性 judgment 做过滤和改进。
5. 复现边界：要固定 GUI-Owl checkpoint、仓库 commit、云环境镜像、benchmark version、prompt/scaffold 角色、action grammar、max steps，以及任何用于 judgment 或 execution 的闭源服务。
