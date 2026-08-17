公开题目与答案一旦进入训练语料，静态 LLM benchmark 就会逐渐失去诊断价值，而开放式 LLM judge 又引入另一层不确定性。LiveBench 想回答：如何在高难任务上比较模型，同时不把已经广泛流传的测试集当成永不过期的证据。

论文构建了一套带日期的 benchmark，把近期或新生成的问题、任务专用客观评分和定期替换组合起来。直接产物是一条版本化评测记录，包括 prompt、回答、checker、得分、类别和 release，而不是后训练监督数据。官方来源：https://arxiv.org/abs/2406.19314；会议：ICLR 2025 Spotlight。
