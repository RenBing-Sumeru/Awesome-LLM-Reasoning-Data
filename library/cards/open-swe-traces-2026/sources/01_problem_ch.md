Open-SWE-Traces 处理的是软件工程 agent 评测与训练之间的数据瓶颈。Repository-level agent 在长 episode 中行动：读取 issue 文本、检查代码库、调用 shell 或编辑工具、接收环境响应、提出 patch，并获得可执行 outcome。公开语料常只提供任务或最终 patch，缺少蒸馏这些行为所需的完整交互历史；只保留成功样本还会删除无效搜索与恢复过程的证据。

主要来源是 2026 年 6 月 14 日提交的 arXiv v1，并配有 NVIDIA 官方 Hugging Face 发布物。公开的数据对象是完整的软件工程 agent episode，而不只是 issue–patch 对：它把 SWE-rebench-V2 任务与代码库、教师生成的对话/工具轨迹、模型 patch、参考 patch 以及三值环境 outcome 连接起来。因此，本工作与图谱中的“数据构造与开放发布配方”方向直接相关：核心贡献是一个已发布的流程和语料，把可执行 PR 任务转化为多语言蒸馏记录。

需要明确边界。Open-SWE-Traces 不是新的任务 benchmark、学习式 reward model，也不能证明每条保留轨迹都是高质量数据。其实验只检验该数据混合在作者设定下能否训练软件工程 agent；benchmark 分数是对该设定的证据，而不是对每一行数据的独立质量验证。
