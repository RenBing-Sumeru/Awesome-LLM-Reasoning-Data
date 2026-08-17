对`environment_agent_trajectory_data`轨道而言，MobileBench-OL首先可作为评测环境recipe。可靠的派生episode应绑定task ID与subset、准确task/rule CSV hash、应用/APK版本、device/OS/account fixture、初始screen/XML、模型与scaffold设置、噪声seed/event、每一步截图/XML/action/response、执行错误、匹配subcondition、终止原因、最终成功、reset episode及reset后状态。缺少这些字段时，表面模型差异可能实际来自环境或replay差异。

规则构造流程可作为verifier设计baseline。研究者可以从多条有效轨迹构建task-level predicate，同时要求状态/动作证据与显式停止，比较完整成功和Sub-SR，并用人类标签校准规则输出。已发布的false positive与false negative计数可作为压力测试起点，覆盖替代路径、过期resource-id、视觉相似页面、服务器端状态、过早Complete及有害中间动作。

若正确处理共享task/app，五个子集可用于受控失败分析。Base与Long-Tail可测试界面熟悉度；Long-Horizon可分层分析遗漏、planning、grounding和loop failure；GUI-Reasoning可测试探索深度；Base与Noise-Robust可比较恢复能力。retry研究必须固定task、rule、应用/设备状态、模型snapshot、action budget和噪声event，不能直接比较不成对的pass@k。

reset机制更适合作为audit checklist，而非确定性回放证明。每项任务应声明reset属于task-level、app-level、无需reset或infeasible；单独报告reset成功；保留失败reset episode；比较reset前后相关状态；隔离无法恢复服务器状态的任务。放宽成功谓词应被记录为verifier变更，不能静默等同于状态恢复。

当前复用等级为**仅限评测与审计**。由于缺少论文轨迹语料、失败/拒绝ledger、不可变环境bundle、隐藏评测partition、decontamination政策及完整APK/内容权利，证据不支持直接用于SFT、RL、偏好学习或reward-model训练。任何使用公开task/rule CSV训练的模型都应被视为对该基准已污染，并退出后续clean evaluation。
