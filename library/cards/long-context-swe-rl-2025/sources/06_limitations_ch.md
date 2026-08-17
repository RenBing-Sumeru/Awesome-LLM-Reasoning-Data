从方法上看，对跨越数千 token 的 episode 使用终局二元 reward 极其稀疏。把一个 scalar advantage 广播给全部 token，无法定位究竟是哪条命令、哪次 observation 解释或哪项编辑造成成功/失败。作者还指出，binary success 会鼓励 agent “不惜代价”提交 patch，而不是在不确定时 abstain。不完整测试可能接受行为错误的 patch，脆弱测试也可能拒绝有效替代方案；论文没有报告保留测试集的 false-positive/false-negative 审计。

选择过程改变了可见行为分布。RFT 只保留 6,548 条通过测试的 episode 并丢弃失败尝试，因此 warm-up 数据会过度代表 base agent 已能解决的任务。RL 只有在 group-relative reward 有差异时才保留成功与失败的学习信号；零 advantage group 不产生更新。在线 rollout 的频率、构成以及训练后是否持久保存均未知。score 3.0 对应的精确元数据字段，以及 Stage 2 选择的不等式/统计窗口也未说明。

公开材料不足以 replay episode。任务行包含 `repo`、`base_commit`、`environment_setup_commit`、test patch、F2P/P2P 列表和安装元数据，且官方宣布了 7,500 个 container；但没有精确的 7,249/2,028 任务到镜像 manifest、不可变 OCI digest 集、依赖 lock、随机种子、action/observation log、提交 patch 记录、reward log、checkpoint 或训练配置 bundle。每个任务 10 条 rollout 之间的 reset 语义——包括文件/进程是否残留、timeout cleanup 和 network state——均未知。

版本漂移并非假设，而是已有证据。论文固定 vLLM 0.7.4，一次 inference 设置变更已经导致训练退化。本审计将公开执行 fork 固定在 commit `980d0cca8aa4e73f1d9f894e906370bef8c4de8a`，而数据集后来增加了 6,542 行的 `filtered` split。这个后续对象不能与论文的 6,548 条 RFT trajectory 或 7,249 任务训练池混为一谈。

污染控制范围较窄。May/June 被排除在训练外，但论文未报告全面的仓库去重、SWE-bench overlap audit、模型预训练暴露分析，也未校正反复监控 Verified-50 的影响。因此，这些分数不能证明在干净 benchmark 边界下对未见任务的泛化。

权利、隐私与安全边界仍未解决。论文与 SWE-rebench card 声明 CC BY 4.0，执行 fork 使用 MIT，数据 card 要求同时遵守每个源仓库许可；这些声明没有统一解决 issue、comment、test、dependency、生成 trajectory、模型输出或 checkpoint 的权利。论文没有说明 PII/consent/takedown 流程。agent 可在 Kubernetes pod 内执行任意 shell command 并安装 package，但 network isolation、credential、syscall/capability 限制、恶意仓库处理和 supply-chain control 均未披露。
