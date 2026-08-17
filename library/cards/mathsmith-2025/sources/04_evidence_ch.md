在表 1 的 50K 对照实验中，MathSmith-HC 在所测试的短 CoT 与长 CoT 学生模型上取得最高的三个困难基准平均分。项目页报告，在长 CoT 训练下，Qwen3-8B 的困难基准平均分为 71.8，DeepSeek-R1-Distill-Qwen-7B 为 51.0；作者给出的相对提升分别为 9.8% 和 15.6%。这些结果支持相应训练配方，但不能单独验证每条生成记录。

表 3 的构造消融更直接。每个版本生成 50K 题目后，Available Ratio——定义为格式正确且教师可给出有效答案——在 MathSmith-SFT、MathSmith-Hard 和 MathSmith-HC 上分别为 71.50%、84.92% 和 95.38%。同一表中，MathSmith-HC 与 MathSmith-Hard 的困难基准平均准确率均为 36.6。因此，一致性项提高了这个依赖教师的可用率指标，却没有提供独立正确性证明。

图 4 报告，训练量从 50K 扩展到 200K 时，MathSmith-HC 在 OlympiadBench 上仍领先 NuminaMath-COT 与 OpenMathInstruct-2。图 5 显示，1.7B 和 4B 学生的收益更小或为负，而更大的 Qwen3 模型收益更清晰。弱点定向实验中，1,000 个 Practice Set 题目各生成 32 个 Qwen3-30B-A3B completion，过滤后保留 923 条；作者报告概念定向变体优于随机变体。

发布物检查也给出反例：LongCoT viewer 中存在一条解答轨迹，它先指出定义缺失或题目不一致，随后仍作假设并猜测 boxed answer。公开发布使这种审计成为可能，同时也证明“教师可解”与“多数一致”不能等同于数学有效性。
