先前基线并不是“没有过程监督”。PRM800K 已有人类过程标注，MathCheck 做过 GSM8K 风格的步骤错误检测，CriticBench 评测 critique 行为。ProcessBench 的新意在于目标更窄也更可验收：在更难数学题和多生成器自然解答上，做大规模专家标注的最早错误定位。

它改变的是反馈粒度。label 不是最终答案是否正确，也不是一般偏好分，而是推理路径第一次失效的位置；如果全程正确才标 `-1`。这个定义避开了“首错之后的步骤局部上可能仍然代数有效、但全局基于错误前提”的歧义。

方向信号对 scalable oversight 很强：它能暴露最终答案正确但过程有错的样本，并让 PRM 与 critic model 在同一个 step-localization 契约下比较。不是新东西的部分包括：数学题源、LLM 生成解答、PRM 打分、prompt critique。复用前必须查许可证、split/revision、与 PRM800K 和公开数学题的重叠、专家分歧、丢弃样本偏差，以及目标模型是否已见过公开数据。
