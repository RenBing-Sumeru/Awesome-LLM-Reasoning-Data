对 `environment_agent_trajectory_data`，MobileGym 给出一种“生成时即具备 replay 条件”的 episode 蓝图：固定 template 和采样参数，序列化初始 JSON 状态，记录 screenshot/action/model-response step，保留终局状态与每个 goal-check 结果，并保存终止和 side-effect 诊断。研究者可用公开 recorder/explorer 同时收集成功与失败，而不是只导出正例 transcript。

对在线 agent training，可复用 baseline 不是预打包 rollout 数据集，而是“环境加 reward”配方：复现 Train160 采样，为每个 GRPO group 分叉相同状态，对照二元成功与终局 progress reward，并消融 unclean/false-complete/overdue 折扣。由于这里的 reward 是终局子检查密度而非 action-level process supervision，严谨实验应记录子检查相关性并测试 reward gaming，再决定是否把它称为过程反馈。

对评测与 verifier 研究，Test256 可分别报告 SR、PR、FC、OT 和 USE。可执行审计包括：对每个 `check_goals` 做 mutation test，构造满足字段但违背用户意图的对抗状态，检查 alternate-valid state、`expected_changes` 覆盖、seed 稳定性和 AnswerSheet 格式敏感性。论文的 VLM-judge 错误集说明，应把 code predicate 与独立人工标签比较，而不是默认程序化检查即为 ground truth。

对 sim-to-real，可把 59-task 研究用作协议起点：声明 task-selection bucket，列出被排除的不安全/不等价任务，同时保存 simulator 与 device rollout，并在两个环境分别报告 base/trained 绝对结果。不能只概括为 95.1% retained-gain ratio。

复用等级：适合作为固定版本的环境、评测面和在线 RL recipe；所谓训练复用，是在固定 release 下生成新 rollout，而不是下载论文 rollout corpus。Companion data/content 限于非商业使用；与论文结果直接关联的复现主张，在精确 run commit、rollout ledger 和 checkpoint 公布前仍受阻。
