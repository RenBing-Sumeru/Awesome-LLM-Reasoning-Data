核心贡献是把真实 Excel 论坛里的复杂操作需求转成可复现的 spreadsheet agent benchmark。模型不能只输出文本答案，而要生成能修改 `.xlsx` 文件的方案，并让输出 workbook 与标准答案 workbook 对齐。

数据面包括 912 条 instruction 和 2,729 个 test case，覆盖 cell-level 与 sheet-level 操作，例如查找、抽取、求和、高亮、删除、修改、计算和展示。反馈契约是官方 evaluator：同一条 instruction 的 solution 会作用到多个输入表格，再在指定 answer position 与 gold workbook 做比较；soft restriction 统计部分通过，hard restriction 要求该 instruction 的所有 test case 全部通过。最接近的对比对象是 table QA、Office/desktop agent benchmark 和代码生成 benchmark，但这篇的新方向是 spreadsheet 文件状态操作加程序化 outcome checking。
