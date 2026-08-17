家族论文没有发布不可变的端到端 manifest，用于连接每个来源、样本、合成轨迹、环境版本、rollout、reward、checkpoint 和 benchmark 结果。逐环境终止谓词、reward 函数、校准、阈值、假接受或假拒绝行为、rollout 组和 reward-hacking 审计均不完整或为 unknown。

发布并不均一。部分 Nano 数据公开，部分需要门控或批准，文档还列出私有第三方和 NVIDIA 内部数据。家族级再发布权映射、来源许可证以及分配到 Nano、Super 和 Ultra 的情况均为 unknown。仅使用开放数据的 reference recipe 无法复现使用额外专有数据的运行。

Nano 模型卡在一张数据表中展示 141 个数据集和 10.648T token，却在另一处称约训练了 25T token。没有不可变的混合账本和这些数值的定义，无法只凭官方材料解决两种计数的关系。表中 Training 100%、testing 0%、validation 0% 的陈述不能替代任务级公开训练/评估切分或家族级重叠审计。
