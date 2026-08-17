一句话贡献是：一个紧凑的 general-assistant benchmark：对人类容易，但对带工具模型很难。

核心机制是人写任务、可选外部上下文、隐藏答案、level 元数据和最终答案评分。被评分对象是问题、可选文件或多模态输入、level 元数据和最终答案目标；发布对象不是 state-action supervision，其中 300 个答案保留给 leaderboard 使用，反馈契约是官方答案集、答案归一化和隐藏答案 leaderboard policy 下的 final-answer correctness。

最近对比对象是MMLU 式考试、web QA 和 tool-use benchmark；它们通常缺少隐藏答案或广义 assistant 任务。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
