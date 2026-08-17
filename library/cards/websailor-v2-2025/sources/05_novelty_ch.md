最接近的 prior work 是 WebSailor-V1，而不是通用 chain-of-thought distillation。V1 已经使用网络事实图任务、ReAct trajectory、rejection-style cold start 和 agentic RL。V2 在数据侧的变化是更稠密的含环图、用 random walk 替代尝试穷举子图、按 orbit 分配 QA 焦点，以及超越 obfuscation 的不确定性定义。最终稿用 semantic ambiguity、distractor noise、structural constraint 和 3 万余条 instruction pair 使这些变化具体化（§§3.1–3.4）。

环境侧的变化是 simulator/live 双环境架构。离线 Wikipedia 支持快速、可控的算法实验；受管真实网络层则用 cache、retry、QPS 限制、degradation 和 backup 抑制真实 API 方差。这是工程整合，不是已发布的通用 environment，因为代码、snapshot、cache 和 replay fixture 均缺失（§4.2）。

优化器是定制 GRPO，并非全新的学习原理。strict on-policy sampling、token-level gradient、leave-one-out advantage、选择性排除 negative sample，以及大 batch/group 被组合用于昂贵的 agent episode。论文明确认为数据和环境稳定性比细小算法差别更重要。由于 `R_i` 未定义、group size 未知，该优化贡献无法完整重建。

对 reasoning-data 研究而言，方向性新意是把 graph topology、uncertainty type、trajectory selection 和 environment stability 耦合起来。复用时应分别检验 V2 任务结构、SFT 轨迹质量、context 扩大、base-model 变化和 RL 的贡献；没有明确 lineage 时，绝不能把 V1 公开 artifact 归到 V2。
