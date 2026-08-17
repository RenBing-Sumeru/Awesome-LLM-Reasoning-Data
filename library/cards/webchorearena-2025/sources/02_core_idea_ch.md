本文的核心贡献是对 WebArena 做受控扩展，并把难度集中到四类任务上：固定版本的 532 条记录中包含 222 条 Long-Term Memory、168 条 Massive Memory、100 条 Calculation 和 42 条 Others。基准并非只是延长导航路径，而是要求智能体汇总页面内容、在多轮交互中持续保留约束，有时还要跨站点组合信息。每条任务还声明所需观察模态：451 条标记为 `any`，69 条需要文本或 accessibility tree 信息，12 条需要截图。

它采用混合式终端反馈契约。公开配置中有 423 条任务调用 `string_match`、42 条调用 `url_match`、99 条调用 `program_html`；同一任务可以组合多个 evaluator。字符串评测使用精确相等、必须包含指定子串，或由 GPT-4o 判断语义等价的 fuzzy matching。URL 评测检查最终显示的 URL；`program_html` 定位最终页面中的指定元素，再把内容或属性与任务参考值比较。`EvaluatorComb` 将各分量分数相乘，因此任一分量失败都可能使最终得分归零。

该 verifier 能观察提交答案、最终 URL 和配置中指定的 DOM 证据，但不会给每个中间动作标注正确性，也不能直接看到全部隐藏站点状态和副作用。因此其监督是 answer-level 与 full-episode 的终端评分，而不是 step-level process supervision。相较 WebArena，真正的变化是新增更难的记忆与计算任务、显式观察需求、更清晰的答案格式指令，以及多轮作者交叉核验；环境体系与 evaluator 机制主要是沿用和适配，并非全新发明。
