与对每个采样 patch 都运行仓库专属测试套件的软件 Agent RL 相比，Dockerless 从既有的执行标签 issue/patch 记录中学习 surrogate feedback contract，并将其应用于最小镜像。与只判断 prompt 和 patch 文本的 verifier 相比，它把验证拆成动态问题生成、并行的只读仓库调查、证据化回答和最终判断，使仓库状态与证据收集轨迹成为奖励生成对象的显式组成部分。

对本图谱而言，方向性信号是把原本分离的两条管线连接起来：程序化执行为 verifier 训练创建标签，而完整的下游 Agent episode 则获得学习型 patch-level 分数，用于筛选和 GRPO。论文还对比了按学习型分数和按可执行环境奖励进行全局 16K→4K rollout 筛选，并提供了 compiler-dependent gap 的证据。

学习型代码判断、ReAct 风格搜索、rejection sampling、SFT 筛选、GRPO 与基于测试的标注各自都不是新方法；贡献在于特定的、以 reference patch 为条件的构建与部署配方。不应将其表述为完全消除执行、解决 reference-free verification，或证明学习型分数等价于测试。
