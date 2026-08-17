已有基线包括数学、科学、考试和多模态 benchmark：GSM8K/MATH 类数学集，GaoKao/AGIEval 类考试集，SciBench 类科学解题集，以及 ScienceQA、MMMU、CMMMU、MathVista 等多模态集。OlympiadBench 的变化在对象层：集中收奥赛难度数学和物理题，同时保留双语、含图、专家解答标注和物理渐进题上下文。

方向信号是把竞赛级难度和按答案类型设计的自由形式科学答案 evaluator 结合起来。质量信号不是“所有题都能自动验证”，而是清楚地区分可自动评分的开放式答案与需要人工处理的证明/文本题。

不新之处包括 OCR、benchmark 整理、答案格式 prompt、数值容差和符号等价判断。复用前要检查具体数据版本、竞赛题来源权利链、Hugging Face 数据许可、GitHub 代码许可、evaluator 容差设置、OCR/图片忠实度，以及比较分数时是否使用同一多模态或纯文本切片。
