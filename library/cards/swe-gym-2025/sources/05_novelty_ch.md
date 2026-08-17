SWE-Gym 的贡献是把真实仓库 issue 转化为可复用训练环境，而不是静态 issue-patch pair。它在一条配方中连接 snapshot identity、dependency、test、action trajectory、terminal outcome、agent fine-tuning、outcome-verifier learning 与 inference-time candidate selection。

发布内容区分 policy data 与 verifier data。成功 episode 成为 behavior-cloning target；失败 episode 保存在单独 sampled corpus 与平衡 reward-model mixture 中。这样既能学习应模仿的动作，也能学习哪些完整轨迹更可能解决任务。

新意是 environment-backed data lifecycle integration，而不是新单元测试概念或 online RL 算法。Repository-level test 仍不完美，rejection-sampling SFT 仍是监督式过滤学习。对本轨道而言，开放工件与 task、image、trajectory、model、license、manifest 之间的可见缺口同样重要。
