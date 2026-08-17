发布证据具体但并不对称。NeurIPS 2025 官方 proceedings 将 BMMR 记录为 Datasets and Benchmarks Track 论文。实时 Hugging Face Dataset Viewer 在唯一的 `default/train` split 中显示恰好 88,991 行和 3 个字段：字符串 `id`、由 `{from, value}` 组成的 conversation 消息列表，以及图像路径字符串列表。原始仓库文件树另有 `trainset/bmmr-train-80k.jsonl` 与图像压缩包，以及 `testset/BMMR.tsv` 与 `BMMR_mini.tsv`。GitHub README 明确指向评测集和训练集，代码则要求评测 TSV 含 `question`、`image`、`answer`、`task_type`、`cot`、`language`、`category_id` 等字段。

论文给出较详细的组成统计：总计 109,449 道题；Train:Eval 为 88,991:20,458；29 种图像类型；Eval 的 5 个难度等级分别有 5,783、3,824、3,321、3,462、4,068 题。Train/Eval 中选择题分别为 58,740/10,685，道开放题或填空题分别为 30,270/9,773。这些数字确定了目标对象，并与 Train viewer 的行数一致；但公开 Train schema 没有暴露题型、语言、taxonomy、难度、原始来源或质量控制状态，无法独立执行分层核验。

下游模型证据支持“BMMR-Train 在论文设置下可作为 SFT 干预”。作者微调了 5 个 Qwen2.5-VL 与 InternVL2.5 变体，并报告多个学科上的提升；例如，论文报告 Qwen2.5-VL-3B-Instruct 在 ICTs 上相对提升 72.28%，InternVL2.5-78B 在 Health 上相对提升 43.34%。主 benchmark 表还显示许多当前模型绝对分数较低，且学科差异明显。这些是训练模型与 benchmark 证据，不是对逐条轨迹忠实性、来源干净程度或许可兼容性的验证。

验证器证据衡量的是一致性，而不是 ground-truth 校准。论文比较 BMMR-Verifier 与 GPT-4o 及人类标注：与 GPT-4o 的回答级/步骤级一致性为 91.67%/89.21%，与人类为 95.00%/93.71%，平均为 93.34%/91.46%。人类比较从 Gemini-2.5-Flash、InternVL3、Qwen2.5 和 InternVL2.5 生成的 5 万条轨迹池中随机抽取 1,000 条。由于公开产物没有这些样本、标注者标签、分歧矩阵、验证器分数、判定阈值与 checkpoint，目前无法复现实验，也无法据此估计假阳性率。

产物检查还进一步缩小了可复现边界。公开评测脚本实现最终答案抽取与等价判断，而非过程评分；所检查的官方仓库与数据集中均没有验证器 checkpoint、训练集、rollout 语料或步骤标签文件。代码仓库没有正式 release，数据集 Hub commit 也仍可变化。因此，venue、Train、Eval 和答案评分已核实；BMMR-Verifier 与完整判定谱系仍只有部分证据。
