论文最清晰的因果案例是 MATH problem 4682：问题要求计算十六进制 \(66666_{16}\) 的二进制位数。句子 6–12 期间，期望正确率持续下降；当第 13 句提出把十六进制数转换为十进制时，正确率显著上升。后续 trace 得到正确的 19-bit 答案，而 forced-answer curve 没有识别出同一个关键规划动作。这只是 case study，并非总体可靠性估计，但它说明了“当前已具备多少信息”与“某句是否重定向后续计算”之间的差别。

在 40 条主 Qwen trace 中，Plan Generation 与 Uncertainty Management 句的平均 counterfactual importance 高于 Fact Retrieval 或 Active Computation 句。forced-answer importance 则更强调 Active Computation。这一对比支持论文较窄的主张：干预定义会改变哪些推理功能显得重要。它并不证明规划句在所有模型、任务与 decoding setting 上都具有普遍因果性或总是有益。

white-box analysis 提供了相互收敛但仍有限定条件的证据。receiver heads 指下游 attention 会收窄到特定句子的 attention head；其 head-level kurtosis 的 split-half reliability 为 \(r=.84\)。kurtosis 最高的 16 个 head 关注相似句子的平均 pairwise correlation 为 \(r=.56\)，而任意 head 的参考平均值为 \(r=.35\)。论文报告的配对检验中，Plan Generation 与 Uncertainty Management 句获得的 receiver-head attention 高于 Active Computation 句。论文还报告，消融 receiver head 对答案正确率的损害大于随机 head 消融；不过附录结果表明，不同 head 数量下的绝对消融比较并非都具有决定性差异。

sentence-masking analysis 提供了另一种对应关系。屏蔽对某个句子的 attention，并测量后续 token logit KL，可生成 causal-link map；该 map 与计算成本高得多的 resampling alternative 呈正相关。在 problem 4682 案例中，显著 link 连接了对 leading zero 的初始怀疑、后续验证、发现差异与修正。由于 masking 会输入分布外信息，并依赖 logits 作为语义 proxy，这种一致性是方法收敛的证据，而不是精确 causal graph 的证明。

论文 v4 把 masking analysis 扩展到 Qwen3-30B-A3B 在 2,492 道 MMLU 题上的正确 CoT；这些题来自 non-reasoning accuracy 低于 50% 的问题。在 subject level，较高平均正确率与更强 close-range link（\(r=.44\), \(p<.001\)）和更弱 long-range link（\(r=-.54\), \(p<.001\)）相关；mathematics 与 physics 呈现论文报告的近距/远距差异。这些结果属于论文侧 MMLU graph，不是已发布 MATH rollout corpus 中的 record。

对 artifact 的检查证实，公开发布包含的不只是论文派生图表。原始树暴露了 base problem、正确与错误 base trace、sentence chunk、forced-answer 与 resampling continuation arrays、answer/correctness 字段、function/dependency label，以及逐 chunk importance statistics。`incorrect_base_solution` 与 `incorrect_base_solution_forced_answer` branch 仍被保留，单条 rollout record 也可以带有 `is_correct: false`。但 incorrect continuation、malformed answer、missing answer 和 failed API request 的精确总数没有汇总。

规模主张需要协调，而不是简单强调。论文使用 20 道主问题和 40 条 Qwen base trace；`selected_problems.json` 含 106 个符合条件的筛选候选；HF 原始树有九个 model-by-solution-type branch；文件索引 viewer 估计 20,997 行；nested `solutions.json` 通常包含 10–100 条 continuation。这些都是不同计量单位。发布规模与 benchmark findings 证明了 artifact 可获得且具有实验用途，却不能证明数据质量均一、覆盖完整、谱系干净或适合训练。
