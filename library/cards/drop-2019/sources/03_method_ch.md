1. 输入：段落、众包问题、验证后的标准答案、答案类型元数据和模型预测。
2. 流程：选取 passage；让标注者编写需要离散操作的问题；验证或聚合答案；对预测和 gold answer 做归一化；按允许的答案形式计算 exact match 与 token-level F1。
3. 输出：QA 记录、模型预测、汇总 EM/F1，以及逐题正确或部分得分。
4. 反馈方：DROP 的 generalized scorer，对归一化文本、数字和日期答案做匹配；它不检查模型推理路径。
5. 复现边界：必须说明引用的是 NAACL/ACL 页面中的 55k-question 版本，还是 arXiv/release 常见的 96k-question 版本，并固定 split、答案归一化代码、hidden test 政策和 leaderboard 时间点。
