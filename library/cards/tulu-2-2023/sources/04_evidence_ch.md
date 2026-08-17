**70B 端到端比较（表 1）。** Tulu 2 + DPO 70B 在 MMLU、GSM8K、BBH、TydiQA、Codex-Eval、TruthfulQA 和 ToxiGen 上的平均分为 `72.1`，`GPT-3.5-turbo-0301` 为 `72.3`。两者配置并不相同：Tulu 是用公开 SFT 混合数据和 UltraFeedback 偏好对训练的 Llama 2 70B 开放模型，而闭源模型的训练数据和规模未知。因此，该结果支持整套开放配方具有竞争力，不能作为数据单因素的因果证据。

**DPO 规模实验（表 3–4）。** 在固定 Tulu V2 SFT 阶段和模型家族后，加入 DPO 能提升 7B、13B、70B 模型的 AlpacaEval 和 MT-Bench 开放式生成结果；70B 的 MT-Bench 为 `7.89`，AlpacaEval 为 `95.1`。该阶段使用 UltraFeedback、三轮训练和 `5e-7` 学习率；论文也观察到回答变长和多语言能力下降，因此偏好训练的收益不能解释为所有能力普遍提升。
