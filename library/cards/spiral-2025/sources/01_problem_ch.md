SPIRAL 研究的是：LLM 能否不依赖固定的人写问题—答案语料，而是通过与“当前版本的自己”进行多轮对抗，在游戏规则与终局结果提供的反馈下获得可迁移推理能力。arXiv v3 的 camera-ready 首页标注“Published as a conference paper at ICLR 2026”；arXiv 记录显示首版提交于 2025 年 6 月 30 日，官方 OpenReview 条目是会议记录。（论文第 1 页；arXiv 记录；OpenReview forum `7Yayy5fNLg`。）

这里构造的对象不是静态 QA 对。一个训练 episode 从 TextArena 游戏和初始状态开始，同一共享策略按照角色交替接收自然语言 observation、生成完整的 reasoning/action response，再执行解析后的动作，最终由 environment 给出结果。learner 将角色回报、每个游戏/角色单独维护的 EMA baseline 以及 role advantage 附着到该策略产生的各回合上。对 Kuhn Poker 与 Simple Negotiation，论文把历史动作拼接进当前 observation，以维持 Markovian context。（论文 §3、Algorithm 1；Appendix D.1。）

它归入 Data Construction and Open Release Recipes，因为训练流由持续变化的 policy、opponent 与 environment 共同生成。它与 agent trajectory 和 RLVR 相邻，但不是冻结的轨迹数据集，也不是 step-level process supervision 发布，更不能证明自然语言 reasoning 是 faithful 的。其 L4 证据边界是：论文、代码、环境、配置、模型与对比数据集 URL 均已核验，开放的是构造 recipe；支撑论文 checkpoint 的精确在线 rollout 并未以 immutable data 形式发布。
