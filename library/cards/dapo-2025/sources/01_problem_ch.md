DAPO 是 2025 年 3 月首次发布的 arXiv 预印本；本卡片以 2025 年 5 月 20 日的 arXiv v2，以及官方 project、DAPO、Hugging Face 和 verl-recipe 产物为依据。论文处理的具体复现问题是：Qwen2.5-32B 上的 naive GRPO 仅得到 AIME 2024 avg@32 30 分，而大规模 long-CoT RL 还会遇到 entropy collapse、题组零梯度、与长度相关的 loss 权重失衡，以及对截断回答施加噪声惩罚等问题（论文 §§1、3-4）。

在 Atlas 中需要区分两层 RLVR 记录。公开层按论文意图包含 17K 道经过处理、带整数答案的数学题；在线层还应包含每题 16 条策略回答、答案提取后的正确性、长度调整、题组保留或丢弃决定，以及 token-level loss 项。当前只公开了处理后的题目—答案行，没有公开变换 trace、在线 rollout、被拒绝题组和更新日志。

该工作归入 Data Construction and Open Release Recipes，因为来源选择、整数答案改写、verifier 设计、rollout 分配和动态筛选共同决定实际训练分布。它不能证明逐步推理正确、跨域 RL 有效，也不是静态 CoT 语料。本卡片通过可定位的 pipeline、超参数、渐进式 AIME 结果、公开行 schema 与发布漂移达到 L4，同时保留来源谱系、去污染、训练 verifier 实现和变换错误率等未知项。
