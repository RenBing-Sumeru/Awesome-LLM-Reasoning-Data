Synthetic treatment 说明不足。Teacher/generator、prompt、answer、类别比例、filtering、acceptance rate、日期与来源权利均未知。发布没有确认 Base 与 Base-woSyn 是否匹配总 token、non-synthetic corpus、random seed、optimizer step、compute、curriculum 或 checkpoint selection。

因此，with/without-synthetic 对比的因果识别有限。Synthetic augmentation 可能解释分数变化，但 token replacement、sampling、compute 或 selection 差异也可能有贡献。报告的收益与退化没有开放 uncertainty、significance 或 per-item analysis。

Instruct pipeline 基本封闭。General SFT data、safety example、instruction mixture、preference record、annotator、reward model、reward calibration、PPO objective、KL control、rollout count、optimizer、schedule 与 agent-training trajectory 均未披露。命名 safety SFT 与 RLHF/PPO 只能识别阶段家族，不构成可复现 reward contract。

全局 decontamination 缺失。一般 deduplication 不等于 benchmark-specific membership test、code-repository overlap、near-duplicate audit、hash、revision pin 或 false-negative analysis。ArcAGI-V2 的明确 non-use 只覆盖一个 benchmark，不能建立全局 train/evaluation split。

Budget-conditioned training 也不透明。发布命名 512-token interval training 并开放可见 reflection tag，但没有 interval mixture、compliance metric、loss、reward、truncation rule、记录语料或 faithfulness audit。可见的 consumed/remaining-token 陈述不应被假定为忠实内部推理。

最后，Apache-2.0 覆盖已发布代码和权重工件，不覆盖未开放的公开、购买、vendor-generated、synthetic-instruction、SFT、RLHF 或评测数据。Source-level authorization、license、consent 与 redistribution right 仍未知。开放权重不等于开放训练数据。
