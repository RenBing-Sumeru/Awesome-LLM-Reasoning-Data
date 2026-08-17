正确性只相对于官方 answer workbook、answer position 和 evaluator 实现成立。模型可能通过被检查区域，但破坏未检查单元格；数字舍入、日期处理、公式缓存值和格式敏感情况都取决于 evaluator 与 spreadsheet 引擎。

这份 release 应主要当作 evaluation benchmark，而不是有标准 train/dev/test split 的训练数据集。由于任务来自公开 spreadsheet 论坛和博客，license 与 source lineage 必须单独审计。公开 benchmark 文件也可能污染未来模型训练。不同 spreadsheet 引擎、LibreOffice/Excel 重算行为、OpenPyXL 版本、执行反馈 scaffold 和产品人工评测协议都会影响结果。
