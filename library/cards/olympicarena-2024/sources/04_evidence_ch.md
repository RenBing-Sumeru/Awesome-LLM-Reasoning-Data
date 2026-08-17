官方证据比较具体：论文和 OpenReview 页面确认其为 NeurIPS 2024 Datasets and Benchmarks Track poster；项目页和 GitHub 给出代码、数据加载、推理、评测、标注和提交说明；Hugging Face 数据集页面展示七个学科子集、validation/test split、字段、模态、语言和 CC-BY-NC-SA-4.0 数据许可。

论文报告 11,163 题、62 个竞赛、13 种答案类型、7 个学科和 34 个子领域、7,904 题有标准解、7,571 张图片、4,960 道含图题。主结果中，GPT-4o 作为 LMM 总体 39.97%，数学 28.67%，物理 29.71%；许多开源系统总体不到 20%。过程级评测只在 96 题抽样上报告，不是全量数据。

单条样本的决定性证据取决于评分路径：rule-based 答案匹配、CS 测试用例通过/失败、GPT-4V 对不适合规则评分题型的 model-based judgment，或抽样步骤评分。证据边界包括隐藏 test 答案、模型裁判可靠性、prompt 和图片输入策略、CS 采样预算，以及公开奥赛材料带来的潜在污染。
