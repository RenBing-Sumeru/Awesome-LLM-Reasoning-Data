1. **选择高难任务。** 经各数据集自己的难度筛选后，抽取 3,000 条 HotpotQA、5,586 条 MATH、4,439 条 APPS、3,000 条 WikiTableQuestion 与 3,553 条 ALFWorld 候选。
2. **提供可执行接口。** 分别暴露 Wikipedia 搜索函数、数学和编程 Python 包、pandas/SQLite 表格或 ALFWorld 控制 API；原本的单轮问题被改造成允许多轮思考、执行、观察与作答的任务。
3. **生成轨迹。** GPT-3.5 Turbo 与 Claude 1/2 在 MINT 中尝试任务；长上下文 GPT-3.5 处理 APPS，其他 teacher 都未解出的一个子集再交给 GPT-4-0613。
4. **验证并筛选。** 原任务指标判断最终答案是否正确。只保留能按 CodeAct 解析和执行的 action；删除格式错误、所有执行均报错，以及轮次结构异常且未回答用户的 episode。对多轮成功记录，优先保留能够修正早期错误的轨迹。
5. **打包并训练。** 最终公开 7,139 条轨迹：搜索 1,664 条、数学 1,732 条、编程 647 条、表格 1,065 条、机器人规划 2,031 条。它们与 69,230 条通用对话混合，用于 Llama-2 7B 和 Mistral 7B 的全参数 SFT。

复现时应固定 teacher 版本、上游数据 revision、MINT prompt、执行镜像、工具包、任务 checker 与发布 revision。论文没有把 teacher 调用成本和随机种子汇总成完整生成预算。
