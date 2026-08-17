U-MATH 处理的是一个明确的评测缺口：常见数学基准要么偏中小学、逐渐饱和，要么偏竞赛题、选择题或规模较小，难以稳定衡量大模型在大学课程数学和视觉数学题上的能力。主来源是 arXiv:2412.03205，标题为 "U-MATH: A University-Level Benchmark for Evaluating Mathematical Skills in Large Language Models"，官方代码和发布物入口为 https://github.com/toloka/u-math。

这里的边界是评测面，而不是训练配方。论文发布 1,100 道未公开的开放式大学数学题，来源于当前美国大学课程，覆盖六个核心大学科目，其中约 20% 包含视觉元素；同时给出 mu-MATH，用 1,084 个由 U-MATH 题目和模型解答派生的任务评估 LLM judge 是否能正确判定自由形式数学答案。

可复用的数据对象是题目记录：文本或图像题面、参考答案、模型解答面、科目元数据，以及由官方 judge prompt 或 meta-evaluation 标注给出的答案级正确性判断。筛选价值来自它把高等数学开放题做成了带验证契约的静态评测面，而验证器不是简单 exact match，而是需要审计的 LLM 判题协议。
