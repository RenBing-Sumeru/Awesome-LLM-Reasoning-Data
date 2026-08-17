1. 输入：task seeds、候选回答、可选参考答案，以及用于生成 judgment 的 GPT-4 prompt。
2. 数据构造：GPT-4 为回答对和相关评判格式生成 judgment；官方发布 JudgeLM-100K 监督样本，并报告 5K 验证数据。
3. 训练：基于 Vicuna/LLaMA 的模型加入 answer-pair judging 支持后微调；仓库示例包含 3 epochs、2e-5 learning rate、2048 max length，以及 swap/reference-drop ratio。
4. 偏差处理：swap augmentation 针对 position bias，reference support 与 reference drop 针对知识/参考依赖，格式设计针对输出可解析性。
5. 输出和契约：judge 输出 verdict 或 score/rationale，再与 GPT-4 teacher judgment 或 benchmark label 比较。
6. 复现边界：必须固定 base model 许可与权重、JudgeLM 数据版本、若重生成则固定 GPT-4 teacher 版本、prompt 格式、reference 策略、swap augmentation 比例、模型规模、GPU 栈和评测 parser。
