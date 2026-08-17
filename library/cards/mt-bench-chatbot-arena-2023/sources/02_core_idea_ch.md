核心贡献是一套“benchmark + judge 审计”的设计：一边构造高难度多轮问题集和真实用户偏好 arena，一边把 LLM judge 的判断与专家、人群偏好对齐检查，而不是直接把 LLM judge 当成真值。机制上，它生成或收集候选模型回答，使用 GPT-4 等 judge 做 pairwise 或 single-answer grading，再用 judge-human、human-human agreement 和专门的 bias tests 检查 judge 是否可靠。

样本对象可以理解为一条 preference-evaluation record：prompt 或会话上下文、候选模型回答、回答顺序、judge 身份或人类投票来源、tie/win/loss 结果、可选 scalar grade，以及复现 aggregate score 所需的模型和任务元数据。反馈契约以人类偏好作为 judge agreement 的参考信号，同时把 GPT-4 judgment 作为被审计的可扩展 evaluator。

最近的对比对象包括 MMLU、HumanEval、GSM8K 这类闭式能力评测，Flan/Self-Instruct/OpenAssistant 等指令或对话数据，以及没有系统人类一致性和 bias 分析的早期 LLM-as-judge 用法。方向标签应写成 preference-based evaluation with auditable LLM judge；默认不能把它当作 reward model 训练数据。
