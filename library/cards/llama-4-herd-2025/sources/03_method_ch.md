官方模型卡称，预训练数据来自公开可得数据、许可数据以及 Meta 产品与服务中的信息，其中包括 Instagram 和 Facebook 上公开分享的帖子，以及用户与 Meta AI 的交互。模型采用 early-fusion multimodality；视觉编码器基于 MetaCLIP，并在冻结的 Llama 模型配合下单独训练。Meta 还报告了 MetaP 超参数迁移、FP8 训练、200 种预训练语言，以及面向长上下文的专门数据 mid-training。来源清单、模态比例、过滤规则和 split 成员均为 unknown。

Maverick 后训练采用精心筛选的多模态 curriculum：先由 Llama 模型判定难度并删除超过 50% 的简单 SFT 样本，在剩余困难样本上进行 lightweight SFT；随后对困难提示执行 online RL，并在训练与持续过滤之间交替，只保留中等至困难提示；最后以 lightweight DPO 处理响应质量的边角案例。报告没有给出 SFT 作者、裁判 checkpoint、RL 算法或奖励、rollout 数量、DPO 偏好来源、阈值或优化器设置。

Behemoth 属于另一条分支。其后训练会裁掉 95% 的 SFT 数据，使用策略模型的 pass@k 构建难度递增 curriculum，过滤 zero-advantage 提示，在 batch 中混合多种能力，并采样不同 system instruction，底层采用 fully asynchronous online RL。对于已发布模型，只有 Behemoth 到 Maverick 的 codistillation 关系得到明确说明；这些 Behemoth 设置不能泛化到 Scout 或 Maverick。安全微调另行结合 vendor 生成的人类数据与合成数据，并用 LLM 分类器筛选，但记录和筛选模型没有发布。
