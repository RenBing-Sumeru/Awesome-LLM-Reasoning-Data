1. 输入：新近发布的竞赛题、官方题面和答案或证明要求、模型配置、prompt 和 scoring rules。
2. 流程：规范化竞赛题，运行模型提交，保存 raw outputs，抽取最终答案或 proof attempts，按任务类型评分，再发布 leaderboard/data artifacts。
3. 输出：逐模型分数、原始或结构化模型日志、problem metadata，以及已释放的数据集快照。
4. 验收：短答案任务用 answer-key match 或 parser-based grading；证明题按平台披露使用 judge 或人工/专家评审。
5. 复现边界：固定 competition set、platform date、GitHub commit、Hugging Face snapshot、prompts、model versions、sampling budget、parser/judge version 和 adjudication policy。
