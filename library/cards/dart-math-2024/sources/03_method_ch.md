输入是原始 MATH 训练题和作者修正后的 GSM8K 训练题。DeepSeekMath-7B-RL 通过 vLLM 以零样本自然语言 CoT 方式生成响应，输出上限为 2,048 token，top-p 为 0.95，temperature 为 1.6。附录 B.2 说明，作者以 0.1 为步长在 0.3–1.8 之间搜索后选定 1.6：较高 temperature 更快达到覆盖，而不低于 1.7 时会出现无意义输出。该生成模型也负责估计难度。

每条原始响应先经正则表达式抽取最终答案，再用 SymPy 与参考答案比较。实现覆盖数字、符号、矩阵/向量、区间、Boolean 表达式、日期和时间。通过验证只产生答案级 Boolean 接受标签；任何中间步骤都没有标签。论文明确提醒，最终答案正确不必然意味着中间推理正确（论文 §2.1 注 2；附录 B.2）。

预算分配有三种方案。仓库中的 VRT 复现命令为每题采样 52 个原始试验并保留正确项；最终 Uniform 发布以每题 40 个正确响应为目标。对于用于估计通过率的更大 pool，附录 B.2 则报告以每题 192 个正确响应为收集目标，并复用这些候选。Prop2Diff 计算 `1-pass_rate`，将其转换为已接受响应目标，最难题最多 192 条，并向上取整以尽量保证每题至少一条合成响应，然后采样到目标或实际试验上限。论文报告约 1.5 亿个原始样本、超过 95% 的目标达成率和约 160 个 A100 GPU-day；仓库同时承认，精确复现 Prop2Diff 仍需人工步骤。

通过验证的合成响应会与原始 MATH/GSM8K 训练记录合并。DART-Math-Hard 与 DART-Math-Uniform 只提供 train split 的 `query`/`response` 表；在本次核验的 revision 上分别为 585,392 与 590,705 行。补充 pool 暴露已接受响应的沿袭与正确性字段，query-info 发布则包含逐 job/总采样数、正确数、通过率和 Bernoulli 标准差。尚不能确认完整的被拒响应文本已经发布。

训练采用 Alpaca instruction template 和 Transformers SFT，sequence packing 长度为 4,096 token，batch size 为 64 个 computation sequence，Adam 的 weight decay 为 0，warmup ratio 为 3%，再做 cosine decay。报告的最大学习率为：Mistral-7B 取 1e-5，DeepSeekMath-7B 与 Llama3-8B 取 5e-5，Llama3-70B 取 2e-5；Llama3 训练一轮，其他 DART 运行默认三轮。复现时应固定 GitHub commit、全部 HF revision、修正版 GSM8K revision、模型 checkpoint、随机种子、parser/SymPy 版本，以及 Prop2Diff 的精确上限与 curation manifest。
