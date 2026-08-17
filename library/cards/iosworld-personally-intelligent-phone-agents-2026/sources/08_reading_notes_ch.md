比较模型分数前，先读 task file 和 rubric format。核心区别是 seeded personal world 下的任务完成，而不是泛化 UI navigation。

要把 observation mode 与模型能力分开：screenshot-only、vision+XML、MCP/tool-use 会改变信息通道和行动通道。还要分开 rubric score、full-pass rate 和 qualitative trace inspection。
