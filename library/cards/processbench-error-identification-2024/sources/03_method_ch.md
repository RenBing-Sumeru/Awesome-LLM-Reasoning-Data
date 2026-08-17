输入是 GSM8K、MATH、OlympiadBench、Omni-MATH 的公开数学题，以及 Qwen、Qwen2.5、Qwen2.5-Math、LLaMA 系列模型生成的分步解答。论文报告共使用 12 个不同解答生成器，难题部分主要来自竞赛和奥赛级数学数据集。

流程可以按五步审计：
1. 用开源模型按论文设置生成 step-by-step solution。
2. 先去掉原始换行，再让 Qwen2.5-72B-Instruct 重新插入双换行作为段落/步骤边界；若重排后最终答案变化则剔除。
3. 用 Qwen2.5-72B-Instruct 预判最终答案正确性，并平衡抽取 final-answer correct / incorrect 的解答。
4. 让博士级数学专家在参考答案辅助下逐步检查解答，标注最早错误步骤。
5. 初始 3 人标注；若未达成 3 人一致，则最多增至 5 人；仍无 3 人一致的样本丢弃，最终答案错但过程标成正确的少量样本也丢弃。

输出是 GSM8K、MATH、OlympiadBench、Omni-MATH 四个 split，共 3,400 条。官方数据示例包含 `id`、`generator`、`problem`、`steps`、`final_answer_correct`、`label`。验收器是与专家最早错误 label 的 exact match。复用时要固定数据集 revision、split、critic prompt、PRM scalar threshold、majority-vote/greedy 设置和官方代码版本。
