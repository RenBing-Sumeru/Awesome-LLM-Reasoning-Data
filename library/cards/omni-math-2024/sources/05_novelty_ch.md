既有基线是 GSM8K、MATH、OlympiadBench 等数学推理基准；它们在当前前沿模型面前可能出现难度不足、覆盖不够、分类不细或自由文本答案判定不稳的问题。Omni-MATH 改变的是评测面：强调奥赛级广覆盖、子领域/难度结构，以及可公开复核的答案 judge。

方向信号是从单一 hard-math accuracy 走向按主题和难度审计模型能力。质量信号是论文、项目页、数据集、仓库和 Omni-Judge 都有公开入口。并非新内容的是：收集数学题、报告模型准确率、用自动化答案检查，这些都已有先例。复用前要查 license、数据 revision、split 策略、judge 失效模式、prompt 泄漏，以及目标模型是否已经见过公开 Omni-MATH 题目。
