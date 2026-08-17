报告称 prompt 来自医疗记录、知识库和合成场景。论文报告了 LLM prompt/rubric 生成、内部临床专家选择和权重、聚类/去重、评分、verifier rejection sampling、歧义共识以及不连贯对话片段过滤。阈值、产出、prompt、来源 manifest 和审核政策均为 unknown。

模拟器包含 Termination Gate、Affective Unit 和 Fact Unit。rubric RL 用未指明 LLM 对输出评分，并把 rubric reward 与条件 length reward 结合；rule-based RL 对有 ground-truth 的任务使用专门 verifier。evaluator、校准、reward 权重、GRPO 设置、rollout 和终止触发细节未发布。

