已核查的官方产物均未提供训练记录清单、来源级计数或混合权重、模态分配、采集日期、样本级 provenance、训练/评测成员关系、decontamination 程序或语料再分发条款。模型卡只列出宽泛来源类别，其中包括与 Meta AI 的交互，却没有公开样本级权利与同意语境。

对于 Maverick 后训练，SFT 集规模与作者、难度裁判身份与提示、接收阈值、online-RL 目标与奖励、rollout 设置、DPO 偏好来源和优化超参数都是 unknown。对于 codistillation，Behemoth 目标、目标 schema、加权日程以及样本到 checkpoint 的谱系均不可得。安全微调的人类/合成记录和 LLM 分类器同样没有发布。

200 种预训练语言的陈述宽于模型卡明确支持的 12 种语言。Scout 发布的 10M context 规格依赖从 256K pre- and post-training 得到的 length generalization，不能据此断言存在 10M-token 训练记录。2025 年 4 月的报告称 Behemoth 仍在训练且未发布。最后，任何 benchmark 结果都不能证明隐藏训练记录准确、有代表性、无污染或可合法复用。
