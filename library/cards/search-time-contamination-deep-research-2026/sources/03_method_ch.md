**任务与采样。** Tongyi 主评测包括 MedQA 1,273、MMLU-medical 544、MedMCQA 2,089、MedXpertQA Text 2,450、HLE-149 149、Medbullets5op 298，共 6,803 题。MMLU-medical 和 MedMCQA 排除最短一半，以减少纯事实记忆题。选择题用 accuracy，HLE-149 沿用标准 LLM judge。商业 agent 用 MedQA 前 100 题；Valyu 另测 100 个 PubMedQA 问题。

**轨迹生成。** Tongyi-DeepResearch-30B-A3B 以 Serper/Jina 英文搜索生成可检查的 reasoning、Search、Visit、intermediate summary/prediction 和 final answer。Qwen3-30B-A3B 与关闭 Search 的 Tongyi 作为 base/agent ablation。Step、Gemini、Valyu 只暴露有限 prediction、summary 和 visited URLs，故其污染分析还依赖内容匹配和人工验证。

**检测与反馈。** BML 用 regex，QCL 用 lexical overlap，EAL 用带 question、gold answer、web content 的 LLM judgment。人工验证显示：Medbullets5op 前 160 题上 EAL precision/recall 为 100%/83.33%；MedQA detected cases precision 94.87%，recall 未知。final correctness 与 event 对齐的 intermediate correctness 是 outcome，没有 optimization reward。

**留存与 replay。** 论文称结果通过匿名 4open.science 发布，但复核时 endpoint 返回 HTTP 401，无法验证 trace schema、失败、blocked page、no-prediction、tool error、timestamp 或保留完整性。replay 必须归档 ranking/snippet/page，并固定 search/browser/model 版本、prompt、budget、seed 和 detector；只有 question ID 不够。
