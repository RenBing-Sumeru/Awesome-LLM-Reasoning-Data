可重建的流水线如下：

1. **来源与 probe 构建。** 从附录 Table 5 列出的公共语料出发，对每个来源依次应用 FineWeb-Edu score `>4`、通用与领域专用 Ask-LLM 前 10% 筛选，以及跨语料 semantic deduplication。每个来源约 10,000 条样本形成 representative subset，再组合成 Code、Math、Knowledge capability probe。Ask-LLM 模型、完整 prompts、去重模型和阈值均未披露。
2. **预训练筛选与混合。** 训练 leave-one-source-out 模型，以 probe NLL 衡量来源影响。方法扩展 AutoMixer，在十个 checkpoint 上估计每条代表样本对三个 capability probe 的 influence；checkpoint 权重线性增加，使后期训练占更高权重。按 token 加权聚合 influence 得到数据集权重。从列出的 1.8T-token 来源池中为两个阶段各采样 2T token，第二阶段提高 OpenWebMath、FineMath、Algebraic Stack、Facebook Natural Reasoning 等专门来源的权重。
3. **中训练中的 model-data co-evolution。** 混合 Dolmino 子集、Nemotron code/math、StarCoder 和八个具名 benchmark 训练集。每个阶段保留 estimated influence 为正的记录，把 influence 聚合为新数据集比例，训练模型后再迭代。论文报告两个各 100B-token 的阶段。Llama-3.1-8B-Instruct 提供 logits，学生模型除训练目标外还最小化 KL divergence。
4. **后训练。** 先在 866K 条 `Tulu-3-sft-olmo-2-mixture-0225` 上训练两个 epoch，再在报告为 6.2M 条的混合上训练四个 epoch：OpenMathReasoning 3.2M、OpenScienceReasoning-2 802K、OpenCodeReasoning-2 2.2M。推理阶段使用 32k 序列和完整 prompt-response 监督。
5. **评测与 artifact。** 在数学、代码、常识与知识 benchmark 上评测 base/final checkpoint。固定提交的仓库提供最小预训练、SFT 与数学评测代码，Hugging Face collection 提供 base/final 权重。精确重建还需要固定的上游版本、入选 ID、分片、随机种子、probe 记录、influence 日志、筛选代码和与论文一致的配置；这些均未提供。

该流水线没有单一全局 reward 或 terminal predicate。positive influence 是中训练的保留规则；KL divergence 与 token-level SFT loss 是训练目标；benchmark 指标是评测输出，不能证明每条入选记录正确。（论文 §§2-4、附录 A；仓库 `pretrain/`、`sft/`、`evaluation/`。）
