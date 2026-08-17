OLMo 2 32B 是一项 Ai2 技术发布，其公开的 32B 路径结合 OLMo-Mix-1124 预训练、Dolmino 中训练，然后进行 SFT、DPO 和基于 GRPO 的 RLVR。发布说明称 32B base model 训练 1.5 个 epoch、最多 6T token。它公开链接了相关模型、代码和选定数据 artifact，而不只是点名它们。

数据对象可被部分检查。SFT 查看器显示 866K 个 train 记录，字段为 `id`、`messages` 和 `source`；RLVR 查看器显示 29.9K 个 train 记录，字段为 `messages`、`ground_truth`、`dataset`、`constraint_type` 和 `constraint`。preference mix 也已发布，但已检查卡片没有建立其完整 chosen/rejected schema。

Track 12 的核心在于区分已链接查看器与完整披露账本。查看器可以证实选定记录和字段，但本身不能建立来源到阶段的分配、合成 generator 身份、偏好谱系、生产 reward 实现或运行级可复现性。

