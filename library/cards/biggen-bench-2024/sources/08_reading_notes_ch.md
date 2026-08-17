不要把 1-5 分脱离 rubric 和 judge transcript 当成 ground-truth scalar reward。它评测的是“在逐实例标准下的生成文本”，并不证明 judge 在不同能力之间已校准。比较 leaderboard 前应查看 dataset card 与任务文档，因为分数含义是任务局部的。
