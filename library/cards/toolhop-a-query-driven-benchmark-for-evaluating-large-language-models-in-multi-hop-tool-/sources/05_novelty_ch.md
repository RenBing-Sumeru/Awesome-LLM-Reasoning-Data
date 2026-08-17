以往工具 benchmark 多从已有 API 列表采样函数后再生成请求，工具依赖可能是表面拼接。ToolHop 的核心变化是采用 query-driven construction：先固定真实问题及答案需求，再生成支持该问题的工具、文档和实现，从数据构建阶段保证多跳必要性与本地可执行性。新意不在提出新的 agent，而在查询、工具和 verifier 的联合设计。
