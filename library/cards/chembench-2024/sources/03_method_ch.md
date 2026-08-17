1. 输入：化学问答条目、主题标签、模型 wrapper/prompter，以及任务对应的答案格式。
2. 流程：加载官方 benchmark，为目标 LLM 或多模态模型构造 prompter，按主题运行评测，给回答打分，并保存 topic reports。
3. 输出：包含模型回答与分数的分主题和总体评测记录。
4. 反馈：在线评分器是 ChemBench evaluation package 中的答案 key 或 metric code；化学家表现是对照基线，不是运行时 judge。
5. 复现边界：需要固定 package/data release、Hugging Face 数据版本、prompt builder、模型 endpoint、temperature、依赖版本和报告日期。它是 evaluation-only；若转成训练 reward，必须另查 license、泄漏和答案 key 风险。
