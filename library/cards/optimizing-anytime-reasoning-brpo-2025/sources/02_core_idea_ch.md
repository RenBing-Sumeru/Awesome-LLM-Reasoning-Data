AnytimeReasoner 采样思考预算，在该预算处截断完整思维链，并要求 summary policy 从此前缀提取答案。规则验证器在每个采样预算处给出 0/1 奖励。BRPO 将较早预算的奖励与组内相对 return baseline 结合，用于降低 thinking policy 的方差；summary policy 则在均匀预算分布下单独优化。
