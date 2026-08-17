STaR 和 rejection-sampling fine-tuning 等自我改进方法只在终局检查判定模型生成解正确时才保留该解。对于困难任务，大部分采样解可能都是错误的，因此这种做法既浪费了多数生成预算，也丢失了反复出现的失败模式。单独训练的 outcome verifier 可以复用错误解，但如果 verifier 只在一个冻结 generator 的输出上训练，它可能看不到后续 generator 产生的更难或更多样的错误。

V-STaR 研究同一个迭代采样过程能否同时改善系统的两侧：generator 从成功的自生成解中学习，verifier 则学习区分成功和失败的解。其设置有意保持狭窄且可审计——GSM8K 数学使用 reference answer，MBPP 代码使用 executable tests——因此每个完整候选都能获得一个 binary terminal label。

关键数据问题不只是是否保留错误输出，还包括 terminal label 如何转换为 preference pair、候选分布如何随迭代变化、verifier 实际暴露什么 score，以及在扩大 Best-of-k search 时该 score 是否仍可靠。final-answer label 和 test label 成本低，但它们不能验证中间推理，也不能保证稳健的程序语义。
