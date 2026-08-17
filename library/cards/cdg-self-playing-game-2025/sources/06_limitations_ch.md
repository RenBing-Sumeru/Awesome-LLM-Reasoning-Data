只看最终答案并不能证明推理过程合理。错误推导可能偶然得到正确答案，正则抽取或 SymPy 比较也可能漏掉等价表达。流程没有独立验证 Helpful Critic 是否真的找到了第一个因果错误，也没有判断 Misleading Critic 编造的错误是否足够可信。

固定字符串 `\boxed{This critic is not critical.}` 直接参与筛选，形成明显的格式捷径：模型可能学会输出拒绝标记而不分析 critique，语义正确但措辞不同的拒绝也可能被判失败。三个角色来自同一模型家族，容易共享错误或共同适应私有表达习惯；相近 prompt 只能减少表层风格泄漏，不能消除内容泄漏。

不同轮次和不同模型上的证据并不一致，后续自博弈也不是稳定更好。GPT-4o 标注、自我纠错轨迹和 QwQ-32B-Preview 长链语料分别参与下游实验，使因果归因更复杂。官方训练脚本的轮数与学习率顺序未完全对应论文，仓库还跟踪了带竖线的评测文件名，导致 Windows 下普通 checkout 失败。

发布审计仍不完整：本卡未能独立枚举 Google Drive 文件，亦未核实不可变版本、checksum、精确 rollout schema、入选/淘汰数量和逐条端到端谱系。检查到的 GitHub commit 没有顶层 LICENSE，因此代码、rollout 数据和 checkpoint 的复用许可均为 unknown。也没有发现逐条去污染、近重复、角色泄漏或 verifier 校准报告。
