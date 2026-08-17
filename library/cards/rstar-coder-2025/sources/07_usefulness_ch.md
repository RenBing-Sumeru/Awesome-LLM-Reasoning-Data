对 **Data Construction & Open Release Recipes** track 而言，rStar-Coder 既是构造模式，也是审计案例。

- **测试构造 baseline：**比较直接生成输入输出对与“生成工具函数后执行”的方法。保持题目、候选预算和输入尺度分布一致，以 oracle 输出评估，而不是只看下游分数。
- **Verifier 研究：**分别复现完整输出集合投票、公开代码中的逐输入 plurality，以及可信 oracle 执行；扫描 40%/60% 阈值，保留完整 vote vector，并按来源、rating 和输入尺度统计 false accept。
- **有条件的 SFT 复用：**固定 Hugging Face revision `3a7a0a0636ec96e3c1ec42ebe79ade467caa040d`，保留 `seed_source` 和种子题，在存在键时连接测试配置，遵守 `verified`/`is_passed`，并在隔离环境中重新执行每个所选目标。
- **RLVR substrate：**`synthetic_rl` 与 `synthetic_rl_testcase`，以及对应种子配置，可用于搭建程序化奖励环境。训练前应检查题目/测试 cardinality，解析序列化 JSON 字段，仅在有明确政策时删除含糊或恒定输出题，并校准 reward false accept。
- **扩展实验：**独立改变唯一题目数、每题解答数和每题测试数。论文对比为这一设计提供动机，但发布没有给出干净复现所需的冻结成员列表。
- **发布审计模板：**公开来源 URL 与权利、模型 snapshot 与 prompt、种子、全部候选生成、生成器/验证器代码、vote vector、执行结果、拒绝原因、污染匹配、精确训练 manifest 和 checkpoint hash。

复用等级：在完成权利、版本、连接和 sandbox 检查后，可有条件用于竞赛编程 SFT、蒸馏与 RLVR；适合作为 verifier 与数据 lineage 审计参考；由于题目和解答本身属于训练材料，不适合作为干净评估集。论文 benchmark 增益应视为其协议下的下游可用性证据，而不是每条发布记录都正确的证明。
