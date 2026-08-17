在 Data Construction and Open Release Recipes 中，这篇论文最适合作为端到端反馈数据案例：它展示构建者如何从任务 query 生成多份候选解，得到答案级标签，生成带解释的 verifier target，过滤与标签冲突的理由，平衡正负样本，联合训练生成与验证，并把额外推理计算用于重复判断。公开数据还允许在保留同一问题和候选标识的情况下，对比直接二元 target 与包含理由的 target。

具体用途包括：复现 direct GenRM 与 GenRM-CoT 的对照；检验 reference guidance 是否在提高理由正确性的同时引入泄漏捷径；测量理由样本数增加到何处开始饱和；以及审计 `Yes` 概率能否跨候选长度和任务类型保持校准。若按该 recipe 构建新发布，应保存来源与划分、任务指令、问题、候选解、答案抽取器、正确性标签、仅在合成时使用的参考解、教师与 prompt 版本、每条采样理由、最终判决、拒绝原因、模型与优化器配置、推理投票预算、聚合分数、许可证和不可变发布标识。被拒理由应成为一等审计数据，而不是静默丢弃。

复用等级是**训练复用前阻塞，等待核验**。经检查的 GSM8K 记录可用于 schema 研究、审计实验与严格隔离的复现，但生成 critique 的许可证范围、去污染、确切快照打包和模型/代码可用性仍未解决。它们源自 GSM8K 训练/验证材料，不应被当作独立 evaluation set；在把分数转成 RL reward 前，也应先测量 false positive、false negative、prompt 敏感度、相关投票与 verifier gaming。论文验证的是 reward modeling 与 Best-of-N 评测 recipe；把 GenRM 接入 RL 被明确列为未来工作，不是本研究已经建立的训练用途。
