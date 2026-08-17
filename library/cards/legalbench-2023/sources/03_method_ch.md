1. 输入：task definition、法律文本、prompt、label 或 target、task metadata，以及 train/evaluation split。
2. 流程：从贡献者或既有数据集收集任务，规范到 repository task folder，定义 prompt 和 metric，通过 GitHub 与 Hugging Face 发布，并逐任务评测模型。
3. 输出：模型预测、per-task score，以及所选 task set 上的 aggregate summary。
4. 反馈：每个任务有自己的 scoring rule，例如 classification accuracy、entailment correctness、extraction match 或 generation evaluation；不存在单一 LegalBench-wide verifier。
5. 复现：需要固定 GitHub commit、Hugging Face revision、selected task list、task license、train/evaluation split、prompt format、evaluator implementation、decoding settings 和 few-shot examples。

这张卡只把 LegalBench 作为 evaluation-only benchmark。若任务被转作 instruction-tuning examples，下游数据集应记录相对 LegalBench evaluation 的 contamination，并保留原 task license。
