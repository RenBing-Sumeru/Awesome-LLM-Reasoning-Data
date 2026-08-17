论文在 GSM8K 和 MBPP 上实验，并在一个包含 150 道 numeric-answer、no-LaTeX、Level 1 题目的 MATH subset 和完整 HumanEval test set 上进行 transfer evaluation。在 7B 和 13B 实验中，相比已有 self-improvement 或 verification baselines，论文报告数学任务绝对提升 6-17 个百分点、代码任务提升 4-12 个百分点。这些数字测量的是 generator、verifier 与 inference budget 的组合配方，而不是每个 label 或 preference pair 的质量。

预算匹配比较支持迭代采集主张。V-STaR 优于一个从初始 SFT generator 一次性抽取全部 48 个候选的单轮 generator-plus-verifier baseline。在 MBPP 上，各轮 verifier 的提升大于 generator 的提升；第 4 轮仅增加 0.3 个百分点，说明该设置中边际收益递减。

在作者的 LoRA 实现和相同训练数据下，随着 search 扩大，DPO verifier 的候选排序优于其 ORM-style baseline：ORM 在 GSM8K 上超过 4 个候选后便不能有效 search，在 MBPP 上超过 16 个候选后弱于 DPO。这是在单篇研究中的 objective-and-implementation 对比，并不证明所有 DPO verifier 都优于所有 ORM。

可选的 verifier-in-loop MBPP 变体在 3 轮后报告 53.2 Best-of-64 与 46.34 Pass@1，但作者认为它没有带来显著增益。测试时曲线还显示 Best-of-k 在 k 至少为 16 时趋于饱和，而 V-STaR 相对 majority voting 的优势在更大 k 下缩小。这些发现同时揭示了额外 inference compute 的价值和上限。

复现证据仍不完整。已核验获 COLM 接收的论文、完整附录、DOI 和论文 license，但未确认官方实现、生成 buffer、pair manifest、project page、checkpoint 或 Hugging Face release。因此，实验结果无法独立绑定到精确记录、配置或模型 hash。
