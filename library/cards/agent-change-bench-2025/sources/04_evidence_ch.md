论文使用 GPT-4o、Claude-3.7-Sonnet 与 Gemini-2.5-Flash，对每个 task 做 3 次 independent run，并在 run 之间重置 environment；Appendix E 还加入 Qwen2.5-14B-Instruct，每个 domain 只运行 1 次。immutable model/API snapshot、seed、decoding setting、turn/token limit、retry rule 与 judge repetition 均未披露，因此比较绑定在规格不完整的闭源模型配置上。

Table 5 报告 airline-new 的 goal-shift recovery：GPT-4o 为 92.2%，Claude-3.7-Sonnet 为 79.2%，Gemini-2.5-Flash 为 48.6%。同一表格报告 retail-new TCRR：GPT-4o 为 89.14%，Gemini-2.5-Flash 为 66.45%。这些是作者报告、尚未独立复现的 benchmark outcome。它们说明所提 metric 能区分指定 task 上的模型/配置行为，但不能证明 data quality、simulator fidelity、replayability 或 training suitability。

论文内部还存在实质性不一致。Table 7 与紧随其后的 persona-analysis prose 对若干 persona 给出不同 recovery value，因此在 raw metric input 被调和前，不应复用 persona-specific recovery 数字。论文所述 source component 相加为 314，不能透明得到 315-task total。abstract 的 2,835 条 sequence 也没有连接到可访问的 record manifest；用 315 × 3 个 model × 3 次 run 解释仍是 arithmetic inference。

构造与 QA 的证据属于程序描述，而不是 release-level verification。Appendix A 给出 task schema、每批 10 个 candidate 的生成、5 个 Markdown reference、人工 database/tool check 与 goal-shift integration。Appendix B 声称使用 3 次 run、state reset、10% task review、criteria cross-check、inter-rater reliability analysis 与持续更新，但可访问正文没有发布 generator/judge/simulator configuration、annotator statistic、rejected item、raw run table 或 revision history。

artifact 证据止于官方列出层面。MTI-LLM OpenReview 页面确实提供 supplementary-material endpoint，论文也称 full benchmark、harness configuration 与 experiment 已在此发布；但由于 ZIP 本身无法取回，本卡不声称已经检查 code、task JSON、run log、split file、license、hash 或 replay fixture。也没有确认独立的官方 GitHub、project page 或 Hugging Face dataset。
