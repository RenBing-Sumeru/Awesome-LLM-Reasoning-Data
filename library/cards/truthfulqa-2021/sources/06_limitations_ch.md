# 06 局限

TruthfulQA 是公开且规模不大的 benchmark，因此现代模型存在严重污染风险。高分可能来自记忆、针对该 benchmark 的 post-training，或 prompt adaptation，而不是面对分布变化时普遍真实作答的能力。

评分契约是混合且具有历史语境的。Human evaluation 昂贵，并不总会为每个新模型重复；learned judges 和 semantic metrics 可能奖励表面相似、惩罚其他正确说法，或随着实现变化而漂移。Multiple-choice 分数也可能不同于 free-form behavior，因为选项直接暴露了 true 和 false candidates。

该 benchmark 主要针对英文常见误解和文化上显著的错误信念，不覆盖所有 factuality 形式。它不直接测试检索质量、引用 grounding、长文综合或工具辅助验证。因此报告分数时应写明 mode、prompt、scorer、model date 和 exposure assumptions。
