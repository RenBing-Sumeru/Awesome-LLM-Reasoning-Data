1. 输入：大学级多模态题、对应图片或图表、选项或目标答案、subject/subfield 标签，以及同时暴露文本和视觉内容的模型 prompt。
2. 流程：打包图文题目，交给多模态模型，抽取模型最终答案，按官方 evaluator 规范化，再与 benchmark target 评分。
3. 输出：逐题正确性、subject/subfield accuracy、discipline-level summary 和 overall benchmark score。
4. 反馈契约：在官方评测脚本下做答案键或目标答案匹配；没有工具执行或外部环境验证推理轨迹。
5. 复现要点：固定官方数据集 revision、使用 validation 还是 hidden/test split、图像预处理/分辨率策略、prompt 模板、答案抽取规则、evaluator commit、模型快照和许可。HF 数据集卡标注 Apache-2.0，并说明 test answers 不在该处公开提供。
