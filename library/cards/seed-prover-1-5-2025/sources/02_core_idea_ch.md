核心数据对象是一条交错 agent episode：形式命题、可选自然语言证明或前次失败摘要、推理、Lean/搜索/Python 调用、真实工具响应、演化上下文、缓存已证 lemma、摘要/重启状态、最终 theorem 和终止 `+1/-1`。论文没有声称使用 step reward。

第二类对象是由自然语言证明转换的 lemma-style Lean sketch。它通过混合 Sketch Rubric 契约训练——Lean 结构检查、自然语言原子 lemma 验证和 Long-CoT rubric——再在测试时递归展开为经验证的叶节点。
