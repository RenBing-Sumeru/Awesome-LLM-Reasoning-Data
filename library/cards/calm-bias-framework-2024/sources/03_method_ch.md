1. 输入：基础评测样例、候选回答或评分 prompt、目标 bias 定义、judge models 和输出解析规则。
2. 扰动：CALM 用自动化、principle-guided modifications 引入目标 bias cue，同时试图保持与答案质量相关的内容不变。
3. Judging：同一个或可比 judge model 对原始版本和扰动版本评分或比较。
4. 测量：把目标 cue 下的分数变化、偏好翻转或不稳定性聚合成 bias indicators。
5. 输出：按 bias 类型和模型统计的偏差测量、定性案例，以及可靠使用 LLM-as-a-Judge 的建议。

这里的 verifier 不是外部真值 oracle，而是对 judge 行为在受控扰动下的一致性审计。复现要固定源样例、扰动模板或生成 prompt、judge 模型版本、采样参数、score parser、bias metric 公式，以及语义保持的人工或自动质量检查。
