既有基线包括已经形式化好的 theorem proving benchmark、mathlib 风格评测，以及缺少大规模平行数据的 autoformalization 工作。ProofNet 的新意在对象层：把本科教材习题式问题、自然语言证明和 Lean 3 定理陈述配成同一条可评测记录。

方向信号不是“Lean 很新”，而是 benchmark 把形式良构检查和语义忠实判断放到同一个对象上，让模型输出先过 Lean typecheck，再被审计是否真的表达原题。它还刻意区别于 mathlib 的抽象理论建设，更强调具体题目的形式化应用能力。

不新的部分包括 Lean、mathlib、人类语义评审、BLEU、in-context learning、prompt retrieval 和 backtranslation。复用前必须检查 Lean 版本、license、`src_header` 依赖、数据修订版本、训练污染，以及 Lean 4 port 是否改变了陈述语义。
