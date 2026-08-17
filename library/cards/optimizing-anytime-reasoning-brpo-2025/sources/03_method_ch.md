训练以 DeepSeek-R1-Distill-Qwen-1.5B 和 40,315 道 DeepScaleR 数学题为基础，训练一个 epoch，每次 policy iteration 使用 64 道题。思考预算设为 2,000、4,000、6,000 和 8,000 tokens。每道题采样 8 条完整思考过程；在每个预算点采样 4 个摘要，摘要最多 128 tokens，抽取第一个答案，再用规则验证器给出 0/1 奖励。

实现基于 Verl 并使用 PPO。思考与摘要具有独立预算；被截断的思考会插入省略号和命名的 end-think 控制 token 后再生成摘要。BRPO 的 advantage baseline 结合折扣后的较早预算奖励与组内平均未来 return。summary policy 在均匀预算先验下，按预算点组成 GRPO 组进行优化。论文称每个实验使用 8 张 A100 80GB GPU，约运行 30 小时。
