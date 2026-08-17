输入包括 task or instruction, environment state, agent action, observation, success predicate or score，以及官方 发布版本暴露的任务 prompt、上下文、工具/环境状态、候选答案或模型轨迹。输出是能被官方 evaluator 接收的预测、回复、轨迹、artifact、标签或分数。

流程可以读成：先收集或构造任务对象；让模型在指定输入面上作答或行动；按论文 scaffold 运行模型/agent；用 OSWorld task evaluators and execution-based checks 打分；再按论文 metric 聚合。训练/评测用途是 评测, 审计，除非官方产物 明确披露优化配方。复现时必须固定 Pin public/private split, task version, 运行时镜像, 和评测器版本，再比较结果.、evaluator 实现、artifact revision、模型/scaffold 设置、prompt 格式、预算/timeout 和依赖环境。
