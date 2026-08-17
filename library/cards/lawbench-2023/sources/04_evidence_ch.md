官方论文和仓库把 LawBench 定义为 20 个法律任务，分为记忆、理解和应用三个层级。公开仓库提供 data directory、prompt/evaluation 材料和 OpenCompass 集成，因此行级审计可以从 task file、prompt、target answer 和 scoring script 开始。

样本级决定性证据是模型输出是否与该任务的官方 target 或 metric 匹配。aggregate leaderboard number 只有在固定 prompt template、output parser 和模型设置后才可比较，因为中文法律任务对措辞和答案格式很敏感。

证据边界是中文法律领域 benchmark。它不验证法律咨询质量、跨司法辖区迁移，也不保证数据快照之后的法律事实仍然有效。跨仓库 revision 比较分数时必须记录 commit。
