*Seed-Coder: Let the Code Model Curate Data for Itself* 是 ByteDance Seed 的 2025 arXiv 报告，配有官方代码、项目页和 Base/Instruct/Reasoning 权重。它研究如何减少手写过滤并扩展代码模型训练数据，覆盖 GitHub/web 获取、学习式质量评分、continued pretraining、synthetic SFT、DPO、LongCoT warmup 与 GRPO 全生命周期。

标题需要边界说明：初始代码质量 ground truth 来自 DeepSeek-V2-Chat；未具名外部 LLM 合成并判断 SFT 数据与测试；DeepSeek-R1/open trace 提供 reasoning warmup。只有后期 DPO candidate 与 GRPO rollout 明确由 Seed-Coder policy 生成。因此“self-curation”是 model-centric construction，而不是目标模型独立生成并验证全部记录。

数据对象包括文件、repository sequence、来自 140K 个筛选 repository 的 74M commits、web code document、FIM sequence、instruction-response pair、生成的 solution/test/revision trace、chosen/rejected pair 与 long-CoT coding trajectory。发布物包含权重和 recipe 描述，但不包含数据、1.3B scorer、generator prompt、test、sandbox、preference record、reward code 或记录级 lineage。

本 Card 属于前沿披露台账，因为论文给出异常具体的规模与训练设置，同时在反馈有效性、provenance、license 和复现方面仍有关键不确定性。
