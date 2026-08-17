输入包括 company, filing, or financial research target, task category, tool access assumptions, final response, official score，以及官方 发布版本暴露的任务 prompt、上下文、工具/环境状态、候选答案或模型轨迹。输出是能被官方 evaluator 接收的预测、回复、轨迹、artifact、标签或分数。

流程可以读成：先收集或构造任务对象；让模型在指定输入面上作答或行动；按论文 scaffold 运行模型/agent；用 expert-authored answer and official evaluator; exact v2 rubric and 裁判设置需要钉住页面和版本 打分；再按论文 metric 聚合。训练/评测用途是 评测, 审计，除非官方产物 明确披露优化配方。复现时必须固定 public/private and v2 任务切分 are 待审计、evaluator 实现、artifact revision、模型/scaffold 设置、prompt 格式、预算/timeout 和依赖环境。
