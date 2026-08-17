SuperGPQA 要回答的问题是：LLM 评测能否覆盖热门学术 benchmark 之外的大量研究生级专业知识。主要来源是 2025 年 arXiv 论文《SuperGPQA: Scaling LLM Evaluation across 285 Graduate Disciplines》（arXiv:2502.14739），并有官方项目页、GitHub、Hugging Face 数据集、排行榜和模型回答记录。

具体缺口是覆盖面和区分度。GPQA、MMLU 类评测覆盖了重要专家知识，但论文认为许多细分研究生学科仍缺少系统评测。SuperGPQA 给出更大的评测面：26,529 道多选题，覆盖 13 个 discipline、72 个 field、285 个 subfield；论文称每个 subfield 至少 50 题。

边界是 benchmark evaluation，而不是训练数据背书。单条数据对象是一道研究生级多选题，包含题干、选项、唯一正确答案、discipline/field/subfield 元数据、难度和评测记录。反馈契约是官方解析模型答案并计算准确率，同时按 sample、subfield、field、discipline 和难度层级报告。
