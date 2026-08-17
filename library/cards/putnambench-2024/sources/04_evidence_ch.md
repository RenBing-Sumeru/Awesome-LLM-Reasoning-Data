可信证据主要来自机械验证下的难度。arXiv 页面确认了 NeurIPS 2024 Datasets and Benchmarks 接收状态，并说明既有神经/符号 prover 只能解出少量问题；项目页进一步给出操作化结果：所有尝试方法合并也不到 1% theorem 被证明，few-shot GPT-4o 在每种语言 10 次尝试下只各解出 1 个问题。

但这一节不能把 aggregate score 当成样本级证据。对单条 benchmark row 来说，真正决定成败的是：针对精确 theorem statement、语言版本和库状态，有一段 proof script/proof term 被对应检查器接受。证据边界也因此很硬：比较分数前要固定仓库版本、语言子集、prompt/scaffold、attempt budget、timeout 和 checker 版本。官方还在维护 benchmark，所以 leaderboard 结论必须带日期和 artifact revision。
