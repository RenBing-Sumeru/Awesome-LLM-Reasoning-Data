已有 tool-use benchmark 常常只看模型是否选对 API 或参数。tau-bench 改变的是评测单位：一个完整客服 episode 里，工具调用、对话管理、政策遵守和最终状态一致性都要成立。

质量信号是显式环境契约：policy、tool schema、database state、user simulator、transcript 和 terminal reward 都是任务的一部分。并不新的部分包括客服模拟、工具调用和数据库状态检查。复用前要检查具体仓库 tag、outdated-task 提示、MIT code license、任务数据条款、用户模拟器模型、随机种子、reward code、hidden/public split，以及公开任务是否进入后续训练数据。
