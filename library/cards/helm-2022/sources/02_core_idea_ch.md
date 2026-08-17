核心贡献是一个统一评测框架：在标准化 scenario 上评测多种语言模型，并同时报告多类指标，而不是把评测压缩成单一 accuracy。初版报告覆盖 42 个 scenarios、30 个 models、7 类 metric；后续 HELM 在线版本持续演进。

核心机制是显式定义 scenario adapter、prompt/adapter 设置、model adapter 和 metric module，使每次 run 都带有可比较、可复现的 provenance。最接近的比较对象是单任务 benchmark 和 leaderboard；HELM 的方向标签是版本化、多指标的 holistic evaluation surface。
