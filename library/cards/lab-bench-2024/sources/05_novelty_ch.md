先前基线多是科学知识问答、考试式推理或泛专家题。LAB-Bench 改变的是评测对象：很多题要求处理图、表、补充材料、protocol、序列字符串、cloning workflow 或生物数据库，而不是只回忆知识。

方向信号是：领域 benchmark 可以把科研 workflow 操作编码成题面，同时仍保留简单的 answer-level 反馈契约。质量信号是明确的 category/subtask taxonomy、human coverage、public/private release policy、canary string 和官方数据卡 changelog。

不新的部分包括多选题评分、专家出题和公开 benchmark 发布。复用前要检查数据 lineage、图片和论文许可、数据库快照日期、答案键生成方式、hidden/private split policy，以及模型是否允许使用外部工具。
