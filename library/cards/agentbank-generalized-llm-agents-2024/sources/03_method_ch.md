1. **设计技能覆盖。** 选择 16 个代理任务并映射为五类核心技能，统一环境接口和轨迹 schema。
2. **生成交互轨迹。** 由专家、强模型或环境策略执行任务，保存 instruction、thought、action、observation 和终局反馈。
3. **执行质量筛选。** 根据环境成功、动作可执行性、格式和轨迹完整性删除无效记录。
4. **降低难度偏差。** 使用新的 annotation pipeline 调整采样与标注，使简单任务不会过度主导总数据。
5. **形成 AgentBank。** 平衡技能、任务和难度后得到 50K+ 轨迹，用于 Samoyed 系列模型的 trajectory tuning。
