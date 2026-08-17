现有证据支持按下列步骤重建流程，同时必须分开记录论文阶段计数与公开发布计数。

1. **获取论坛讨论。** 收集 620K 条 AoPS discussion，排除 Middle School Math。原始 scraper 与不可变 source-post manifest 是内部实现，没有发布；当前构造文档只把 AoPS-Instruct 指为相似公开输入，并明确说明它不是原工作输入。
2. **抽取并分类题目。** Qwen2.5-32B-Instruct 抽取 580K 个问题，标记 proof/multiple-choice/binary/invalid 类型，移除不适合格式后剩 550K，把 proof 转为 answer-form question，并从 discussion 抽取 final answer。
3. **去污染。** 用 LLM prompt 比较标准化题目与常用数学 benchmark，得到论文阶段的 540K 计数。candidate pair、judge output 和移除决定未发布。
4. **生成 CoT。** DeepSeek-R1 与 QwQ-32B 对每题采样最多 32 个 candidate，temperature 0.7、top-p 0.95、maximum 16,384 tokens。根据 Qwen2.5-Math-72B-Instruct 的 32-generation pass rate，为已知答案的困难题分配更多尝试。Qwen2.5-32B-Instruct 按 extracted answer 等价过滤；no-answer 与 converted-proof item 使用 majority candidate answer。5.2M 个 candidate——1.0M 来自 QwQ、4.2M 来自 R1——过滤后留下 3.2M，分别为 0.5M 和 2.7M。
5. **bootstrap TIR。** LIMO-Qwen-32B 以相同 decoding value 生成 1.2M 条 Python-interleaved attempt；超过八次 code execution 时终止。要求 final answer 正确、实际使用 code、最多两个 code block，并通过 Qwen2.5-32B-Instruct novelty/significance judgment，得到 15K stage-0 集合。
6. **迭代 TIR。** QwQ-32B 以 constant learning rate `5e-6` 微调七轮；700K 次 attempt 在移除错误/无代码记录后得到 260K。先后在 CoT 与 QwQ solution 上训练的 intermediate 14B model 生成最终 1.7M TIR corpus。由于 novelty/significance filtering 降低下游性能，后续阶段关闭该筛选。
7. **编码 tool budget。** 随机指定一至八次允许的 code execution，在 prompt 中显示剩余次数，并丢弃超过指定 limit 的 attempt。公开 TIR 仍是一段 text string，没有 normalized call/observation ledger 或 sandbox hash。
8. **构造 GenSelect。** 每题形成八个不同 group，每组有 2–16 个 candidate summary，且至少含一个正确与一个错误 solution。QwQ-32B 生成 1M 条 comparison，只保留选中 correct-answer candidate 的记录，得到约 565K。Qwen2.5-32B-Instruct 清理长 comparison trace，但在 summary 上训练的模型损失约 1–2 个百分点。
9. **训练与部署。** 主要模型在约 5.5M 条 CoT/TIR/GenSelect row 上进行六轮 answer-level SFT，使用 AdamW、weight decay 0.01、cosine schedule、10% warmup、global batch 1,024、模型规模特定 learning rate 和四个 checkpoint averaging。另有 2.2M hard subset 支持下一阶段。Kaggle 获胜 14B recipe 则在排除 converted proof 的 2.2M DeepSeek-R1 CoT 上训练八轮，再以 learning rate `1e-5` 在 15K stage-0 TIR 上训练 400 steps；它没有使用 GenSelect。

复现必须固定 dataset revision `d3d08664755704f422af97d43a7ff0ded4bd95df` 与 code commit `74b8649734a6ecc2d3beca89311e1a5e02da48fa`。获胜 inference sandbox 允许六次 code call，每次 timeout 两秒，且只展示 output 前 200 个字符；该 scaffold 不是公开数据中的逐条字段。
