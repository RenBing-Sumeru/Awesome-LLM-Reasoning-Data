1. **一句话定位：** 论文提出多维 probing 框架和 MRMBench。

2. **方法抓手：** 为每个维度构造二元容易任务与三元困难任务。将 reward model 的中间表示或输出接入轻量 probe。

3. **数据抓手：** MRMBench 官方集约 167K 个实例。

4. **证据锚点：** 多维 probing 与 PPO 下游表现的 Pearson 相关系数超过 0.8。

5. **复用决定：** 诊断 reward model 在六个属性上的强弱。最大风险是六个维度并非正交。
