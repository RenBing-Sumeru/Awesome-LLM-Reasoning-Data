报告未发布训练数据、dataset manifest、记录 schema、保留/拒绝样本、reward-model 权重或偏好对。它没有列出 raw web、proprietary、购买数据和大多数开源来源的名称，也没有提供 mixture weight、来源权利、逐来源数量、split、去重或去污染结果。

reward model 与答案匹配机制只在高层描述。它们的训练数据、calibration、阈值、失败率和对 shortcut optimization 的脆弱性均未知。agent 训练材料同样无法直接复用：虚拟环境、环境版本、状态重置、动作 predicate、标注覆盖和 replay 信息均未说明。报告的基准结果不能将收益归因于某一构造阶段，也不能验证隐藏训练数据是否可审计。

