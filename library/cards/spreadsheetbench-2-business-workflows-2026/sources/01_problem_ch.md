SpreadsheetBench 2 问的是：spreadsheet agent 能否完成端到端业务电子表格工作流，而不是只做孤立单元格编辑。主来源是 2026-06-29 提交的 arXiv 论文 https://arxiv.org/abs/2606.29955；官方项目页、GitHub 仓库和 Hugging Face 数据集提供公开 artifact。截至 2026-07-17，一手来源未确认会议或期刊接收，应写作 arXiv preprint / venue unknown。

它同时属于 agent environment surface 和 benchmark surface。一个 instance 包含业务 workflow instruction、输入 workbook、gold workbook，以及针对 modified cells 或 visualization checklist 的评测契约。它不是通用办公 benchmark，不是 spreadsheet QA，也不是训练配方；它的价值在于把 spreadsheet reasoning 从单步文件编辑推进到多 sheet、强领域依赖、需要最终文件状态验收的业务工作流。
