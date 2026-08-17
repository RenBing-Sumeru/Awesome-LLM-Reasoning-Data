V-STaR 连接了 sampled reasoning 的两种原本分开的用途。STaR-style self-training 只把正确解送回 generator，而 outcome-verifier training 同时保存正确和错误解用于排序。V-STaR 从一系列逐步改善的 generator 中累积这两种对象，使后续轮次贡献不断变化的 positive 与 negative 分布，而不是一个 frozen-generator snapshot。

其 verifier objective 在这一设置中也有区别。方法没有添加 binary ORM head，而是把程序化 outcome label 转换为同题正确优于错误的 preferences，再使用 DPO 训练 generative verifier。得到的 sequence likelihood 直接用于 Best-of-k ranking。这样既能复用 rejected generations，又不会把错误解误当作应模仿的 demonstration。

各个组成部分并非全新：STaR、RFT、ReST-style iterative self-training、outcome reward model、DPO、unit-test verification 和 Best-of-k selection 都早于该论文。贡献在于具体的 two-buffer iterative recipe、synthetic pair transformation，以及在受测数学和代码设置下证明刷新 generator error 会改善 verifier 的预算匹配证据。
