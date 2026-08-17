现有推理训练通常把长 CoT SFT 与一次性 RL 分成两个黑盒阶段。MiroMind-M1 的变化是同时开放两阶段数据，并把 RL 拆成长上下文课程，显式惩罚重复行为。其新意在可复现的多阶段 policy optimization 和完整开放栈；可验证答案、SFT 后接 RL 本身并非新概念。
