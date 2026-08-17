论文报告 25 类可验证 instruction 和约 500 条 prompt，官方仓库发布了数据与 evaluator。真正能支撑单条样本结论的证据不是总分，而是某个 response 在每个声明 checker 上的 pass/fail 记录。

论文还给出两个公开可用 LLM 的示例评测，说明该评测面可以不依赖人工复核暴露指令遵循失败。这些数字只在固定 prompt 集、checker 实现、模型调用包装和 strict/loose 模式时成立。

证据边界：通过只表示回答满足已实现 predicate，不证明事实正确、有帮助、安全，或满足那些没有被编码成规则的隐含指令。
