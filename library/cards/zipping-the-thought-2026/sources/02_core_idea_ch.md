论文把 CoT 压缩设为显式数据变量。Explicit CoT 输出每个原子运算；Composed CoT 把多个运算合成一步，但仍展示对应计算；Implicit CoT 省略中间运算和值。确定性任务生成器保持底层依赖链和答案一致，因此差异可以归因于监督粒度，而不是题目难度或教师质量。

Google Scholar 引用数：0（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Zipping+the+Thought%3A+When+and+How+Compressed+Reasoning+Data+Works+in+LLM+Post-Training&author=Kohsei+Matsutani&hl=en）

开源数据：未确认发布固定语料。官方仓库 https://github.com/kohseim/cot_compression 提供数据生成、SFT、RLVR 与评测代码，单次运行可生成最多 768K 条记录。每条记录包含模 23 合成依赖链问题、运算数量、干扰项设置、CoT 类型与粒度、渲染轨迹及最终整数答案。流程删除训练与评测的精确重复，短链用于训练，长链用于分布外泛化评测。文件格式和许可未确认。预期用途：受控研究 CoT 粒度、重复、SFT 与 RLVR，而不是直接训练自然领域模型。
