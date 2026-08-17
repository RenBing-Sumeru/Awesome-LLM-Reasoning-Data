统一装置是 80/20 的 annealing-style comparison。一个规模较大、被作者称为已验证但未公开的代码—数学语料提供 80% 样本,单个候选数据集提供 20%。研究使用 DeepSeek-V2-Lite 或 Qwen2.5-3B,经过预训练或 SFT 阶段,再在知识、推理、数学与代码 benchmark 上评估所得 checkpoint。论文在操作层把"加入后优于 baseline"的候选称为 effective,同时观察数学之外的能力回退。

在该框架中,论文比较多种假设:广泛网页聚合与精选数据;原始 OCR 教材文本与 Qwen2.5-72B 教育化重构(Math-Cosmo);NaturalReasoning 原答案与 QwQ-32B 重生成加 consistency filtering;围绕 MATH failure 的检索与 LLM augmentation;以及带 LLM filtering 和 MinHash deduplication 的教材 question-answer extraction。论文还保留 dependency-graph generation、Long-CoT mixing 与按 reasoning length 分难度等失败尝试。

这是聚合模型选择 feedback contract,不是 record-level verifier。答案一致性过滤部分合成 trace,LLM judgment 过滤教材 QA,MinHash 去除近重复,但多数 prompt、threshold、adjudication 与 error rate 没有披露。80/20 结果只说明候选 mixture 在报告运行中是否有效,不能认证每个保留样本。

图谱中最接近的对照是 `advancing-math-data-synthesis-2025`,后者比较四种问题—解答变换及 CPT/SFT 分配;本文则在更广泛的外部与内部候选之间保持名义上的 80/20 baseline/candidate 比例,并突出跨任务回退。两者都是训练记录未发布的配方研究,都没有提供形式化数学 verifier,也不能支持直接语料复用。
