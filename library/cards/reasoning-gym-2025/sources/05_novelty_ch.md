先前工作基线主要有两种形态。GSM8K、MATH 和 BBH 等固定数据集与 benchmark 提供稳定评测行和自动检查，但不能通过已披露 generator 扩展。更窄的程序化系统覆盖特定逻辑、谜题或游戏族；GEM 等框架级工作也对面向 LLM 的环境做标准化。Reasoning Gym 没有首创程序化内容生成、程序化 reward、curriculum learning 或 GRPO（论文 §6）。

真正改变的是可复用构造对象。100 多个异质任务被注册到共享 `question`/`answer`/`metadata` 接口和任务专用 `score_answer` 函数之后。难度、结构和风格参数可见；具名任务可混合；部分属性可由 curriculum 调整；同一 substrate 同时接入 zero-shot 评测和 RLVR。数据身份因此从固定行转变为由代码、配置、seed/index、混合或 curriculum 状态、scorer 和依赖组成的版本化执行元组。

关键数据贡献不只是规模。Oracle metadata 与可执行 verifier 伴随生成，包括存在多个合法解的任务。这在不先物化永久语料库的情况下，为在线 RL 提供直接反馈接口。同时，它也使新的审计责任变得可见：若版本、seed、参数、scorer 或可选依赖不同，两名用户即使使用同一任务名也可能得到不同实例或 reward。

对一些论断应保持低于论文宣传口径的审慎程度。程序化生成能减少精确项目复用，但不能自动消除模板记忆、语义重叠、外部 benchmark 污染或 verifier gaming。论文的三项设计原则是目标，不是逐任务证明。广度在一定程度上来自对多个独立实现 generator 的工程集成，环境仍是一次回答的文本契约，而不是持久多轮世界。

做复用对比时，应固定 generator 与 verifier revision、实际 prompt、policy/base model、rollout 预算、回答长度、reward 组成、mixture、optimizer 和计算量，再分别消融程序化刷新、难度控制或 curriculum。没有这些控制，下游差值无法特定归因于数据多样性、verifier 质量或构造配方。
