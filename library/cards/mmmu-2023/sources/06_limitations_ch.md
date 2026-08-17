正确性只相对于官方 target answer 和 evaluator 成立。它不证明模型把答案 grounding 到图像上，也不证明模型遵循了有效学科方法，或能解决类似真实专业任务。

图像预处理会改变任务：分辨率、裁剪、OCR 质量和 prompt 布局会影响模型实际收到的证据。公开 validation items 可能进入训练；比较分数时必须固定 hidden-test policy 和 leaderboard 日期。

该基准混合多个学科和答案格式，一个 average score 会掩盖非常不同的失败模式。用于训练或再分发前，要按 artifact 检查许可和图像 provenance。
