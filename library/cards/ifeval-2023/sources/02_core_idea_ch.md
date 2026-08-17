核心贡献是一套把自然语言指令约束转成可执行 predicate 的小型 benchmark。模型回答不会被整体评价“好不好”，而是逐条检查是否满足声明的 instruction，再汇总成 prompt 级 strict/loose 分数。

关键机制是 instruction registry：每个 prompt 带有 instruction id 和参数，评测代码调用对应 checker 检查 response。strict 更接近原始回答；loose 会做有限归一化，降低格式外噪声影响。

最接近的基线是人工 instruction-following 评测和 LLM 自动评测。IFEval 的方向信号是把反馈契约显式化、程序化；质量信号只在目标行为能被确定性规则表达时最强。
