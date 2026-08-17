1. **设计规划模板：** 在 Blocks World 与 Gripper 中定义对象、初始状态和目标的组合规则。

2. **程序生成实例：** 枚举或采样状态组合，产生可求解 ground-truth PDDL，并为每题生成四种自然语言描述。

3. **建立等价算法：** 解析候选 PDDL，验证类型与谓词，再搜索允许的对象映射，比较初始状态和目标集合。

4. **分层评分：** 分别记录 parseable、solvable 和 semantically correct。复现需固定 PDDL 子集、planner、对象重命名规则、数据版本和生成随机种子。
