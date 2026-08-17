推理系统常把一种固定策略——例如 Chain-of-Thought（CoT）、Program-of-Thought（PoT）、问题分解或自我修正——用于所有问题。DOTS 从一个更具体的观察出发：有效的推理动作序列既取决于题目，也取决于执行任务的模型。某个 solver 在一道 MATH 题上可能更适合编程求解，在另一题上则更适合 CoT；两个 solver 面对同一题也可能偏好不同路径。因此，数据问题不只是怎样生成一条正确 trace，还包括怎样得到一个以 solver 为条件的“应采用哪条推理动作轨迹”标签。

DOTS 把这项选择转化为搜索生成的监督。它把分析、求解和验证三个动作层组合成 12 条候选轨迹，用指定 solver 重复执行每条候选路径，根据任务真值对最终答案评分，再逐步保留成功率高且更短的路径。选中的轨迹会与 GPT-4o 生成的解释组合；在 internalized 版本中，还会加入 solver 的推理过程与答案，形成 planner 的 supervised fine-tuning 目标。

可审计的在线对象是一组成功和失败的 solver 对话，并带有动作轨迹 ID、抽取答案与 outcome 分数。论文最终使用的训练对象更窄：选中的最优轨迹及其解释，必要时再拼接所选 solver trace。两者必须区分，因为公开 Hugging Face 发布只是一个 4.8 GB 的 MATH 原始 JSON 文件，虽包含采样 trial 和失败样本，却没有记录精确原始条数、稳定 splits、候选保留/剪枝历史，也没有提供最终 external 与 internalized planner 的 SFT 文件。

DOTS 属于 **Rollout, Search, and Test-Time Trace Data**，因为重复 rollout 生成、基于 outcome 的轨迹选择、剪枝预算和 solver 特定路由共同决定监督信号。它不证明某条固定动作路径具有普适优势，论文报告的 benchmark 结果本身也不能证明发布完整性、数据质量或对其他 solver 的迁移能力。
