对 `environment_agent_trajectory_data` 赛道而言，ScienceBoard 是专业软件环境反馈的重要案例。任务对象把科学指令、资产、初始化、多接口动作、多模态观察、内部状态和终止 evaluator 串联起来，可用于研究 GUI/CLI 规划、科学工具使用、verifier 覆盖和环境故障。

当前公开用途是 evaluation。公开 VM 与任务代码可运行冻结智能体，evaluator 模板则便于比较环境验证与只看截图或依赖 judge 的反馈。轨迹压缩包可支持定性错误分析，但缺少 manifest、许可和成功/失败覆盖信息，不能直接视为干净的 SFT 或偏好语料。

谨慎的复用流程应固定所有组件，为每个 episode 创建新的 VM 副本，记录 initializer 输出，保存全部观察、动作、文件和 evaluator 细节，并保留失败及基础设施异常。在生成任何派生训练集前，还应定义任务划分、污染策略、secret 脱敏、网络限制、组件许可和重放测试。
