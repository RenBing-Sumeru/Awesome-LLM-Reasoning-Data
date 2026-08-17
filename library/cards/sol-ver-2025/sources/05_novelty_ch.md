既有代码数据配方已经使用更强 teacher、self-instruction、生成测试、执行反馈、self-correction 与 preference optimization。CodeT 联合利用代码和生成测试，RLTF 与 code reranking 根据测试结果优化，CodeDPO 构造自生成且经验证的代码偏好；这些组件并非 Sol-Ver 首创。

Sol-Ver 的具体变化是把 verifier 变成共同训练的数据生成器，而不是静态 filter。同一个模型同时学习代码与测试生成，两个角色都从共享 execution tuple 获得 SFT 和 DPO 信号。后续 verifier 输出决定下一轮 Solver 数据，而改进后的 Solver 候选又向 Verifier 提供更有信息的正例与失败例；第三轮组合两轮迭代测试，为该循环加入小型 temporal ensemble。

对本 track 的方向信号因此是操作性的：生成测试成为一等训练记录，拒绝输出被保留为 preference material，verifier refresh 与 data refresh 耦合。该配方也暴露了一个隐藏目标：full-pass rule 决定什么被视为 chosen。

同样必须明确尚未证明的部分。Sol-Ver 不提供 formal verifier、独立 ground truth、公开 data release、递归错误保证，也没有跨编程语言、repository-level task 或 model scale 的证据。可靠复用应比较 fixed verifier、Solver-only、Verifier-only、SFT-only、DPO-only、gold-test filtering、放宽 pass threshold，以及 data/compute budget 匹配的对照。
