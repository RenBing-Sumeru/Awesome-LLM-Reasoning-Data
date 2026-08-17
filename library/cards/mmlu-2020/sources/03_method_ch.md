1. 输入：某个 subject 的多选题、4 个选项、可选 few-shot 示例，以及模型推理设置。
2. 流程：构造 prompt，取得模型选择的选项或基于 log-likelihood 的选项，规范化输出，再与标准答案比较。
3. 输出：逐题正确性、subject accuracy、humanities/social sciences/STEM/other 分组分数和 overall average。
4. 反馈契约：与答案键 exact match；评测时没有人工 judge、reward model、外部工具或交互环境来裁决单题。
5. 复现要点：固定官方仓库或数据包版本、split、prompt 格式、few-shot 数、答案抽取规则、模型快照，以及 harness 是否加入 auxiliary_train 或派生包装。评测分数不能直接当训练 reward 复用，必须另做污染和许可审计。
