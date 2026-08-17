输入包括 MT-Bench 问题、Arena 用户 prompt、候选模型回答、judge prompt 和人类偏好标签。受控 agreement study 中，MT-Bench 使用 6 个模型的回答；Arena 从匿名 battle 的更大投票池里抽样。方法要分清两个层次：先构造评测面，再审计 LLM judge。

流程如下：
1. 人工设计 80 道两轮 MT-Bench prompt，每个类别 10 道，用来考察聊天和指令跟随能力。
2. 为候选模型生成回答，并收集专家级 pairwise preference，形成受控 MT-Bench 对比。
3. 在 Chatbot Arena 中收集匿名双模型 battle，用户不知道模型身份，阅读两个回答后投偏好票。
4. 用 LLM judge 做 pairwise judging 和 single-answer grading；pairwise 模式下交换回答顺序，顺序敏感且不一致的结果按保守规则处理。
5. 计算不同 judge 与人类之间的一致率，并报告 average win-rate 或 average score。
6. 通过 position-bias swap、verbosity/self-enhancement case、repetitive-list attack、以及带或不带 CoT/reference 的数学题检查失败模式。

输出是 MT-Bench 问题、模型回答、GPT-4 judgments、人类偏好数据、agreement tables 和 leaderboard-style scores。复用时必须固定 FastChat `llm_judge` 版本、judge model、prompt template、model answer 文件、回答顺序策略、API 设置，以及具体的 Arena 或 MT-Bench 数据快照；aggregate score 只是评测证据，不是逐条正确性证书。
