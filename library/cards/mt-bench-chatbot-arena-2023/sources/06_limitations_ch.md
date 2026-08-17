正确性只相对于指定的人类偏好样本和 judge 配置成立。GPT-4 judgment 与许多人类一致，并不证明答案事实正确、安全或最优；它只是说明在被测试的 prompt、模型集合和任务类别下，judge 与偏好信号有较高一致性。

MT-Bench 公开且规模小，后续模型比较有明显 contamination 和 overfitting 风险。Chatbot Arena 覆盖面更宽，但依赖 live user traffic、匿名模型展示、投票过滤、bot/duplicate 控制和日期版本快照。Arena vote 是 crowd preference，不是每个领域都校准过的专家 rubric。

judge 的已知盲点包括 position bias、verbosity bias、self-enhancement bias、受重复列表等干扰内容影响，以及数学推理能力有限。license 也要按 artifact 检查：Hugging Face 的 MT-Bench human judgment dataset 标为 cc-by-4.0，但相关 conversation、leaderboard data、model output 和依赖项不能自动继承同一许可。
