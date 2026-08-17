1. KODCODE-32B-SFT-Hard-18K 在论文五组 benchmark 上平均 61.26，同 backbone 的 Qwen2.5-Coder-32B-Instruct 为 59.25，Bespoke-Stratos-32B 为 59.64；其 BigCodeBench-Complete Hard 为 37.2，而同 backbone instruct 模型是 31.1。这支持已验证示范的训练价值，但比较同时改变了训练数据和 post-training。

2. 校验与筛选实验让机制可以单独检查。在外部人工测试上，保留的 MBPP 答案有 78/80 通过，LiveCodeBench-V5 有 189/190 通过。SFT 样本数同为 10K 时，hard 子集在 BigCodeBench-Complete Hard 上为 39.9，随机采样为 38.5；删除 style 转换数据后降至 35.1。同源生成测试有用但并非绝对可靠，难度与格式也都会影响结果。
