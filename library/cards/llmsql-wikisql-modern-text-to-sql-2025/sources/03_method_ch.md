1. **审计 WikiSQL：** 分类统计大小写、类型、语法、值和无答案错误。

2. **自动清洗：** 规范表和值，修正可确定 SQL，并在 SQLite 上执行验证；无法唯一修复的记录移除。

3. **转换格式：** 将 pointer-network action 标签展开为完整 SQL 文本，配套问题和 schema。

4. **统一评测：** 模型生成 SQL 后在对应表上执行，按结果集合判断 correctness。复现需固定 LLMSQL 版本、SQLite、few-shot、backend 与解码参数，因为 vLLM/Transformers 即使 temperature=0 也可能不同。
