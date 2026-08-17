
最接近的基线不是单轮数学 RLVR，而是依赖固定 demonstration 或 off-policy experience 的 Web 智能体训练。行为克隆只学习 expert action；DigiRL 与 AWR 复用旧轨迹；WebRL 还加入 GPT-4 生成数据，并单独训练 outcome reward model。同期的 multi-turn on-policy 系统主要面向游戏或代码环境，而 search-agent RL 往往把交互限制为简单 API call。WebAgent-R1 对 Web 数据闭环的改变，是从当前策略收集完整浏览器 episode，并立即用环境自身的终局规则优化这些 episode。

各个组件本身并非全新：WebArena 及其 rule-based evaluator 早于本工作，行为克隆、GRPO、并行 rollout、上下文压缩和交互预算扩展也都是既有思路。区别性贡献在于把它们组合到纯文本、长程 Web 交互中：BC 提供能够触达正奖励的初始策略，异步浏览器实例生成成组 current-policy episode，dynamic compression 使这些 episode 可训练，M-GRPO 则直接使用内置终局检查器，而不依赖 replay buffer 或学习式 outcome reward model。对本图谱而言，方向信号是 rollout group、浏览器状态、结果规则和交互上限共同成为推理数据契约的一部分；这并不证明二元奖励轨迹天然高质量，而且在线 episode 未发布也限制了对轨迹多样性与失败覆盖的直接比较。
