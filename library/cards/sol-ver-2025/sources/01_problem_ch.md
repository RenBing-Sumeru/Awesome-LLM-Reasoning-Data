代码模型需要更多训练数据，但用未经验证的自身输出继续训练会递归放大错误。代码生成还存在不对称瓶颈：模型可能较容易写出看似合理的解，却不善于生成能够区分正确代码与细微错误代码的单元测试。若 Solver 始终面对固定且较弱的 Verifier，verifier 盲点就可能被转化为被接受的合成监督。

Sol-Ver 研究两种能力能否在不依赖人工标注或更大 teacher 的情况下共同改进。同一个 Llama 3.1 8B 交替扮演 Solver 与 Verifier：前者编写 Python function，后者提出 test input 与 expected output；生成代码在生成测试上的执行结果用于筛选 SFT 示例并构造 DPO pair。

对 `data_construction_open_release_recipes` 而言，重要对象是完整转换过程，而不只是最终 benchmark 分数：source snippet 与 prompt template、生成的问题与 signature、候选代码、测试输入和期望输出、执行结果、接受与拒绝记录、角色和迭代轮次。决策边界虽然是程序执行，但 terminal predicate 只是与自生成测试一致，不是代码满足预期规范的证明。该 Card 保持 L3，因为配方和证据已有文档，而生成记录与实现仍不可用。
