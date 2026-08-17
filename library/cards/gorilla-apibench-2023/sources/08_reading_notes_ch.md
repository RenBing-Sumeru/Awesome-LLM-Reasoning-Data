区分 API 选择、参数正确性、检索质量和实时执行成功。Gorilla 主要审计文档 grounded 的调用生成。

先读定义数据对象和 scorer 的来源章节，再读聚合结果。最常见错误是只搬运 headline score，却丢掉 split、evaluator 和 scaffold 假设。
