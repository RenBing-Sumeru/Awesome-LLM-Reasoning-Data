1. **Python/API 边界：**任务集中于 Python 库调用，不能代表大型多文件开发、并发系统或其他语言；分数应解释为函数级实用编程能力。  
2. **依赖漂移：**第三方 API、网络行为和库版本变化可能使原测试失效，必须使用官方容器或锁定 requirements，并区分环境错误与模型错误。  
3. **测试与污染：**99% branch coverage 仍可能遗漏语义，公开 benchmark 也可能进入模型训练；应使用 contamination 检查、隐藏测试和后续 live split 验证结论。
