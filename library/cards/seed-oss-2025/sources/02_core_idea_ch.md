发布包含三组 Apache-2.0 36B checkpoint：`Seed-OSS-36B-Base`、`Seed-OSS-36B-Base-woSyn`、`Seed-OSS-36B-Instruct`。Base 在 pretraining 中包含 synthetic instruction data，Base-woSyn 则排除该类数据，因此这对权重使 synthetic augmentation 可以在 checkpoint 层进行研究。

Pretraining 总量为 12T text tokens，来自三类粗粒度来源：公开互联网数据、通过外部 vendor 合作购买的数据、ByteDance Seed 内部团队生成的数据。Knowledge cutoff 为 2024 年 7 月。精确数据集、vendor 身份、generator model、类别权重、语言、领域与 item-level provenance 未披露。

Instruct 模型增加可控推理接口。它在字面名称为 `seed:think` 的标签中输出可见 reasoning，并定期生成 `seed:cot_budget_reflect` 记录，估计已消耗与剩余 budget，之后再输出 final answer。发布称训练广泛覆盖 512 倍数的预算，但没有开放这些记录或训练目标。
