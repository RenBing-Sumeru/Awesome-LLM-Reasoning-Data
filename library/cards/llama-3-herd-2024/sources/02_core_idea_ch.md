构造配方有两个相连层次。预训练从 15.6T-token 配比构建 8B、70B、405B dense 模型，再逐步把上下文扩展到 128K。后训练重复六轮偏好收集、reward modeling、best-of-10–30 rejection sampling、SFT、DPO 和模型平均。

能力分支把代码执行、最终答案、stepwise reward、Python、MCTS、工具调用、人类编辑与安全策略转化为反馈。因此可复用的数据对象不只是聊天问答，还可以是 chosen/edited/rejected 偏好三元组、执行轨迹、带 step/outcome reward 的推理链、工具对话或安全标注会话。
