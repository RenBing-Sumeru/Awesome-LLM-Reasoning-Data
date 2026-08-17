TheoremBench 关注的是：当目标不是短答案，而是必须被 Lean4 接受的形式化证明时，怎样评测大语言模型的定理证明能力。一手来源是 2026 年 arXiv 预印本《TheoremBench: Evaluating LLMs on Theorem Proving in Formal Mathematics》（arXiv:2606.09450）。

它面向 Wiedijk 经典定理列表启发的 Lean4 形式化定理开发，从成组定理中抽取证明任务。边界是形式化评测：模型只有在固定 Lean4 环境中给出可编译证明才算通过。它不是自然语言数学问答，不是主观证明质量评分规程，也不是训练配方。评测对象是一条 Lean 定理任务，包含上下文、候选证明文本和编译判定。
