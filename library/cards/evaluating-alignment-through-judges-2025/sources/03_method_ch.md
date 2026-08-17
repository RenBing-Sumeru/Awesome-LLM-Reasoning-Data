1. 选择指令、模型和 oracle。案例使用 805 条 AlpacaEval、500 条 Arena-Hard 指令、15 个后训练 LLM，并以 GPT-4o 作为偏好 oracle。

2. 排列生成能力。oracle 对每个模型回答与基准回答做成对比较，并交换两次回答顺序；汇总胜率得到生成排序。

3. 构建 judge 任务。复用 oracle 已标注的回答对，让每个 LLM 选出较好回答；其与 oracle 的 Cohen’s kappa 给出评测排序。

4. 筛除标签。若交换回答顺序后 oracle 改判，则丢弃两条实例；这项自一致性决定样本接受。

5. 构建 AlignEval。每个保留的 Arena-Hard 回答对随机留一个顺序，得 2,671 条实例，并由 GPT-4o 或 Claude-3.7-Sonnet 标注；新模型按一致性计分，可与 IFEval 平均排序。须固定版本、提示词、生成回答与筛选；未披露项为未知。
