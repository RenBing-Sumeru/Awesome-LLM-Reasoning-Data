1. 输入：instance id、capability、task、instruction context、用户输入、reference answer 和 score_rubric。
2. 流程：候选 LM 生成回答，把回答和逐实例 rubric 交给 evaluator，再按任务/能力聚合 1-5 分。
3. 输出：response records、evaluator scores、能力级表格和 leaderboard 结果。
4. 判断契约：官方数据使用每实例 5 档 Likert 描述；结果依赖所选 evaluator LLM、prompt 和解析脚本。
5. 复现边界：要固定 765 条 test set、GitHub evaluator 代码、evaluator 模型版本、API 设置、prompt template、采样和人/机校准协议。
