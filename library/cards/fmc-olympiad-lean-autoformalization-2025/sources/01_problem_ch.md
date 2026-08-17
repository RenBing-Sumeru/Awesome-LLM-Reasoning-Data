自动定理证明需要大量自然语言题与形式化陈述对齐的数据，但人工 Lean formalization 依赖专家且速度慢。直接让 LLM 一次翻译竞赛题容易出现语法错误、类型不匹配、未定义符号或遗漏条件；仅保留能编译的结果又无法判断形式化是否忠实、是否过弱。数据不足使 autoformalization 和 theorem proving 都难以扩大到奥赛难度。

FMC 提出无需额外训练的自动流程：LLM 多次生成 Lean 陈述，Lean 编译器返回错误并驱动修订，再对通过编译的候选做质量评估。最终将 3,922 道自然语言竞赛题对齐到 9,787 个 Lean formalization，形成可用于自动形式化和 prover benchmark 的数据集。
