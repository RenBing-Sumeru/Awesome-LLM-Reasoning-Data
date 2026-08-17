2024 年初的大型数学 SFT 数据多依赖专有 teacher，其条款限制下游用途，行为变化也削弱复现性。Mixtral 等开放模型每题能生成的正确解更少，尤其在 MATH 上明显，因此直接用开放模型替换 GPT-4 会大幅降低训练题覆盖率。

OpenMathInstruct-1 结合高预算采样与默认、学科专属、掩码参考三类 prompt，让 Mixtral-8x7B 生成混合文本和 Python 的解答。代码执行与最终答案匹配筛选出 1.8M 条 GSM8K/MATH 正确示范，另行公开 6.6M 条错误轨迹。

**L4 事实：**主要来源：NeurIPS 2024 Datasets and Benchmarks Track，DOI 10.52202/079017-1096；判定边界：最多执行三个代码块，抽取 boxed answer，与来源真值比较，遇到执行错误即停止；收录核验：release schema、商业使用许可、来源覆盖、采样失衡与模型证据均已检查。
