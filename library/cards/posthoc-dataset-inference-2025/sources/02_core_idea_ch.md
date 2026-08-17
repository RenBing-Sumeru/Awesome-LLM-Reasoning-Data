本文的贡献是一种用于 dataset inference 的“校准合成参考集”接口。每个自然 suffix 与生成 suffix 共享同一个 prefix，从而缩小位置与局部上下文差异。text-only classifier 测量剩余的自然—生成分布差距；combined classifier 则同时接收文本与由目标模型似然导出的 membership-inference feature。feedback contract 检验 combined classifier 的配对区分能力是否高于纯文本区分能力；多次单侧检验的 p-value 通过 Sidak correction 聚合，低于 0.05 时被视为集合级成员证据。

这个接口能观察文本空间与目标模型 score 空间中的总体可分性，但看不到目标模型真实的训练 manifest，无法证明单个 suffix 的成员身份，也无法判断授权或法律状态。未能拒绝 null hypothesis 只能算 inconclusive，不能作为“未使用”的证据。

最接近的前序工作是 *LLM Dataset Inference: Did you train on my dataset?*：它聚合 membership-inference signal，但假定存在匹配 held-out set。本文用 suffix-completed synthetic reference 替换这一现实中常缺失的对象，并加入生成差距的 post-hoc calibration 与正向 feature weight。因此，该方向属于通过构造评测数据开展 provenance audit，而不是 reasoning trace training 或 process supervision。
