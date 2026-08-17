题目池首先收集 AI-MO/aops 与 AI-MO/olympiads 中的纯文本 Olympiad 风格问题。构建流程排除依赖图片、过于简单、表述不良、过短、纯计算或来自较容易竞赛的条目，并使用 GPT-5-Nano 再做一轮质量筛选。所有 2025 年竞赛题均被排除，题目还会与 IMO-ProofBench 和 ProofBench 做模糊匹配，之后再按题目文本精确去重。发布中没有 fuzzy-match threshold、candidate pairs、decision log 或 rejected-prompt manifest。

随后，Gemini 3 Pro 为每道题生成一份 0-7 分的特定评分方案。rubric 描述应获得分数的检查点、应记零分的条件和扣分项。在离线难度标注阶段，Qwen3-4B-Thinking-2507 名义上为每题独立生成 128 个证明尝试，GPT-OSS-20B-medium 对每次尝试评分。FineProofs-RL 最终记录保留 rubric、score 数组、score/7 reward 数组、数量、均值和标准差，但丢弃全部证明尝试及每份证明对应的评分解释。

固定版本 parquet 包含 5,227 条记录。直接检查发现，4,773 条恰有 128 个分数，453 条有 62-127 个分数，另有一条含 256 个分数；较短数组的长度从 62 到 127，且主要集中在 126-127。所有记录的 `num_rewards`、score list 长度与 reward list 长度一致；各字段均无 null，reward 全部等于 score/7，重新计算的均值在 `1e-6` 容差内一致。这些完整性检查只能验证已存储数组，不能验证不可见证明的数学正确性。

curriculum selection 将离线总体与在线 RL 区分开来。论文排除 base model pass@1 不低于 0.7 的问题，以及在难度 rollouts 中从未成功的问题。FineProofs-RL card 还给出 reward mean 不高于 0.7、reward standard deviation 高于 0.08 的条件。保留题目仍可能含零分尝试，但全失败题目被排除。非 128 条记录和唯一 256 条记录出现的原因未披露。

在线训练采用 asynchronous streaming GRPO。对每道入选题目，当前 policy 生成 16 份长证明；一个 batch 含 64 道题，因此共有 1,024 个样本。GPT-OSS-20B-medium 按完整证明给出 rubric score。论文报告的 optimizer 最多允许五个 gradient step 的 off-policy lag，entropy coefficient 为 0.0001，constant learning rate 为 `1e-6`，且不使用 KL regularization。actor temperature 为 0.8。发布配置把 generation 上限设为 49,152 token，论文则将最大 response length 约述为 50,000 token。

Reasoning Cache 改变了 rollout substrate。训练时，一个冻结的 Qwen3-4B-Instruct-2507 summarizer 把局部证明进展压缩为文本状态。下一轮 rollout 以原题和该摘要为条件，发布配置使用三轮 reasoning/summarization cycle。每个 cache state 采样 16 个候选证明，再对 rollouts 子采样用于更新。对应摘要和与 state 对齐的证明文本均不在 FineProofs-RL 中。

前置 SFT 分支是独立对象。DeepSeek-Math-V2 为 FineProofs-SFT 在约 4,300 道不同题目上生成 7,500 份证明。结构筛选保留含闭合 reasoning 与 proof 区段的输出，其中包括部分低分或错误证明。该阶段教授证明写作形式，但也导致长度膨胀、重复与绕行；从冗长 checkpoint 开始的早期 RL 据报约有 60% 的 overflow 或 truncation。

model card 报告训练执行 150 个 optimization step，使用 12 个节点、每节点 8 张 H100，其中包括 7 个 generator node、4 个 trainer node 和 1 个 grader node，共四天、9,216 H100-hours。测试采样使用 top-p 0.95 与 top-k 20；grader 使用 temperature 1.0 和 medium reasoning，cache summarizer 使用 temperature 0.7。评估时，Reasoning Cache、Self-Check、Nomos、RSA 与 DeepSeekMath-style scaffolds 把 inference 扩展到单次证明之外；最大 RSA 设置平均每题约使用 205 万 token。
