Gemini Robotics 是 Google DeepMind 于 2025 年发布的报告，研究如何让 Gemini 衍生的多模态模型从 embodied understanding 走向可执行的物理动作。对 Atlas 而言，关键对象不只是 benchmark 分数，而是把当前场景图像和自然语言任务指令映射为连续低层机器人 action chunks，并使用专家机器人示范和蒸馏后的视觉语言 backbone。

主要动作数据来自由专家远程操作的 ALOHA 2 机器人 fleet，采集持续 12 个月，形成跨数千任务的数千小时示范。更广的训练 mixture 还包括 web documents、code、image/audio/video、embodied-reasoning data 和 VQA data。具体记录、比例、split、权利、失败 episode 和选择规则均不可用。

本报告属于 disclosure ledger，因为它对数据规模、specialization、trajectory intermediate 和真实环境评测接口的披露较具体，同时保留专有语料、Gemini 训练步数、optimizer、权重和 trainer 未公开。达到 L4 后，本 Card 可用于机制筛选与审计，但不能使机器人动作数据可复用。另行开放的 400 条 ERQA benchmark 是评测 artifact，不是专有动作语料。
