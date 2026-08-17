一句话贡献：WinoGrande 用受约束众包加 AFLite，把小规模专家 Winograd Schema 扩成一个公开的大规模 benchmark，并主动剔除 embedding 分类器容易猜对的样本。

核心机制分两步。第一步让 AMT 工人按 twin-sentence 结构写题，用 WikiHow 随机锚词、长度和重叠率约束来减少重复套路，并覆盖社会常识和物理常识。第二步由独立工人验证题目是否答案清楚、是否不能仅靠局部词关联作答；随后用小子集训练 RoBERTa 得到样本 embedding，再用随机划分的线性分类器 ensemble 迭代删除高置信可预测样本。

评测对象是二选一：给定句子和两个候选 referent，预测 option 1 或 option 2。反馈契约是对官方标签的 exact-match accuracy；dev 可用发布脚本评估，test 通过隐藏标签 leaderboard。最近的对比对象包括 WSC、DPR、SuperGLUE-WSC、COPA、KnowRef、Winogender，以及 SWAG 一类 adversarial filtering 思路；方向标签是 commonsense multiple-choice benchmark debiasing。
