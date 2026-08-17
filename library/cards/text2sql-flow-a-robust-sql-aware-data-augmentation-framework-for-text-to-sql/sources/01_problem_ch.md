Text-to-SQL 的训练数据通常数量少、SQL 结构简单且数据库类型集中，模型容易记忆常见模板，遇到复杂 join、嵌套、聚合或新 schema 时退化。纯自然语言改写不能保证 SQL 语义保持，直接生成 SQL 又常出现不可执行查询。

Text2SQL-Flow 从少量 seed 出发，在六个 SQL 结构与语义维度上扩增，再用数据库执行验证、问题生成和 CoT 标注构建 SQLFlow。
