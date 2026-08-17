1. **一句话定位：** 用六维 SQL-aware 扩增和数据库执行验证构建 89,544 条 Text-to-SQL 数据。

2. **方法抓手：** 结构变换、Database Manager 执行、问题/CoT 生成和结构分类。

3. **数据抓手：** SQLFlow 89,544；SELECT-only SQLFlow-Part 67,570。

4. **证据锚点：** Qwen-7B 在 Spider/BIRD/EHRSQL 分别 73.4→82.0、50.9→59.2、24.3→56.1。

5. **复用决定：** 适合 SFT 与执行奖励；先按数据库去重并审计语义等价。
