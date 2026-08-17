OlympicArena 要回答的问题是：LLM 和 LMM 在跨学科奥赛级认知推理上表现如何，尤其是科学与计算机竞赛中的纯文本和图文交错题。主要来源包括 arXiv:2406.12753、NeurIPS 2024 Datasets and Benchmarks Track 的 OpenReview/会议页、官方项目页、GAIR-NLP GitHub 仓库和 GAIR Hugging Face 数据集。

它的评测对象是来自 62 个奥林匹克竞赛的题目记录，覆盖数学、物理、化学、生物、地理、天文和计算机科学七个学科。一条记录可包含题干、论文实验使用的 prompt、图片 URL、答案、答案类型、单位、多答案顺序、CS 题测试用例、学科、语言和模态。论文报告总计 11,163 道双语题，13 种答案类型，7,571 张图片，4,960 道含图题。

收录边界是 benchmark/evaluation surface，不是训练配方。它对 atlas 的价值在于把奥赛式推理从数学/物理扩展到多学科科学和代码生成，并同时提供答案级反馈契约与抽样过程级反馈契约。
