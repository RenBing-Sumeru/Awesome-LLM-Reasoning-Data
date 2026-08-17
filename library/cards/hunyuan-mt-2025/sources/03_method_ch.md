General pretraining 据称把中英文与覆盖另外 112 种语言和方言的 1.3T token 结合。专有 quality model 对 Knowledge Value、Authenticity、Writing Style 分别给 0/1/2 分，并按 provenance 加权；discipline、24 类 industry 与 24 类 theme tag 用于平衡和内容控制。

MT continued pretraining 的 monolingual text 来自 mC4、OSCAR，parallel data 来自 OPUS、ParaCrawl 等 source family。fastText language ID、minLSH document deduplication、KenLM perplexity 与包括 CometKiwi 在内的 reference-free QE 负责过滤。RegMix-inspired small-model 实验预测最低 loss 的 mixture，再加入 20% original-pretraining replay；候选比例与 denominator 未知。

Stage-one SFT 约含 3M pair，来源包括 FLORES-200 dev、过去 WMT test set、人工标注的普通话中心少数民族语言数据、DeepSeek-V3-0324 synthetic translation，以及论文所述 20% general/MT instruction component；CometKiwi 与 DeepSeek-V3-0324 GEMBA score 用于筛选。Stage two 通过多轮 many-shot evaluation，并对跨轮评分不一致样本做 expert review，保留约 268K pair。

Translation GRPO 组合 learned translation quality、LLM-judge feedback、terminology alignment 与 repetition penalty。论文观察到后期重复和可能的 collapse，因此加入惩罚；但 optimizer、group size、rollout 数量、prompt 数量、step、reward aggregation、compute 与 checkpoint selection 均未知。

Weak-to-strong 阶段用未公开的多种 setting 生成多个 Hunyuan-MT-7B translation，再用 GRPO 训练 Hunyuan-MT-Chimera-7B 做融合。公开 prompt 有 6 个 candidate slot，但训练记录 schema、generation/retention/rejection log 均未发布。
