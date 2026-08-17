1. 输入：困难来源数据集的问题、两个候选回答、来源元数据，以及一个 judge 实现或 reward model。
2. 构造：作者用强模型生成回答对，保留能由客观正确性决定胜负的样本，并写成 `pair_id`、`original_id`、`source`、`question`、`response_model`、`response_A`、`response_B`、`label`。
3. 评测：`run_judge.py` 调用指定的 prompted judge、fine-tuned judge、multi-agent judge 或 reward model；对依赖顺序的 judge 可运行正反两个回答顺序。
4. 输出：保存 judgment 文件，并汇总模型 `decision` 与客观标签的一致率。
5. 复现边界：必须固定 `gpt` 或 `claude` split、prompt/template、模型版本、API provider、并发、seed、是否 order swap、以及本地 reward model 环境。这里是 evaluation/audit 用途；若要把标签当 reward 训练数据，需要另做污染和许可审计。
