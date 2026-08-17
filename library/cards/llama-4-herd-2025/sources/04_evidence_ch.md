官方 [Meta 发布报告](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)支持以下披露：early-fusion 预训练、超过 30T 的整体混合、200 种语言覆盖、使用专门数据的 mid-training、Maverick 的 SFT—online RL—DPO 顺序、删除超过 50% 的简单数据、持续难度过滤、Behemoth codistillation，以及彼此独立的 Behemoth 后训练配方。报告还明确说明 Behemoth 当时仍在训练且没有发布。

官方 [Maverick 模型卡](https://huggingface.co/meta-llama/Llama-4-Maverick-17B-128E-Instruct)与 [Scout 模型卡](https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E-Instruct)确认了公开/许可/Meta 产品数据来源类别、约 22T 与 40T 的模型级 token 总量、2024 年 8 月 cutoff、12 种受支持语言、自定义 Llama 4 Community License 和模型特征。官方 [Llama 4 collection](https://huggingface.co/collections/meta-llama/llama-4)确认 base 与 instruction-tuned Scout/Maverick 权重已经发布；[meta-llama repository](https://github.com/meta-llama/llama-models)提供推理与许可材料。

这些产物没有发布训练语料、SFT/RL/DPO 记录、Behemoth 目标、难度标签、奖励栈、裁判实现或 split 清单。因此，benchmark 表只能证明官方报告的模型在相应评测协议下呈现了某些行为，不能证明隐藏训练数据的质量、来源或可复现性。
