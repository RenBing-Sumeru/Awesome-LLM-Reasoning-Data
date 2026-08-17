SFT 样本从开放数据集与 web resource 中筛选/合成。Query filtering 使用 Qwen2.5-VL 删除不可验证或内容贫乏的 query，并最小改写歧义。规则 filter 删除重复、不完整、格式错误、跑题/有害 pair；Qwen2.5-VL 衍生 reward model 从正确性、完整性、清晰度、有用性与视觉利用等维度判断。Long-CoT 筛选偏好低 pass rate 或较长回答，删除无需图像也能被 Qwen3-30B-nothink 解出的视觉数学题、错误终局、重复、语言混杂与无充分推理的猜测。

蒸馏先用 off-policy teacher response，再让 student 生成 on-policy sequence 并对齐 teacher logits。Reasoning RL 的开放与专有来源经过预处理和人工标注；初期 Qwen3-VL-235B-A22B 为每个多模态 query 采样 16 个回答并删除 0/16 成功项，再通过初步 RL 删除改进潜力低的来源。最终约 30K 条 query 每题采样 16 个回答，删除 pass rate 超过 90% 的 easy query，按试验确定的比例混合任务，并用 SAPO 优化。

General RL 覆盖 VQA、captioning、OCR、文档解析、grounding、时钟识别、指令遵循与定向失败 prompt。规则 reward 处理 ground truth 与格式约束；Qwen2.5-VL-72B-Instruct 或 Qwen3 judge 针对细腻任务与 reference 比较。具体 verifier、judge prompt/revision、reward 权重、rollout 温度、接收率与训练超参数均未披露。

