论文在 Limitations 中明确把结论限制在代表性的数学推理方法、较小 base model,以及没有 confidence interval 或 p-value 的 case study。以下关于发布和反馈的风险是 Card 作者根据数据对象与缺失 artifact 作出的推断:

- 占 80% 的"已验证"代码—数学 baseline 没有发布或逐项列出;其组成、license、与候选数据的重复、各阶段 sampling 都可能改变测得 delta。
- 论文同时提到 DeepSeek-V2-Lite 与 Qwen2.5-3B,但 table-to-checkpoint 和 pretraining/SFT mapping 不完整;optimizer、step、token budget、epoch、resampling、seed 与重复运行均未披露。
- 候选配方不是 factorial control:source、domain、teacher、record format、volume、filter 与 mixture compatibility 往往同时改变,单个 delta 不能识别因果因素。
- MATH 既是 evaluation benchmark,模型在 MATH 上的 failure 又被用作 weakness-guided seed。精确 split 以及 seed 或生成近邻是否与评估重叠均未披露,因此存在尚未解决的训练—评估污染风险。
- Answer consistency 可能保留一致但错误的答案。LLM quality filter 未命名也未校准;prompt、threshold、disagreement policy、rejected pool 与 false-positive/negative rate 不可得。
- MinHash 只用于教材 QA 去重,不是 benchmark-wide decontamination。网页、NaturalReasoning、OCR 教材、检索语料与生成输出之间没有统一 overlap audit。
- 来源教材、page provenance、OCR 修订、record ID、teacher generation 与 license manifest 均未发布。CC BY 4.0 适用于论文,不必然覆盖构造数据或源内容。
- 没有公开构造语料、代码、checkpoint mapping、generation log 或 rejection record。较小 base model 与缺少 confidence interval 也限制了泛化和统计解释。
