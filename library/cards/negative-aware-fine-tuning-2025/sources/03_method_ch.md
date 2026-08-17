实验从 Qwen2.5-Math-7B 和 Qwen2.5-32B 开始，使用 DAPO-Math-17k；该数据集的 prompt 带整数 ground-truth answer，许可证为 Apache-2.0。每个 rollout step 抽取 512 道题，以 temperature 1.0 为每题生成 16 条答案。程序化 answer verifier 给出 r∈{0,1}；实现保存 token-level old-policy likelihood 与组内成功率。只有同时包含正负答案的 group 才进入 NFT update。数据分成 16 个 mini-batch，执行 16 个 gradient step；320 个 rollout step 合计略多于 5,000 个 gradient step。

共同 learning rate 为 1e-6，并使用 linear warm-up。NFT 继承 VeRL/DAPO 的 dynamic sampling、token-level loss normalization 和无 KL regularization 设置。7B 训练在 64 张 H100 上使用 4K context；NFT-32B 使用 16K context 和 128–256 张 H100。被截断答案标为负例，negative-ratio clip 为 1.0，困难题加权采用论文中与 GRPO 对齐的选项。评测覆盖 AIME24、AIME25、AMC23、MATH500、OlympiadBench 和 Minerva Math；训练验证使用 math-verify，最终评测使用 simpleRL。

官方仓库提供训练脚本、verifier code、评测工具和下载脚本；NVIDIA 以非商业模型许可证发布 NFT-7B 与 NFT-32B 权重。可复用轨迹发布还应包含精确数据/模型 commit、全部生成答案、抽取答案、verifier 结果、截断标记、likelihood array、dynamic-resampling 历史和随机种子；目前未确认这些 run-level artifact 完整发布。
