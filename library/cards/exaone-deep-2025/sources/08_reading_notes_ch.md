- 阅读[官方论文](https://arxiv.org/html/2503.12524)第 2.1 节，记录精确聚合量：1.6M 条 SFT、20K 条 DPO 偏好、10K 条 Online-RL 实例，以及约 12B SFT token。
- 阅读第 2.2 节，确认 thought-tag 加最终答案模板、EXAONE 3.5 Instruct 谱系、SimPER DPO 和自研 GRPO 变体；不要从算法名称推断教师、奖励类型或可验证性。
- 把 32K 最大生成长度、temperature 0.6、top_p 0.95 和重复采样次数视为基准评测设置，而非训练数据生成元数据。
- 使用官方[仓库](https://github.com/LG-AI-EXAONE/EXAONE-Deep)和[模型集合](https://huggingface.co/collections/LGAI-EXAONE/exaone-deep)核验已发布权重与推理材料；已接受元数据中没有 data artifact。
- 复用前阅读 EXAONE AI Model License Agreement 1.1 - NC：模型访问仅能在规定限制下用于研究，也不授予对未披露语料、偏好或 RL 记录的权利。

