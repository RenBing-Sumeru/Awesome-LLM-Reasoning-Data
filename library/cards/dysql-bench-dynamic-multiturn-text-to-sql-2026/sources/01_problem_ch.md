静态 Text-to-SQL 假设用户一次给出完整问题，只生成 SELECT；真实分析却会根据中间结果连续修改筛选、聚合甚至执行 INSERT、UPDATE、DELETE。现有 benchmark 因此无法评估数据库 agent 是否保持跨轮状态和正确修改数据。论文构建 DySQL-Bench 与三方交互环境，让模拟用户动态改变意图，模型每轮执行 SQL，并由真实数据库状态和查询结果验证。
