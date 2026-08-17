输入是短事实问题、reference answer、可选 metadata 和模型回答。公开 CSV 暴露 `metadata`、`problem`、`answer` 三列；metadata 记录 topic、answer type 和 supporting URLs。

数据构造流程是：

1. AI trainers 写 knowledge-seeking question、reference answer 和支撑证据链接。
2. 每个问题必须面向客观知识，写清答案范围，避免答案随时间变化，并且在 2023-12-31 前可回答。
3. 候选题通过难度筛选：四个参考模型 completion 中至少一个要答错。
4. 独立 trainer 在看不到原答案的情况下重新回答问题。
5. 只有 trainer 答案一致，并且通过来源域名、单一答案、timeless 等检查的样本才保留。

评测流程是：

1. 模型收到 `problem` 字段并输出自由文本答案。
2. 发布的 grader prompt 比较 `problem`、`answer` 和 predicted answer。
3. grader 输出 A/B/C，对应 CORRECT、INCORRECT、NOT_ATTEMPTED。
4. harness 聚合 correct、incorrect、not attempted、correct-given-attempted 和 F-score。

复用前必须固定 CSV snapshot、evaluator commit、grader model、grader prompt、答案解析规则、模型 prompt/scaffold，以及 calibration 实验是否使用 repeated sampling。
