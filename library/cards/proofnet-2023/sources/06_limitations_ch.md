正确性有两层：Lean 3 接受表示形式陈述良构；专家判断表示它是否忠实表达自然语言定理。Lean 接受一个 theorem statement 不等于证明了原始自然语言命题，也不等于生成了可通过的 proof，除非另行运行证明任务。

artifact 的核心版本是 Lean 3，而官方仓库 README 已说明 Lean 3 不再维护。Lean 4 port 可以用于新实验，但必须作为新 artifact 审计，不能默认逐行等价。数据规模只有 371 个公开例子，后续模型很容易被污染或记忆。

其他隐藏假设包括教材/解答来源、mathlib import、`src_header` 处理、prompt 设计和专家判断一致性。BLEU 不应直接当成形式化 reward，因为论文结果已经显示它可能与 accuracy 方向相反。
