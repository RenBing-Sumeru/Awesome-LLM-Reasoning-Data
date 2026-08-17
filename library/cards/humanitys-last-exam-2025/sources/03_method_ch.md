1. 输入：专家提交的问题、答案规格、详细解法、学科/类别元数据、贡献者机构，以及可选图像资产。
2. 筛选：题目必须精确、闭合、可解、原创或非平凡综合，并且不能被快速网页检索直接回答。
3. 难度检查：候选题会用 frontier LLM 测试；容易答对的题被拒绝或修改。
4. 复核：研究生级 reviewer 与组织者/专家 reviewer 检查质量、歧义和标准符合度；发布后还有公开 review 用于纠错。
5. 评分：模型输出由 exact match 或选择题匹配验收；部分短答需要归一化比较或 LLM judge。

复现必须固定数据版本、public/private split、图像资产、grader revision、judge model/prompt、prompting policy、工具访问、calibration 评分和 leaderboard 日期。
