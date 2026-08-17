最接近的特权状态 baseline 是 AndroidWorld、OSWorld 等 benchmark，其成功可借助应用或环境内部状态检查。AndroidDaily 为闭源商业应用改变了反馈接口：任务作者外显 obligations、质量标准与 negative constraints，在隐藏状态不可得时，由 VLM 判断完整可观察轨迹（论文第 1-2.2 节；Table 1）。

该方法也不同于粗粒度 terminal VLM 打分。GRADE 先构建持久、逐步骤关联的证据，再执行分层 verdict 检查与 arbitration。由此产生的数据对象既有 episode label，也有过程诊断信号，使视觉遗漏、未覆盖义务、边界违规与 blocker 可供检查，而不是把全部反馈压成一个无结构分数（论文第 3.3 节；Algorithm 1）。

同样要明确哪些并非新贡献：本文没有提出 Android、ADB 控制、通用 VLM judging、实体设备 rollout、pass@1 评测或 AndroidDaily 这一名称。官方 2025 年前身包含 235 项任务，而本文报告 94 个应用上的 350 项任务并引入 GRADE；论文没有披露逐项前身映射或 overlap audit。扩大应用/任务规模并评测 12 个模型属于规模与工程整合，不会自行证明出现新的 verification primitive。

对 reasoning-data 研究而言，方向信号是：在内部状态不可访问时，episode schema 与反馈契约被显式绑定。复用前仍需核查当前任务/guideline 发布、evaluator 实现与 prompt、backbone/版本 pin、app/account snapshot、干预 ledger、原始证据保留、前身重合与许可；这些信息都不能由 benchmark 表现推断。
