对 `data_construction_open_release_recipes` track，Explorer 是把可变环境转化为 post-training episode 的具体蓝图。重实现时可拆分种子选择、动作条件任务 refinement、状态采集、轨迹总结、episode 判断、成功筛选和训练子集筛选，并记录原始、接受、抽样与最终 SFT 各 population 之间的每次转换。

论文也适合用于 verifier 设计与审计。100 条人工对照说明，LLM 成功筛选器需要混淆矩阵，而不能只给出未经限定的“successful”标签。更强的复现应保留 verifier logit 或 rationale、人工分歧、全部拒绝与 near-miss 路径、按任务/网站/长度分层的结果、可行时的隐藏状态检查，以及对独立 judge family 的敏感性。

在受控实验中，该配方可以支持以下对照：固定任务与变化任务、原始与接受 episode、只用成功样本的 SFT 与含失败样本的 mixture、不同滚动过滤规则、独立与共享 generator/verifier，以及固定模型和 compute 下的 25/50/100% 训练子集。官方代码可作为这些模块的起点，但实时页面漂移与缺失运行设置阻止精确重建原始记录。

证据充分支持的复用等级是**阅读/审计与配方重实现参考**。所报告语料的训练复用仍被阻塞，因为语料本体、成员清单、内容权利、隐私复核和 split/去污染记录都未核实。94K 应引用为“论文报告的接受集合”，不能写成可下载数据集。
