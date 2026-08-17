最接近的组件多数已有来源：FineWeb-Edu 提供 educational-quality classifier，Ask-LLM 提供模型式筛选，AutoMixer 提供可扩展的 influence approximation，Dolmino 是中训练基础，Llama-3.1-8B-Instruct 提供 logit distillation，Tulu-3、OpenMathReasoning、OpenScienceReasoning-2 与 OpenCodeReasoning-2 提供后训练数据。

具体变化在于这些组件如何服务于小模型。代表子集被用作 capability probe，而不是直接使用 benchmark 标签；方法在十个 checkpoint 上整合 self-influence 与 cross-capability influence 以设置来源权重；随着模型状态改变重新执行 positive-influence filtering；所得阶段从随机初始化一直贯穿到长上下文 reasoning SFT。论文还逐阶段报告来源权重与 token 预算，使构建假设在配方层可审计。

并非新内容的部分包括上游语料、SFT、KL distillation 和正确性 verifier；该工作也没有形成新的可复用数据集，因为组合记录、抽样 ID、被拒样本和 sample-level score 均未发布。对 reasoning-data 研究而言，方向信号是容量严格受限时的 model-aware mixture design；但复用前仍需验证未公开的 probe/influence 选择是否决定了报告效果，以及方法能否迁移到三个能力域和这些模型规模之外。
