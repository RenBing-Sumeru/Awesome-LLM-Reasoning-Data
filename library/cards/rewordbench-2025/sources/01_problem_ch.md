奖励模型在固定 benchmark 上可能看似很强，却依赖格式或词面捷径；若语义或排序不变的改写改变偏好，对齐训练和 test-time selection 都会不可靠。

reWordBench 系统变换输入并测量性能退化，再训练奖励模型为 paraphrase 给出相近分数。
