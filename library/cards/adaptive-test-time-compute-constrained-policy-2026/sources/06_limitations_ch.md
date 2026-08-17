该框架使用离散预算集合，并需要昂贵的离线 utility table。标签依赖具体模型、prompt、temperature、parser 与分布；API 或 checkpoint drift 可能使其失效。48 个响应在不同 b 下产生的窗口数不同，因此各 utility estimate 方差不等。成本函数是样本数，不是实际 token、时延、价格、能耗或显存。

实验每个数据集仅使用 200 道题，MATH 集中于难度 2–4，并只有一个简单领域对照。Classifier 含一次模型调用得到的 entropy estimate，因此路由并非纯文本。论文承认 continuous budget、online adaptation、multi-objective constraint 和剩余 oracle gap 尚未解决。Raw prompt、response、window、label、seed、去污染和训练后 policy 未确认为发布。形式保证针对经验目标与 imitation error，不能保证 distribution shift 下的部署正确性或预算可行性。
