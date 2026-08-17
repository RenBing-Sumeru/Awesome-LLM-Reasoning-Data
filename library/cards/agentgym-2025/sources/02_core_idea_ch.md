核心贡献是一条汇集与过滤流水线，把异构实时环境转成统一的成功推理动作示范池。已有过程或可由规则求解的路径会补写思考，其余路径来自商用模型探索或众包；环境奖励构成反馈契约。分类理由很直接：发布记录在监督微调中训练中间思考与动作。最接近的数据对比是 AgentInstruct 和 AGENT BANK，AgentBench 则主要属于评测对比。

Google Scholar 引用数：160（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=AGENT+GYM%3A+Evaluating+and+Training+Large+Language+Model-based+Agents+across+Diverse+Environments&author=Zhiheng+Xi&hl=en）

开放数据集：是
数据集名称：AgentTraj-L
官方地址：https://huggingface.co/datasets/AgentGym/AgentTraj-L
规模：十一个环境共 14,485 条高质量轨迹，整体框架覆盖十四个环境
记录形式：包含指令、思考、动作、观察和奖励的多轮回合
文件与存储格式：公开托管的环境分组数据文件
领域与语言：英语网页导航、文字游戏、具身任务、工具和编程
构造与过滤：规则或人工过程补写思考，或由模型与众包探索，再按奖励和正确性过滤
许可与访问限制：公开且无需门禁；数据未声明专用许可，代码采用 MIT
预期用途：跨环境代理监督微调，以及与奖励驱动自我改进的受控比较
