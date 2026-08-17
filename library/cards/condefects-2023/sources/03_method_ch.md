1. 输入：AtCoder 题目、Java 或 Python faulty submission、修复版本、测试用例、题目日期和难度。
2. 流程：用 `ConDefects.py info` 查元数据，按语言/时间/难度/题目 checkout 子集，运行指定测试，并可收集 coverage matrix。
3. 输出：fault 位置字段、修复语句或文件、测试结果文件、coverage matrix 和子集清单。
4. 反馈：测试执行给 pass/fail；coverage 支撑 fault-localization 指标；repair 成功只相对于选定测试集成立。
5. 复现需固定仓库版本、数据更新时间、Test.zip 下载源、runtime、coverage 4.5、语言子集、时间窗和难度过滤器。
