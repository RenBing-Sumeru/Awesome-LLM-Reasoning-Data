Gemma 3 的核心数据机制是规模化 sparse-logit distillation：按 teacher probability 为每个 token 采样 256 个 logits，把未采样项置零并重新归一化，再用 cross-entropy 训练 student。Teacher checkpoint 与 serving/query budget 未知，因此 target distribution 具体而来源不透明。

Instruction tuning 随后结合未披露 large IT teacher 的 improved distillation，以及基于 improved BOND、WARM、WARP 的 RL。反馈族包括 weight-averaged human-feedback RM、code execution、math ground truth 与 safety preference。它们分别观察偏好、可执行性、答案正确性或 policy compliance，但不能自动证明 faithful reasoning 或没有污染。

报告从未明确说明后训练蒸馏是 online 或 on-policy；不能用引用方法补足缺失 rollout 事实。方向信号是跨模型规模混合 learned/programmatic feedback，再进行 QAT 和开放 checkpoint；核心边界是数据与 reward infrastructure 仍封闭。
