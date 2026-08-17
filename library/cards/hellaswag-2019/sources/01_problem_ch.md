HellaSwag 是 ACL 2019 的 benchmark 论文，有官方项目页和 GitHub 数据发布。它问的问题很具体：当容易被模型利用的表面线索经过 adversarial filtering 过滤后，语言模型是否还能在短场景中选出合理续写。

一个样本包含 ActivityNet Captions 或 WikiHow 来源的 context、四个候选 ending 和一个 gold ending。反馈契约是多选 accuracy：模型选项是否等于发布或隐藏测试标签。它属于 benchmark/evaluation surface，不是训练 recipe 或 reward model；atlas 价值在于展示 adversarial filtering 如何提高常识续写评测难度，同时保留简单评分器。
