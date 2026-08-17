SimpleQA 适合作为紧凑的 factuality、abstention 和 calibration benchmark。它最适合区分三种行为：答对、给出与 reference answer 矛盾的事实说法、以及选择不作答。

可复用评测记录应保留完整 CSV row 或稳定 row identifier、metadata topic、answer type、supporting URLs、reference answer、model answer、grader label、grader model、grader prompt、evaluator commit、parser rule、sampling policy 和 aggregate metric policy。引用 F-score 之前，应先报告 correct、incorrect、not-attempted 三个比例。

对 reasoning-data 审计来说，SimpleQA 是 answer-level factuality feedback 的好 schema 例子。它说明窄的短答案 surface 可以让低成本 judge contract 可用，但仍然必须做 contamination 检查、source 检查、grader version 固定和 metric interpretation。
