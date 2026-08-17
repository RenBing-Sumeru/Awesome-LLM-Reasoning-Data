构造从 12 个仓库中与 issue 关联的已合并 pull request 开始。属性过滤要求改动测试相关文件并链接 issue，得到 14,333 个 PR；DeepSeek 意图分类加人工 feature 复核后剩 2,931 个候选；base-commit 环境设置、gold patch 前 FTP 失败和之后执行通过的筛选将其缩减到 580 个；GPT-5.2 再审计语义、必要性和结构质量，移除 52 个，最终得到 528 个实例。

issue 文本提供 feature request，开发者讨论可作为 hints。DeepSeek 生成概念解释、目标预期、实体目的和必要性标签；gold/test patch 分析锚定文件与实体；基于测试的文件消融辅助判断必要性；固定 taxonomy 组织最小有序步骤。两名作者检查 50 个 auditor 接受和 50 个拒绝候选，与 GPT-5.2 在 96/100 个案例上一致，但完整构造提示、输出、拒绝项和人工标签没有发布。

论文描述了按 release 构建的 Environment Docker image，以及每次评测使用的隔离 Instance Docker。仓库被重置到 base commit、克隆并按需安装。智能体接收 feature request 和 FTP tests，然后搜索、检查、编辑和测试，直到输出补丁；PTP tests、gold/test patches 和推理参考是评测侧资产。

完整评测在全部 528 个实例上以 DeepSeek V3.2 驱动 AutoCodeRover、TraeAgent 和 mini-SWE-Agent。每个 agent-instance 仅运行一次，temperature 0、top-p 1，智能体最多生成 4,096 tokens，summarizer 上限 8,192 tokens。Lite 用随机局部搜索选择 100 个任务，使三种配置的观测 patch-success 和 apply-success 率接近完整集；它不是独立 holdout。
