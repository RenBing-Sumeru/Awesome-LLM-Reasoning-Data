输入来自 RapidAPI 文档、过滤后的 API 模式，以及由 闭源聊天模型生成的单工具和多工具用户指令。输出包括用户指令、检索到的 API、工具调用链、API 观测、最终答案或失败状态，以及 ToolEval 判断。底层环境是 RapidAPI 工具库、API 检索器、DFSDT 解题路径搜索和 ToolEval 评审器。

流程可以压缩成五步：1. 收集并过滤 RapidAPI 工具；2. 生成工具使用指令；3. 搜索可行的 API 调用路径；4. 用 ToolEval 对完整工具使用轨迹给出通过率或胜率判断；5. 在固定 API 快照、检索方式、评审模型和划分下比较分数。复现时必须固定 arXiv 论文、OpenBMB 项目页、ToolBench 仓库、API 快照、提示或脚手架、DFSDT 预算和评审器版本。
