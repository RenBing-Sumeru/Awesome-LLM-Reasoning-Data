输入包括公开竞赛 PDF、转换后的 markdown、可选图片、参考答案或标准解、CS 测试用例和模型输出。流程是：

1. 收集七个学科的竞赛链接，用 Mathpix 将 PDF 转为 markdown。
2. 使用标注界面，由约 30 名理工背景学生抽取单题、多模态字段、答案、可用标准解和元数据。
3. 多步验证标注质量，用 embedding similarity 在每个竞赛内部去重，并标注难度、逻辑推理能力和视觉推理能力。
4. 切分为用于小规模测试/调参的 OlympicArena-val、答案不公开的正式 OlympicArena-test，以及用于 model-based evaluation 的 OlympicArena-ot。
5. 使用按答案类型定制的 prompt 进行推理，prompt 规定最终答案格式；CS 题使用多候选输出和 pass@k 风格测试。
6. 在 validation 上本地评测，或把 test 预测提交官方平台；test 答案不公开，所以不能本地复算正式 test 分数。

输出包括题目记录、prediction JSON、按学科/语言/模态统计的答案级指标、抽样过程级分数、泄漏检测结果和榜单记录。复现时要固定数据 split、学科子集、prompt 模板、模型快照、图片输入策略、evaluator 代码版本、CS 采样设置和榜单日期。
