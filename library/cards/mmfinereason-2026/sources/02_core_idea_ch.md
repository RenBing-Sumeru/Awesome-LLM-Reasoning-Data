核心贡献是把语料规模与数据效率连接起来：先生成 181 万条干净的长思维链语料，再根据较小模型的重复作答成功率，选出 12.3 万条仍有训练价值的难例。质量和难度是两个独立关卡，因此样本必须先可信，之后才能估计训练价值。

Google Scholar 引用数：26（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MMFineReason%3A+Closing+the+Multimodal+Reasoning+Gap+via+Open+Data-Centric+Methods&author=Honglin+Lin&hl=en）

开源数据：有。
- 名称：MMFineReason 系列，包括 MMFineReason-1.8M、MMFineReason-123K 和 230 万条完整数据池。
- 官方地址：https://huggingface.co/collections/OpenDataArena/mmfinereason
- 规模：筛选后 1,810,926 条；难例子集 122,603 条；完整数据池 2,286,130 条。
- 形式与许可：Apache-2.0 许可的 Parquet 数据集，包含多模态提示、生成的推理过程、答案和元数据。
- 用途：多模态推理 SFT、数据消融、难度感知筛选，以及后续 RL 的初始化。
