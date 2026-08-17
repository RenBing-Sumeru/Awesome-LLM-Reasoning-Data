阅读时要分清三条边界：CheckPoint coverage 不是终态成功；GPT-4 PassRate 不是确定性环境 verifier；API/UI 混合执行是评测设计，不证明 agent 像真实用户一样理解手机。

建议先读数据与环境设计，再看结果表。关键对象是 benchmark row 及其 CheckPoint，而不是聚合模型排名。下游使用时要把 SAST、SAMT、MAMT 分开，因为多应用任务的失败模式不同，尤其涉及应用切换和长动作历史管理。

任何比较都应固定应用集合、设备状态、步数预算和 evaluator 版本。聚合分数不能当作单条样本的可复验证书。
