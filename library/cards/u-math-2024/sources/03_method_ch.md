输入包括大学数学题、可选视觉材料、参考答案、模型生成解答和 judge prompt。U-MATH 主流程整理 1,100 道未公开的开放式题目，来源于当前美国大学课程，覆盖六个核心科目，并区分文本题和视觉题；官方仓库提供运行模型和评分所需的评测代码。

mu-MATH 流程从 U-MATH 中抽取约四分之一题目，每题收集四个强模型生成的候选解答，再附上正确性标签，形成 1,084 个裁判评估任务。因此输出不只是解题模型分数，也包括判题模型分数。U-MATH 报告按模态和科目划分的解题准确率；mu-MATH 报告 judge 质量，包括 F1，以及 inconclusive judgment、保守、宽松、推理和 coherence 等分析。

验证器是由参考答案支撑的 LLM judge 协议，并通过 mu-MATH 标签审计。复现时需要固定仓库 revision、数据文件、prompt 模板、模型采样设置、judge 模型版本、答案抽取约定，以及是否使用视觉子集。需要核验的 artifact 包括 arXiv 论文、GitHub 仓库、发布数据、prompt appendix 和仓库 license 文件。
