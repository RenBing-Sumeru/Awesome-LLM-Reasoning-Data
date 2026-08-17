实验估计计算昂贵，而且没有与发布内容进行统一协调。论文对每个被分析句子采样 100 条 keep 与 100 条 remove/resample continuation，并在每个位置采样 100 个 forced-answer completion。作者说明，100 个样本使 accuracy 的最坏情况 95% confidence interval 约为 ±10%。但 dataset card 把发布的 chunk 文件描述为通常含 10–100 条 continuation。现有发布没有 valid、incorrect、missing-answer、malformed-answer 或 API-error count manifest，因而无法证明每个论文估计与每个发布文件具有同样的有效 sample size。

公开计数使用了互不兼容的单位。20 道题、40 条 Qwen base response、`selected_problems.json` 中 106 个筛选候选、九个 model-by-solution-type branch、20,997 个 indexed file row、183 个 Parquet shard，以及 nested continuation arrays 不能互换。Qwen sanity branch 只有两个 problem directory，Llama tree 也没有对应 sanity branch。如果缺少不可变的 branch/file/chunk/continuation manifest，用户可能夸大发布规模、把不同变体当成独立任务，或静默重复原始与索引表示。

生成谱系不完整。代码支持四种 provider mode 并默认使用 Novita，但每条 continuation 中并未保存精确 provider、endpoint、model checkpoint revision、request date 与 code revision。代码暴露的 seed 44 没有发送给 API provider，因此 nominal seeding 不能建立 replayability。temperature 0.6 与 top-p 0.95 已有记录，代码默认值还包括最大 16,384 个 new token 与 275 个 chunk，但这些设置不能替代 record-level provenance。

来源 provenance 与 split semantics 仍未解决。generator 默认使用 MATH train split，而发布仅暴露一个文件索引 `default` split，也没有为每个 problem 提供精确 MATH revision 或 source split。当前没有发布可供复用的 train/dev/test 划分、精确或语义去重报告、prompt contamination audit，也没有 benchmark-overlap analysis。20 道入选题会在不同模型与干预 branch 中反复出现；若使用 file row 创建下游 split，很容易引入 question-level leakage。

verifier 与语义 filter 都有已知 failure surface。boxed-answer extraction 与 normalization 可能错误处理 malformed output，或把有区别的答案字符串折叠在一起；各类失败数量没有汇总。all-MiniLM-L6-v2 的固定 0.8 threshold 可能把 paraphrase 判为 counterfactual，也可能把语义不同的陈述判为相似。GPT-4o 的 function 与 dependency label 来自 2025 年 4–5 月的自动判断，并非经独立验证的人工 annotation。

因果解释仍是初步的。作者指出 resampling 成本高、多个充分路径导致的 overdetermination 尚未解决，也没有正式研究 error correction。receiver-head score 受到句子位置 confounding。attention suppression 要求模型处理分布外信息，而 logits 只是句子语义的 proxy。resampling、attention 与 masking 之间的一致性可以减轻、却不能消除这些识别问题。

负面 trace 已被保留，但审计不完整。incorrect base-solution branch 与 `is_correct: false` continuation 支持有价值的失败分析，可是发布没有报告保留或过滤了多少 incorrect、unparseable、empty、provider-error 或 partially generated record。generator error object 可能被保存，但其全发布频率与处理方式未知。缺少这类核算，会使模型失败与基础设施或解析失败难以区分。

版本与权利信息同样不完整。Hugging Face `main` 有 176 个 commit；文件索引上传在 2025-08-25 分四个 commit 完成，但没有 semantic release 或 immutable manifest。消费者应固定已检查 revision，而不是依赖移动的 `main`。论文/OpenReview 内容采用 CC BY 4.0，代码采用 MIT，HF dataset card 声明 MIT，但没有分析上游 MATH derivative-data rights。这些 license 适用于不同层，不应合并为笼统的复用结论。

最后，venue 尚未确定。官方来源把本工作标为提交到 ICLR 2026 并 under review，而不是已经在那里 accepted 或 published。通过 arXiv 可以核验 citation identity，但 venue status 必须保持暂定，直至出现官方 decision 或 proceedings page。
