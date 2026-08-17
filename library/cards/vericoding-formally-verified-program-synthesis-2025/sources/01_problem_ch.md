形式化程序合成研究分散在 Dafny、Verus/Rust 和 Lean，各自 benchmark 的题源、规格形式和自动化程度不同，导致模型结果难以汇总；单一语言小数据也不足以判断模型是依赖 SMT 自动化、系统级约束还是显式 theorem proving。自然语言 coding benchmark 又只能以测试近似正确性。

该工作汇总并扩展三个验证生态的任务，建立 12,504 个 formal specification benchmark。模型接收含 `sorry`、未实现函数或验证空洞的文件，生成代码/证明后由 Dafny verifier、Verus 或 Lean 内核检查。数据同时保存可编译任务、翻译后不可编译 issue、自然语言描述、来源和 55,397 次模型实验结果，用于跨工具 vericoding 分析。
