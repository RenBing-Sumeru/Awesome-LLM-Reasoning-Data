1. **准备 schema 与 seed：** 载入数据库、表列关系和少量真实 Text-to-SQL 对，由 Database Manager 统一不同引擎的连接与执行。

2. **六维 SQL 扩增：** 围绕表、列、条件、聚合、连接和嵌套等结构进行可控变换，生成更复杂且分布多样的候选 SQL。

3. **执行验证与生成问题：** 在数据库中运行候选，过滤语法/语义失败；再让模型根据 SQL 与 schema 生成自然语言问题和 CoT。

4. **分类与发布：** 按 SQL 结构和数据来源标注，去重并构成 SQLFlow；另训练 masked alignment retriever 做问题—SQL 细粒度匹配。
