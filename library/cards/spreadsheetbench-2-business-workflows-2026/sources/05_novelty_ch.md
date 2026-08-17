既有基线是 SpreadsheetBench 2024 和其他强调单个 spreadsheet 操作或通用 app control 的办公 agent benchmark。SpreadsheetBench 2 改变的是评测单位：从短 spreadsheet 操作变成业务 deliverable，要求多 sheet 检查、领域假设、许多依赖 cell 和任务级一致性。

方向信号是从 checked range manipulation 走向 end-to-end workbook deliverable。质量信号包括专家构造的 gold workbook、四类业务任务、独立专家验证、公开代码/数据 artifact 和显式 scaffold。不是新的部分包括 spreadsheet 编辑、exact workbook comparison 和 agent scaffolding。复用前必须检查 raw-source licensing boundary、dataset/evaluation-code license 冲突、split policy 缺失或隐藏、VLM checklist 依赖、Windows-only visualization export、模型 API 版本，以及公开任务是否会污染训练。
