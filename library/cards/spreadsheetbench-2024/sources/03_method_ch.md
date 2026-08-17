输入是一条自包含自然语言 instruction、一个或多个 `.xlsx` 输入文件、instruction type、answer position，以及允许模型生成代码式 spreadsheet 操作的评测 scaffold。输出是修改后的 spreadsheet 和每个 test case 的通过/失败记录。

构造流程从 ExcelForum、Chandoo、MrExcel、ExcelGuru 等真实 spreadsheet 问题中筛选已解决、可测试、代表性的操作任务；用 GPT-4 把论坛上下文整理成自包含 instruction；人工核对 instruction 与 answer position；再基于原始表格构造额外变体，使一条 instruction 有多个测试文件。评测流程把模型 solution 应用到每个输入 workbook，并把指定输出区域和 gold workbook 比较。多轮设置加入 ReAct 式代码执行反馈，最多 5 轮。

复现时必须固定数据压缩包、evaluator 版本、spreadsheet 引擎、公式重算方式、Python/OpenPyXL 行为、数字/日期归一化规则，以及使用 LibreOffice 还是 Windows Excel 刷新公式缓存。需要审计的 artifact 是论文、NeurIPS 页面、项目页、GitHub evaluator 和 Hugging Face 数据包。
