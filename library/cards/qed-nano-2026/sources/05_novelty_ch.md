对本图谱而言，QED-Nano 的新意在于：它在一个开放小模型流程中显式连接 rollout 统计、在线 outcome-reward RL、文本状态压缩与 test-time scaling。各个组件并非全新；proof distillation、group-based RL、rubric judging、迭代改进与 inference-time sampling 都有既有工作。真正有用的贡献是论文和官方 artifacts 披露了足够多的设置，使读者能区分各组件的角色与预算，而不是把它们合并为一种笼统的“更多推理”干预。

FineProofs-RL 位于 prompt release 与 trace release 之间一个不常见的中间位置。它为每道题保留一份特定 rubric，并保留用于描述难度的完整 scalar score population，因此能支持单一 pass rate 无法呈现的分布问题。但由于相应证明缺失，其证据远少于 candidate-level rollout corpus。分数数组只能说明结果数量和值，不能说明什么行为获得了这些分数。

rubric 契约也比普通答案匹配更有结构。Gemini 3 Pro 提供题目特定的检查点、零分条件与扣分项，GPT-OSS-20B 将其应用于一份完整自然语言证明。但这不应与 process supervision 混淆：没有任何中间证明步骤被独立检查，也没有带标签发布。0-7 分 outcome score 可以综合多个 rubric 维度，却不提供 step-localized supervision。

Reasoning Cache 为长证明搜索引入一种状态表示。它不是每次都只从原题重新开始长尝试，而是总结局部进展，并让下一次尝试以该摘要为条件。训练时，论文使用冻结的 Qwen3-4B-Instruct-2507 summarizer 与三轮循环；测试时，同一 QED-Nano 系列可被置于迭代 scaffold 中。该设计连接训练时数据组织与测试时计算，但并未证明摘要是无损的 proof state。

该发布还清楚揭示了一个负向边界。FineProofs-SFT 含证明文本，FineProofs-RL 则没有。RL dataset card 把 DeepSeek-Math-V2 生成和 SFT 作为流程背景讨论，但实际 parquet schema 只有题目、rubric、分数数组与统计量。若只读说明而不检查 schema，可能会错误地把统计型 reward artifact 描述成 raw trace release。

因此，应根据披露程度与实验契约比较本工作，而不是依据宣传式排名。论文报告的 proof score 支持该配方在指定算力和 judges 下的可行性，但不能证明发布题目具有代表性、rubric judge 已校准、分数数组足以支持复用，或更大的测试预算会改善底层数据。
