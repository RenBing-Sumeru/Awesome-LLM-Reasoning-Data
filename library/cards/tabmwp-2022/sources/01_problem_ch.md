Dynamic Prompt Learning via Policy Gradient for Semi-structured Mathematical Reasoning 提出 TabMWP benchmark，并给出 PromptPG 作为 policy-gradient in-context example selection 方法。主论文是 arXiv:2209.14610，发表于 ICLR 2023；官方 code/data repository 是 https://github.com/lupantech/PromptPG，项目页是 https://promptpg.github.io。

判断边界：可复用数据对象是 TabMWP benchmark；PromptPG 是建立在 GPT-3 上的评测方法和 prompt-selection baseline。具体问题是：已有 math word-problem datasets 大多是纯文本，而很多真实问题需要先从表格中选择 cells，把 table 与 question text 对齐，再做算术或逻辑推理。

评测表面包括 table、question、可选 multiple-choice options 或 unit、gold answer、gold natural-language solution、split metadata、answer type 和 scorer。TabMWP 包含 38,431 个 grade-level open-domain problems 与 37,644 个不同 tables，表格以 image、semi-structured text 和 structured table 三种格式表示。复用筛选依据充分，因为论文清楚公开 source object、answer verifier、split policy、construction process 和 prompt-learning baseline。
