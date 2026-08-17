1. **现代 Text-to-SQL 基线：** 直接用完整 SQL 文本训练或评测 decoder-only LLM。

2. **数据清洗参考：** 复用错误分类和 SQLite 执行流程审计其他旧 SQL 数据。

3. **可复现比较：** 使用官方 llmsql 包固定 backend、few-shot 和 execution accuracy。若目标是多表、动态数据库或交互式 SQL，应选择更复杂 benchmark，不能把 LLMSQL 高分外推到真实数据库 agent。
