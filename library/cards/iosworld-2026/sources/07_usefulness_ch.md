对`environment_agent_trajectory_data`轨道而言，iOSWorld是一套评测环境recipe。可靠的派生记录应保存task ID与rubric、seed-state版本、应用/构建manifest、模拟器与工具链版本、observation modality、截图/XML、规范化action或MCP call、执行错误、最终状态/答案、停止原因、模型/API设置、criterion label、scalar fraction、strict pass和raw judge response。把成功episode与所有失败类型连接到同一个固定任务对象，可支持planning、grounding、loop、premature stop、judge error及环境漂移审计。

已发布的rubric evaluator可用于反馈契约研究。研究者可以把full-trajectory LLM judgment与程序化end-state check或人类标签比较，按criterion/category分层分析false positive和false negative，测试其他有效路径与有害中间动作，并测量固定judge snapshot之间的标签漂移。公开的1,123条criterion同时构成evaluator-gaming表面，不能视为隐藏reward。

GUI与MCP两种设置可用于受控接口研究，前提是固定模型、任务、50步预算、judge和seed state。研究还应分别报告特权XCUITest或persistence-layer访问、确认设置及屏幕可见GUI动作；否则，分数提升可能被错误归因于reasoning，而实际来自更强action interface。

当前复用等级是**仅限评测与审计**，与`training_use: evaluation`一致。直接用于SFT、RL、偏好学习或reward-model训练仍受阻，因为完整轨迹语料、训练/评测划分、decontamination政策、不可变replay bundle、judge snapshot及完整资产/许可lineage均未提供。benchmark performance可以推动这些审计，但不能认证episode质量。
