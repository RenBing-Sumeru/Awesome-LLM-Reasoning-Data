C-Eval 是 NeurIPS 2023 Datasets and Benchmarks 论文和官方 benchmark release，用来评测 foundation models 在中文学科考试和职业考试语境下的能力。它要补的缺口是：MMLU 等英文中心 benchmark 不能充分覆盖中文学科知识、中文考试语言和本土语境推理。

数据对象是一道中文多选题，包含学科、难度层级、选项和答案键。评测面是 52 个学科、4 个层级上的静态答题准确率，层级包括初中、高中、大学和职业。收录边界是中文知识与推理的 benchmark/evaluation surface；它不是过程轨迹数据、不是人类偏好数据，也不是训练 recipe。对 atlas 的价值在于 answer-level 反馈契约清楚，同时污染风险也很清楚。
