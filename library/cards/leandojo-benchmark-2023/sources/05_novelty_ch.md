先前基线多是静态 formal proof 或 theorem statement 数据，模型很难查询交互环境。LeanDojo 改变的是对象：从离线文本对变成带 proof state、premise retrieval 和 executable feedback 的 Lean substrate。

方向信号是 environment-backed reasoning data：benchmark 同时暴露生成目标和 verifier loop。质量信号是公开工具、公开 benchmark artifact、NeurIPS 论文，以及可重新在 Lean 中执行生成 tactic。

不新的部分包括 Lean、tactic execution、proof corpus 和 retrieval-augmented generation。复用前要检查 repository version、proof-state extraction fidelity、premise split leakage、timeout policy、traced Lean repository license，以及使用的是 Lean 3 还是新版 LeanDojo v2 基础设施。
