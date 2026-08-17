1. **评测：** 评测多模态 ORM、GenRM 或 LLM-as-a-Judge，并按感知、幻觉和推理子集报告结果。

2. **训练：** 用作训练前诊断集，确定 reward model 更缺视觉识别还是逻辑比较能力。

3. **迁移或部署：** 验证新 RM 是否真正改善下游 BoN；必须使用独立 policy 和固定候选预算，不能只报告 benchmark accuracy。
