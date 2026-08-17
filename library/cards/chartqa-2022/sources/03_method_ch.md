输入包括 task input or prompt, reference answer, label, scorer, or evaluator, split/domain/version 元数据, model output and score where evaluated，以及官方 发布版本暴露的任务 prompt、上下文、工具/环境状态、候选答案或模型轨迹。输出是能被官方 evaluator 接收的预测、回复、轨迹、artifact、标签或分数。

流程可以读成：先收集或构造任务对象；让模型在指定输入面上作答或行动；按论文 scaffold 运行模型/agent；用 answer-level match or normalized comparison to the gold text/numeric answer under the 评测 script. 打分；再按论文 metric 聚合。训练/评测用途是 评测, 审计，除非官方产物 明确披露优化配方。复现时必须固定 复用分数前，需要钉住精确切分、隐藏/公开策略、实时刷新策略和子集版本。、evaluator 实现、artifact revision、模型/scaffold 设置、prompt 格式、预算/timeout 和依赖环境。
