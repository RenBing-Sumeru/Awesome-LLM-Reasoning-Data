1. 输入是指定年份/场次的 AIME、竞赛题面和官方整数答案。 
2. 评测时 harness 把每道题格式化为数学 prompt，收集一次或多次模型输出，抽取最终整数，归一化格式后与答案键比较。 
3. 输出是在固定题集上的正确题数和百分比；单套通常 15 题，若同时包含 AIME I 与 II 则通常为 30 题。 
4. verifier 是对官方答案的 exact match；基础契约不包含 theorem prover、proof checker 或人工解答质量 judge。 
5. 复现必须记录来源 URL、题面版本、答案键、prompt、sampling temperature、每题尝试次数、答案抽取规则、模型 checkpoint/date，以及是否暴露过解答或 worked examples。
