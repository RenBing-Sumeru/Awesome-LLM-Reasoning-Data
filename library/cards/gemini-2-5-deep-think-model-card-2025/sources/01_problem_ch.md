Google DeepMind 于 2025 年 8 月 1 日发布了 20 页的 *Gemini 2.5 Deep Think - Model Card*。该文档描述了一个增强的 Gemini 2.5 家族推理模型：它使用 parallel thinking 和强化学习，接收文本、图像、音频与视频输入，支持 1M-token context，并可输出最长 192K tokens 的文本。它是厂商 model card，而不是同行评审论文。

Atlas 关心的问题不是 Deep Think 是否取得高 benchmark 分数，而是这些分数背后的数据与反馈究竟披露到什么程度。Model Card 列出了宽泛的预训练来源；经筛选的多模态 instruction-response pairs、人类偏好数据和 tool-use data；新增的多步推理、问题求解和定理证明材料；以及高质量数学解答的精选语料。它还提到去重、安全过滤、质量过滤、novel RL，以及来自人类和 critic 反馈的强化学习。但它没有发布记录、schema、数量、mixture weight、source manifest、generator、reward 定义、分支、critique 或 item-level lineage。

因此，一条已披露类型的后训练记录可能包含 instruction、多模态 context、response、人类偏好或工具使用，也可能包含多步推理、定理证明或数学解答。这只是记录类别说明，不是可恢复的数据集 schema。并行假设与 critique 被描述为产品行为，但来源没有说明它们是否会被保存、选择、蒸馏或回用于训练 trace。

本 Card 属于 `frontier_reports_data_disclosure_ledger`，因为它区分了模型专属披露、家族级上下文与推理时行为。它不把产品访问、192K 输出上限或 benchmark 分数当作可复用数据发布的证据。完整官方 Model Card、官方 model-card index、发布文章和 Gemini 2.5 家族报告足以支持 L4；缺失的数据、奖励、预算和版本事实仍明确标为未知。
