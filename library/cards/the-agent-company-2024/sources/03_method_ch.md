**输入与任务构造。** 作者先用 O*NET 29.1 job-task list 与美国劳动力统计确定职业覆盖，再结合合作者领域经验与 LLM brainstorming 形成具体任务。brainstorming 模型、prompt、采样参数、拒绝率与随机种子均未披露。20 名计算机专业学生、软件工程师和项目经理工作两个月，合计约 3,000 person-hours；部分任务构造超过十小时。每个入选任务都被人工实现为意图、加权 checkpoint、evaluator、初始化/结束逻辑、依赖与 container image。质量控制包括截图证据、evaluator 测试、第一作者代码审查、最终人工 double-check 和独立 checkpoint 重要性评审，但逐任务 review log 未发布。

**环境与 rollout。** 一次 run 会重置任务的 Docker 化 Linux workspace 及自托管 GitLab、ownCloud、Plane 和 RocketChat 服务。智能体只接收 `task.md` 中的英文任务说明，随后通过 browser、terminal、code/files 与通信 action 工作。41 个任务包含以 Sotopia profile 表示的模拟同事；论文 baseline 使用 Claude-3-5-Sonnet-20241022 作为这些 NPC。主要实验采用 OpenHands CodeAct + Browsing，不同论文版本分别出现 0.14.2 与 0.28.1，并报告 OWL RolePlay 对照。正式论文评测十二种模型 backbone。标准重复 seed 协议、decoding temperature 及跨配置统一的 step/token budget 均为 unknown。

**验证与输出。** 任务特定 Python evaluator 检查最终/中间环境状态或选定轨迹信息。51 个任务对复杂或非结构化输出使用 LLM-based evaluation，论文实验采用 Claude-3-5-Sonnet-20241022；作者报告 evaluator 经 3–5 名贡献者和 CI 审查/测试，但没有发布独立校准语料。evaluator 产生 checkpoint 结果与加权分。全部 checkpoint 通过才算 full completion；partial score 聚合 checkpoint 得分并加入论文定义的 full-completion bonus。智能体主动退出或 budget 耗尽会结束 episode，但不等于成功。

**发布路径。** 每个官方 experiment run 都位于 `evaluation/1.0.0/` 下一个有名称的子目录。已检查的 2024-12-17 OpenHands 0.14.2 + Claude-3.5-Sonnet run 包含 run README、逐任务 result JSON、逐步截图和压缩 trajectory JSON，并保留成功、部分得分与零分任务。leaderboard 提交说明要求 results、trajectories、screenshots 与 README，但尚未逐个核验所有历史第三方 run 的完整性。论文没有报告为训练用途筛选轨迹的质量 filter。

**用途与复现边界。** pipeline 输出是带 checkpoint 和终态反馈的 benchmark evaluation episode，不是经 teacher 选择的训练样本。证据支持的用途仅为 evaluation。复现时应固定 benchmark release 1.0.0、论文版本、主代码 commit、experiment run path/commit、task image、service backup、OpenHands 版本、模型 endpoint、NPC model 与 judge model。已接受证据没有提供不可变 image digest 或完整 run manifest；train/validation/test split 与去污染协议也未披露。
