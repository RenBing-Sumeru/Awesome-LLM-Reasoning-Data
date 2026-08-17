已有工作基线主要是交互式 agent benchmark 中的成功率评测。AgentBoard 改变了评分契约：加入 progress-aware metrics，并把任务表述成部分可观测决策过程。方向信号是 agent benchmark 应暴露失败位置和部分完成度，而不只报告终止成功。

质量信号是论文中的框架、1,012 个 curated tasks，以及官方代码/数据仓库共同存在。不是新的部分是让 LLM 在工具和 web 环境中测试。复用前要检查 progress 标注是否任务特定、任务版本是否改变、失败/超时如何编码、API 环境是否漂移，以及公开任务是否污染后续模型。
