核心贡献是为交互式编码任务提供统一接口，使 agent 能观察执行反馈、决定下一步 action，并由环境特定 predicate 评分。关键机制是一轮轮 observation、action、execution、feedback、termination。

评测面是任务环境加轨迹 schema，而不只是 prompt。成功由程序化或环境检查决定：可能是 SQL 答案、shell 任务完成、代码执行结果、测试、CTF 校验或 SWE 子环境评分。

最接近的对比是 HumanEval/APPS 这类 final-answer 代码 benchmark，以及 WebArena 类交互智能体 benchmark。InterCode 位于两者之间：领域是 coding，但契约是带可执行反馈的交互环境。
