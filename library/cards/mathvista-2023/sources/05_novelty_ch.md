既有基准要么偏视觉识别、数学不深，要么偏数学推理、缺少视觉上下文。MathVista 的新意是统一多类视觉数学任务，并用 taxonomy 支持细粒度失败分析。

方向信号是多模态推理评测：模型必须读取视觉场景，再计算或推断数学答案。质量信号来自规模、官方数据发布、GitHub evaluator、Hugging Face 数据集、leaderboard 和 ICLR Oral 状态。

不新的是单个来源数据集、答案匹配和 VQA 式评测。复用前要检查来源数据集许可证、图像 provenance、split policy、答案规范化、LLM 辅助抽取行为和可能的 benchmark contamination。
