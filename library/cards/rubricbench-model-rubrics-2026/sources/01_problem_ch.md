rubric-guided Reward Model 被用于减少长度和风格偏差，但模型自动生成的准则可能遗漏真实要求、加入无关标准，或无法区分表面流畅但内容错误的回答。现有偏好基准通常只有胜负标签，没有人类 gold rubric，无法判断失败来自准则生成还是后续判分。

RubricBench 构建困难回答对和专家原子准则，分别评估自动 rubric 与最终 Judge 的可靠性。
