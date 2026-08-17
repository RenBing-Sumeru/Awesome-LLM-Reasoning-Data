官方论文报告：在早期常识 benchmark 上很强的模型，经过 adversarial filtering 后仍明显低于人类表现。项目页给出约 95.6% 的 human performance 参考，并保留 leaderboard 历史，同时说明 leaderboard 已关闭。

单条样本的决定性证据很直接：模型选择的 option 是否等于 gold ending。证据边界也必须写清：aggregate accuracy 取决于 split、prompt/scaffold、选项顺序，以及 test label 是公开还是隐藏。公开 train/validation 记录对现代 LLM 有很高 contamination 风险。
