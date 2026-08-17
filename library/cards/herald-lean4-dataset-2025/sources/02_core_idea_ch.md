Herald 的核心思路是利用 Mathlib4 declaration 周围已有的信息，而不是让 generator 只解释一个孤立的 Lean 表达式。论文称 Lean-Jixia 会抽取 declaration 的 head statement、kind、docstring、neighboring statements、dependent theorems、proof lines 与 proof states。Statement informalization 按 dependency DAG 从低层到高层执行，因此处理依赖 theorem 时，可以把其前置 declaration 的翻译一并提供给模型。

Retrieval 构成第二个 scaffold。作者人工标注 1,000 个 theorem 示例，对其 formal statements 做 embedding，并按 cosine similarity 为当前目标检索最近示例。五名熟悉 Lean 的纯数学博士生经过六轮反馈，检查不同数学分支中的翻译，并把反复出现的问题归纳为十二条以上 prompt principles。由于构造模型本身未披露，该方法更准确的表述是“由未披露 LLM 执行的 dependency-aware、retrieval-augmented generation”，而不是完整可复现的 recipe。

Statement corpus 通过两条增强分支扩展。Tactic-based augmentation 把 proof state 中的 hypotheses 与 goal 转成新的 formal statement，并用 Lean 检查；连续且相似的 tactic states 随机下采样。Informal augmentation 使用 LLM 生成 logical-equivalence rewrites、abstract-concept substitutions、implicit-condition omissions，以及中文、法文或俄文变体。两条分支的样本数量与 originals 平衡，形成论文所报 1:2:1 的 original:tactic:informal mixture。

Proof informalization 只处理 tactic-style Mathlib proofs，而不处理 term-style proofs。每个 tactic line 连同前后 proof states 与人工撰写的 tactic 逻辑解释一起翻译，随后把逐行描述整合为 informal proof。因此 proof rows 含有 step-level 文本结构，但发布物没有为每个自然语言步骤提供独立 correctness label。

必须区分 release view 与 training view。公开发布的是 579,883 条不同 statement rows；把每一对反向构造成 FL-to-NL 训练样本后得到 116 万个有方向的训练 examples，但并不是 116 万个不同发布 pairs。Herald Translator 以 DeepSeek-Prover-V1.5-Base 7B 为 base，先在 OpenHermes2.5 上 warm-up 2,000 steps；最终训练 mix 为 NL-to-FL:FL-to-NL:OpenHermes2.5 = 2:2:1，以 learning rate 4e-5、cosine decay 训练五个 epochs。
