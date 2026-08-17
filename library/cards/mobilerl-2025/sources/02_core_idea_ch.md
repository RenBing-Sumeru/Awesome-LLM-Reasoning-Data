核心贡献是 Difficulty-Adaptive GRPO（AdaGRPO）：它不把 online trajectory 当作被动数据流，而是让 trajectory distribution 本身随训练动态变化。warm-up policy 在 Android 环境中生成 episode group；terminal binary outcome 按路径长度调整；high-advantage success 可进入 replay buffer；low-advantage trajectory 被剪除；持续产生全零 reward 的任务则降采样并最终移除。

state-action 对象很具体。每个 turn，policy 同时观察当前 device screenshot、compressed XML accessibility hierarchy 与原始 instruction，再输出 reasoning 及 Tap、Type、Swipe、Long Press、Launch、Back、Home、Wait 或 Finish。Android OS/application dynamics 产生下一屏与 XML state。episode 在 successful state 中选择 Finish 或到达 50-turn horizon 时结束；单独选择 Finish 并不构成 success verifier。

反馈契约是 mixed。AndroidWorld training instance 具有 rule-based success check。AndroidLab 的 1,103 个生成训练任务没有对应 test，因此先由 strong proprietary VLM 给完整 screenshot/action trace 打标签，再用这些标签微调 GLM-4.1V-9B-Thinking reward model；入选版本在 1,000 条 verified trace 上达到 86% accuracy。该 learned verifier 能看到 task、screenshot sequence、XML/page state 与 action，但 binary label 不能保证没有 collateral/unsafe action，并可能继承 teacher/judge bias。

SPA 只对成功 trajectory 按其长度相对于同任务组最短成功路径进行缩放；过早失败仍为零。AdaPR 把 top-advantage fraction 放入 256-entry replay buffer，并把选中 replay 与 fresh on-policy data 混合。negative pruning 通过丢弃低 advantage negative，把 positive-to-negative ratio 限在 1:2。FCF 对连续两个 epoch 全零的任务执行三 epoch cooldown，sampling weight 为 `exp(-f)`，持续失败后永久移除。

与 DigiRL 等 offline mobile imitation 或 offline DPO/action dataset 相比，MobileRL 从 current policy 的 closed-loop consequence 学习；与 single-step GUI RL 相比，它优化完整多轮 episode。真正的变化不是单独发明 GRPO、replay 或 curriculum，而是把它们按 task difficulty 集成进昂贵的并行 Android sampling。审计边界同样重要：官方 release 只有 evaluation code 与 checkpoint，没有决定 sample efficiency 的 adaptive training record。
