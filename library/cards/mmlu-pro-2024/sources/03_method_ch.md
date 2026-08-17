1. 输入：候选 MMLU 风格题目、subject/category 标签、答案选项、模型 prompt 和模型输出。
2. 流程：清洗和过滤题池，把每题扩展到 10 个选项，整理为 14 个类别，用官方评测 prompt 跑模型，并规范化模型选项用于评分。
3. 输出：逐题正确性、类别分数、平均 benchmark 分数，以及绑定模型快照和 prompt policy 的 leaderboard 结果。
4. 反馈契约：与发布答案键 exact match；官方基准只用于 evaluation，不提供训练 reward、偏好标签或过程监督轨迹。
5. 复现要点：固定 Hugging Face 数据集 revision、GitHub evaluator revision、prompt style、模型 checkpoint、decoding rule、答案抽取方式，以及比较对象是原始 MMLU 还是 MMLU-Pro。HF 数据集卡标注许可为 MIT。
