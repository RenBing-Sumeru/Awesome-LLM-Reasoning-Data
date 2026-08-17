OSWorld-MCP 在 GUI 动作所修改的同一个桌面状态上增加结构化工具路径。公开客户端连接一个 OSWorld 专用 FastMCP server，以及 filesystem 和 git MCP server。最终保留的 158 个工具覆盖七类应用：LibreOffice Writer、Calc、Impress，VS Code，Google Chrome，VLC 和操作系统工具。GIMP 与 Thunderbird 仍在任务集中，但受 OSWorld 软件版本限制，没有专用 MCP server。论文分析中的 25 个外部 MCP 工具充当非目标工具或干扰项。

动作路径不是按任务预先固定，而是在每一步动态选择。论文采用 GUI-Owl 风格 scaffold：核心模型观察当前界面，生成 thought 和推理摘要，然后选择 GUI 操作或 MCP 调用。一次提供全部 158 个 schema 会显著拉长上下文，因此默认系统按当前应用检索工具子集；没有应用专属匹配时，公开客户端会排除若干应用类别后回退到更宽的工具表。默认实验还按字典序排列工具描述。检索和排序都不是展示细节，而是评测条件的一部分：去掉检索后，Gemini-2.5-Pro 的整体准确率从 20.5 降至 15.5；随机打乱描述则使其从 20.5 变为 22.7。

反馈包含两层。第一层是动作级运行反馈：GUI 动作产生新的屏幕或应用状态，MCP 调用返回序列化结果或错误。第二层是终局反馈：OSWorld evaluator 将最终环境状态与任务特定目标比较。Tool Invocation Rate（TIR）再引入人工工具有益标签：工具有益任务只有在成功且调用工具时得分，工具无益任务只有在成功且未调用工具时得分。因此 TIR 联合衡量任务成功与路径选择，并不会单独奖励“路径选对但后续执行失败”的 episode。
