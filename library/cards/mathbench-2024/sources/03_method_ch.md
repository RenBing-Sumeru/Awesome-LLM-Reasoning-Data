1. 输入：教材、互联网知识资料、教育考试/竞赛题和开源数学题，按阶段和主题组织。
2. 构造：收集理论定义与推论、应用题，将适合的题改写为多选形式，加入干扰项，并标注三级知识体系。
3. 质控：用半自动过滤流程和 GPT-4 辅助检查题目内在错误、阶段不匹配和答案唯一性。
4. 输出：MathBench-T、MathBench-A、数据发布、官方 leaderboard 和 OpenCompass 评测配置。
5. 反馈契约：chat model 以 zero-shot CoT 回答多选题并用 CircularEval 计分；base model 使用 perplexity。论文报告的主实验固定最大输出 2048 token 和 greedy decoding。
6. 复现边界：比较分数前要 pin 数据版本、OpenCompass 版本、summarizer、模型快照、prompt/scaffold、选项置换实现、语言子集，以及 CE 还是 accuracy 指标。
