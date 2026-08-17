Qwen-AgentWorld 把环境模拟定义为条件式的下一观测生成。系统提示由任务描述、动作空间、可选初始状态、示例和可选模拟指令五部分组成；上下文随后以 user turn 承载智能体动作、以 assistant turn 承载环境观测，两者交替出现。模型根据历史与当前动作预测一个下一观测。统一文本格式覆盖 MCP、Search、Terminal、SWE、Android、Web 和 OS；其中 Android、Web 与 OS 使用可访问性树或 UI view hierarchy 表示状态，而不是使用截图。

训练遵循“CPT injects, SFT activates, RL sharpens”。CPT 学习状态转移动态和专业领域知识，SFT 加入显式的下一状态推理轨迹，GSPO RL 则优化模拟保真度。SFT 由未具名的通用推理模型为每个查询生成三个候选，并由独立裁判完成 best-of-three 拒绝采样。RL 将五维 LLM 裁判 rubric——Format、Factuality、Consistency、Realism、Quality——与仅覆盖部分样本的二元可执行验证器结合，rubric 与规则奖励权重为 9:1。

因此，反馈合同是“部分可执行、主要依赖裁判”的混合类型。它足以支持 SFT、智能体训练和部分可验证 RL 的分类，但不能据此声称训练语料、裁判、验证器或可回放环境已经开放。

