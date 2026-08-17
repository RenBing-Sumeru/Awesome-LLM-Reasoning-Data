论文的初始完整构建包含 11,133 个实例，来自 3,971 个仓库、覆盖 11 种语言；官方 Hugging Face 当前公开的是其中 500 条过滤后 test records，覆盖 7 种语言，并报告超过 80% 为中高难度。单条记录含 repo、base commit、problem statement、gold/test patch、F2P/P2P、环境配置、任务类型和难度。

其终局 verifier 是在合成环境中执行测试，要求候选补丁解决 F2P 且保留 P2P。框架还为强模型失败任务生成 hint-guided trajectories，用作 SFT/agent training。完整论文池、公开 500 集与轨迹数据是不同发布边界，不能合并为同一规模。
