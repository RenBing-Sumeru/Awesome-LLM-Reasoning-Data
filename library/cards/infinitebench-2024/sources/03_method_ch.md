1. 输入：包含长 `context`、`input`、参考 `answer`、可选 `options` 的任务 JSONL 记录，以及模型和 prompt template。
2. 流程：加载任务文件，构造长上下文 prompt，在固定推理设置下调用模型，解析或保留生成答案，再调用任务对应 evaluator。
3. 输出：模型 generation、逐任务分数和跨 12 个任务的汇总表。
4. 反馈契约：不同任务使用 accuracy、ROUGE F1 或 rougeLsum；benchmark 本身没有环境状态转移，也不是训练时 reward。
5. 复现边界：必须固定 dataset release、Hugging Face snapshot、仓库 commit、用于长度统计的 tokenizer、prompt template、API/model version、最大输出预算、截断策略和 evaluator 库版本。
