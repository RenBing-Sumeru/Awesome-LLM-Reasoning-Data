科学 CPT 的来源包括归档与网页 PDF、开放预训练语料、Common Crawl、InternVL3 多模态数据和科学多模态来源。PDF 页面经过混合 OCR/VLM 解析、针对不同 parser 的清洗、乱码检测和 page-level graph deduplication。报告称归档库 token 约有 20% 被移除；网页 PDF 再经过 education-level scorer 后约保留 50%。domain-level LLM agent 会查看同一 URL domain 的抽样页面，并决定整组丢弃、改写或保留。另一套 taxonomy 覆盖数学、物理、化学、生命科学、地球科学和材料科学；强 LLM 标注用于训练轻量 classifier，人工评估称目标领域纯度由约 2% 提升到 50%。

离线指令整理会过滤重复、截断或幻觉记录，标注类别与难度，进行分层抽样，并对样本不足的领域重写响应或补充合成数据。带 ground truth 的样本使用小模型多次 rollout 的通过率估计难度。视觉语言指令数据以 InternVL3 为起点，并用拒绝采样、去重、长度/格式约束、自一致性和可用时的程序验证扩展 SOPHIA。每个保留响应来自 best-of-N，但 N、生成器身份、采样设置、阈值、记录数量和最终混合比例均为 unknown。

在线 RL 组合多类来源。Internbootcamp 覆盖 1,000 多种程序生成任务；报告称每项任务由 generator 构造 100,000 多个候选，再经启发式下采样，最终有 20,000 多个样本用于混合 RL。instruction-following prompt 按 passrate@64 位于 [0.2, 0.8] 的条件筛选。数学来源包括 OREAL-RL-Prompts、DAPO-Math-17k、Skywork-OR1-RL-Data 和内部题目；多模态来源包括 MMPR、MMK12 与 private collections，部分文本题被渲染为图像，部分选择题被改写为填空题。开放式 prompt 主要来自 UltraFeedback、HH-RLHF 和匿名真实用户查询，reference trajectory 则由未具名 SOTA LLM 池中随机选择的模型生成。

Mixture-of-Rewards 让带 ground truth 的任务使用 CompassVerifier、规则或环境反馈，让开放式对话使用 POLAR-7B。混合过滤以 8 次 rollout 为一组：离线删除过易或可能带噪的问题，在线删除全对或全错组，并移除乱码和无限重复输出。训练采用去掉 token-level reward model 的 OREAL 变体，加入 KL-Cov 熵控制；每个 prompt 生成 8 个响应，以 batch size 4096 训练 600 step，AdamW 学习率为 5e-7；ViT 与 MoE router 冻结，约 3% 的高 gradient-norm 样本被丢弃，最后对选中 checkpoint 做权重平均。
