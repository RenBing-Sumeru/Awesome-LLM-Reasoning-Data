任务来源分为两组:逻辑社区中的常见谜题类型,以及BBH、BBEH、KOR-Bench等评估套件中的任务概念。论文还加入Mathador、Minesweeper等其他谜题族。对每项任务,作者识别grid size、缺失值、密度或约束数量等参数,人工实现规则,生成实例,执行自动正确性与可解性检查,再用任务专用模板渲染自然语言提示。

难度控制有两个基于模型的边界。上界是DeepSeek R1或OpenAI-o3-mini在10次尝试中仍至少解出一次的最难参数设置。下界使用未具名chat模型,保留通过率大于零且不超过0.5的参数设置。SynLogic-Hard为Qwen2.5-32B-Base采用更宽难度区间。降低难度后,Arrow Maze、Goods Exchange、Kukurasu、Minesweeper、Norinori、Object Counting、Space Reasoning Tree和Wordscapes仍产生零7B训练准确率,因此从SynLogic-Easy移除。

在Hugging Face revision `bb4297b82b9c28ef39249f48386cefd5e856618a`上,Easy含27项任务、15,837条训练记录和270条验证记录;Hard含35项任务、32,840条训练记录和350条验证记录。每项纳入任务贡献10条验证记录,训练条数则按任务不同,并非统一定额。每行提供提示和序列化verifier状态,而不是目标推理回答。当前公开发布没有policy rollout文本、奖励日志、拒绝原因,也没有把提示与每次RL更新所用16个采样回答确定连接起来的ledger。

论文用DAPO改造的GRPO,在Easy上训练Qwen2.5-7B-Base,在Hard上训练Qwen2.5-32B-Base。主实验使用prompt batch 128、group size 16、最大提示长度2,048,每个提示16个rollout。7B设置为学习率1e-6、mini-batch 64、最大回答长度16,384;主32B设置为学习率2e-6、mini-batch 16、最大回答长度28,672。两者均报告clip-high 0.28与clip-low 0.2。采样temperature为unknown。

混合领域实验在7B研究中把SynLogic与17k条DAPO数学提示或约9k条在线平台代码提示组合。大规模Zero-Mix-3用Qwen2.5-32B-Base训练35k数学、9k代码与17k SynLogic提示;该运行使用prompt batch 512与最大回答长度12,288。代码奖励要求格式合规且通过全部测试。这些混合数据支持论文的迁移研究,但不会把公开SynLogic行扩展成数学或代码发布。

本次审计的官方GitHub `main` revision为`d8c527fd17edb739172619efb9b681805fc74b8d`,且没有tagged release。仓库发布生成器、verifier、`task2verifier.py`、奖励参考与Verl集成指导。复现时应同时固定该代码revision与Hugging Face revision,检查每项任务的`game_data_str`,并在训练前测试verifier行为;仓库可访问本身不能建立固定的端到端环境。
