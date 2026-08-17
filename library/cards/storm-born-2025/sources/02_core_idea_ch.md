STORM 把 document-to-derivation-data construction 分解为六个角色，而不是在一个 prompt 中要求单一模型读完整论文、选择高级公式、发明自包含问题并复现证明。Math Expression Extractor 识别 formula、theorem、lemma 与 corollary 并转为 LaTeX；Query Draft 把表达式及其 dependency 转成 derivation/proof question；Answer Retriever 被要求从来源抽取答案而不是自行求解；Context Collector 查找缺失 definition 与 dependency；Question Refiner 把 evidence 融入自包含问题；Answer Filter 区分 derivation/proof 与 definition/quotation。

预期 grounding contract 是 document extraction，而不是自由生成的 teacher reasoning。Appendix 要求 Answer Retriever 搜索公式首次出现位置、appendix 与相关 section，跳过无来源支持的问题，纳入完整推导，保留原文含义，展开被引用公式，并附 evidence location。然而，最终三字段 row 丢弃了 evidence field 和全部中间 formula/context record。使用者只能检查粗粒度 `paper` identifier，若要验证 page-level grounding，必须重新执行检索。

Human feedback 是 terminal verifier。熟悉来源论文的专家审查生成的 question-answer pair，保留合格样例、拒绝低价值样例，并手工改进边界样例。明示 criteria 是 reasoning type、problem clarity、derivation correctness 与 reasoning density。论文把它们称为“五项”原则，却只列出 Q1–Q4。没有发布 annotator count、topic assignment、numeric threshold、independent double review、inter-annotator agreement、adjudication，或逐项 revision 前后版本。

Benchmark feedback 另有两种形式，不能与 curation 混为一谈。对开放式 STORM-BORN answer，每个被测模型每题生成 3 个 response，由 human expert 把完全正确 derivation 记为 1 分，并按完成的关键步骤比例给 partial credit。对独立 NuminaMath-1.5 formula-derivation test，DeepSeek-R1 比较 candidate 与 ground-truth proof，对 correctness、completeness、similarity 各给 0–2 分。Multiple-choice variant 可以做 option-letter exact scoring，但 distractor 并不等价于评估生成式推导。

因此，其贡献是 human-judged、source-retrieval recipe，而不是 formal verifier 或 reward model。发布的 `question`/`whole_label` pair 支持 SFT，27-row test 与 options 支持 evaluation。没有 process label、preference、scalar reward、executable environment 或 formal proof object 可以支持 RL 或 process-supervision 声称。
