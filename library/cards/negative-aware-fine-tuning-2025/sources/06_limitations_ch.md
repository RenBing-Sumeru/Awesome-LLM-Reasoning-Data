NFT 假设答案级 reward 可靠，并仅用 16 个样本估计逐题成功率。false negative 会直接压低正确轨迹，false positive 则进入 positive likelihood term。把所有截断答案视为负例还混淆了正确性与长度。全对或全错的 group 会被过滤，因此训练分布受到当前 policy 难度与 verifier 行为共同塑造。严格 on-policy 等价结果不覆盖长期 off-policy 复用，也不在无额外假设时覆盖非二元 reward 或其他 clipping 选择。

实验仅限 Qwen 数学模型和 DAPO-Math-17k；对代码、开放式 judging 或 noisy reward model 的迁移未知。7B 与 32B 条件使用不同 context 与算力规模。虽然官方代码已发布，但仓库页面 commit history 较短，复现应固定版本。代码/数据使用 Apache-2.0，而 NVIDIA 模型权重使用非商业许可证。完整在线 rollout log、verifier 决策、数据 revision、去污染分析和逐 run 随机种子均未证实发布。当前 arXiv v3 作者列表与较旧 project BibTeX 也有差异，引用元数据需人工协调。
