既有 SQL 合成通常随机模板化或大规模无约束生成。Text2SQL-Flow 的变化是以 SQL 结构为中心做六维受控变换，用真实数据库执行作为样本接受条件，并同时生成问题、CoT 和结构标签。masked alignment 进一步利用 SQLFlow 学习问题片段与 SQL 子结构对应。新意在 SQL-aware 数据闭环，而非新 decoder。
