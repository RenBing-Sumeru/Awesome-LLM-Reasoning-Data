输入包括专业教育视频、学科标签、人工编写或来源题目、答案选项、标准答案，以及 transcript/audio 设置。数据流程先收集 300 个专家级视频，覆盖 Art、Business、Science、Medicine、Humanities 和 Engineering 六个学科，并分布到 30 个 subject。

标注流程为每个视频创建三道题，分别对应 Perception、Comprehension 和 Adaptation。Perception 与 Comprehension 题由标注者人工编写。Adaptation 题中，Science、Engineering、Medicine 和 Business 可从 MMMU 与 MMMU-Pro 中选取适配题；Art 和 Humanities 则人工构造 case-study 问题。质量控制包括标注者交叉检查、OpenAI o1 对语言和答案正确性进行 refinement/verification、领域专家审查，以及 Gemini 1.5 Pro 判断音频对解题是否有帮助。

输出是 benchmark record，以及按 track、discipline 和视频条件划分的模型分数。验证器是每个人工标注问题的标准答案，通常是选择题或多选题格式。复现需要固定数据集 revision、视频可用性、transcript 策略、prompt 模板、帧采样方式、模型上下文预算和 evaluator script。
