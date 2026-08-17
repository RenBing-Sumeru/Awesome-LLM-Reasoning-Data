建议结合 Sections 3–5、Tables 1–6 与 Appendices B–G 阅读。关键是操作区别：BML 是 Search/URL signal，QCL/EAL 需要 visited content，同一问题可有多个 type。Table 2 是 post-hoc subgroup evidence，Table 3 做 event 前后 prediction 对齐，Tables 4–5 建模关联和升级，不是随机因果实验。

复用前需核实：

- 稳定官方 trace/code URL、immutable commit、schema、checksum、artifact license 与完整 success/failure/tool-error retention；
- benchmark version、filtered ID、question-level split、commercial sampling 及全部 model/search/browser prompt 与 budget；
- query/ranking/snippet/page 的 timestamp/snapshot、网页 rights/terms、PII/redaction policy 与 page-hash provenance；
- BML regex、QCL normalization/threshold、EAL judge version/prompt、human label 和逐数据集完整 precision/recall；
- 用 controlled sandbox 或 randomized censor/injection rerun，区分污染效应与题目难度、可搜索性。

不要为了提高 detector coverage 而重建或公开带答案的 benchmark page，否则审计本身会制造新污染。
