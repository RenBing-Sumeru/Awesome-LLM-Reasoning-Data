对本 atlas 而言，贡献是披露辨析，而不是开放配方。模型卡把高层训练说法与具体 safety/agentic evaluation 条件连接起来；发布公告把大规模 RL 与 model-based reward 主张和真实 production evaluation 实践连接起来。

相对一般 model card 的变化是，文档让多个接口可见：用于 refusal 的 demonstration；synthetic/production/adversarial input-filter data；内部 model-graded refusal record；公开与内部 safety benchmark；以及公告级的 agentic reward-model 主张。这些是不同的数据/反馈面，不是一个已发布 dataset。

并非新的部分：SFT、RL、人类反馈、可验证奖励、模型评分器、过滤、拒答训练、benchmark evaluation、silent deployment testing。来源没有指明实现、mixture 或因果贡献。它是方向信号，因为前沿主张日益跨越模型训练、filter、reward model 和 live evaluation；审计必须保留接口与 unknown，而不能推断统一、可复现的 pipeline。

复用或比较前，应检查 reward-model identity、traffic governance、filter/model separation、prompt/task overlap、configuration pin、score aggregation，以及移除 safeguard 的能力测试和 deployed behavior 的关系。
