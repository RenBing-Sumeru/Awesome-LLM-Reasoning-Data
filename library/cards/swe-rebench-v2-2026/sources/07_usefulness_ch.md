对 `environment_agent_trajectory_data` 而言，可复用对象是 episode substrate，而不是轨迹语料：把仓库初始化到 `base_commit`，向智能体暴露任务说明与工具，在下游收集 state/action/observation 事件，并把 parser 计算出的 F2P/P2P 终态附着于完整 patch episode。训练管线不能把发布的历史 gold `patch` 误当作已观测的智能体轨迹。

用于 agent RLVR 时，主发布的 32,079 条记录可以在提交 patch 后提供二值终态 reward；未恢复 F2P 与回归 P2P 列表可用于失败诊断，或谨慎设计 partial reward。在线训练前应使用 OCI digest 固定镜像、禁用或记录网络访问、增加 timeout、以原始日志校验 parser，并隔离 held-out 任务。官方发布没有证明该 reward 会带来训练收益。

用于 SFT 与 curriculum 时，任务说明、gold patch、interface 描述、难度和病理元数据可形成监督修复示例或支持子集选择。但这种复用是有条件的，并非自动安全：PR 生成说明需要泄漏审计，gold patch 与测试需要权利检查，来源与 benchmark 重叠需要测量，而且官方没有 train/validation/test 隔离来保护评测。

对 `data_construction_open_release_recipes` 而言，论文给出了仓库 mining、可复用 setup 合成、parser 生成、修复前后全测试集 oracle 抽取、清晰度筛选与诊断增强的具体蓝图。可执行对照包括改变 setup 重试次数、用人工标注日志校验 parser、以经校准的人类/LLM 混合替代三模型一致筛选，以及量化每个 filter 对语言与仓库覆盖的影响。

固定版本的任务与环境可用于评测和 verifier 审计，但当前主发布应视为有条件的训练复用，PR 层还需要额外重建环境。在完成不可变回放、重叠/污染、权利、隐私、泄漏与失败保留审计前，不应进行无条件训练复用。即使这些检查未完成，该工作仍可直接作为构造配方与审计参考。
