1. Positioning: 代码 LLM 判别器是否会被语义等价的表层改写误导 is treated as an audit problem.
2. Method: isolate one reliability factor with paired controlled inputs.
3. Artifact: 未核验公开独立代码或数据集；正式论文页提供论文与检查表.
4. Evidence: 跨五种语言和多个判别器测试；所有被测判别器均出现正负偏差，且先生成测试用例后仍然脆弱
5. Decision: reproduce the paired control before deployment.
