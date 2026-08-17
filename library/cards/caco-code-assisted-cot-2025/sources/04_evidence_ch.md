Release scale 可在 artifact 层直接检查。当前 Hugging Face configuration 只有一个 train split，包含 1,348,799 个 example 与一个 3.13 GB JSONL file。Schema 以 `instruction`、`output`、`answer` 与 `code` 暴露四种最终对象：问题、语言解答、抽取答案和程序。本卡以精确 byte size 与 LFS SHA-256 固定该文件。由于没有下载完整 corpus 并逐行重新计算，内容频率与重复统计仍是作者／artifact 报告，而非独立 census。

Table 1 在三个 base model 上均报告数据量增加时的单调提升。DeepSeekMath-7B 在六个 benchmark 上的平均分，从 Seed109K 的 51.1 提高到 596K 的 54.5 与 1.3M 的 57.1；1.3M 行的 MATH、GSM8K、CollegeMath、DeepMind-Mathematics、OlympiadBench-Math 与 TheoremQA 分别为 68.2、85.1、46.0、80.2、29.5 与 33.8。Qwen2.5-Math-7B 在相同规模上的平均分为 65.1、66.6、67.7，LLaMA3-8B 为 46.7、52.8、57.3。这是论文内部较强的 SFT scaling utility evidence，但不是对逐行正确性或 contamination 的独立审计。

Verification ablation 分别从有／无最终验证流程的数据中随机抽取 100K 条，并让 Qwen3-32B 评估。报告的 solvable 数从 91K 增至 97K，correct 数从 88K 增至 93K；在 verified subset 上训练的 LLaMA3-8B 平均分为 21.8，未验证子集为 20.8，其中 OlympiadBench 提高 1.1 分。由于 Qwen3-32B 同时是构造阶段 judge，这属于同一 judge family 的审计，而不是独立人工或形式校准。论文没有给出 confidence interval 或 judge confusion matrix。

Appendix control 部分区分了 data scale 与更大 teacher 的影响。在 300K 条数据下，Qwen2.5-Math-7B 的 teacher-distillation baseline 平均分为 65.5，Caco-300K 为 66.2，Caco-1.3M 为 67.7；DeepSeekMath-7B 的对应平均分为 51.1、53.2、57.1。STaR-style self-improvement baseline 也更低。这些对比支持“在被测 setup 中，recipe 的作用不只是复制单一 teacher”，但不能识别每个 filtering component 的因果贡献。

论文抽取 5K 条记录，以 all-MiniLM-L6-v2 embedding、t-SNE visualization 和 12 个 cluster 的 K-means 作为 diversity evidence。它可以显示宽泛主题分组，却不是 duplicate 或 evaluation-contamination test。Science extension 把 5.2K 条 MegaScience seed 扩展为 37K 条有效记录，并报告 LLaMA 在 AGIEval、ARC-c、MMLU-STEM 上的平均分从 59.0 提高到 63.4。这 37K 条是辅助实验，本卡未核验它们属于公开 Caco-1.3M file。

所有 performance result 均由作者报告，依赖论文的 training/evaluation setup，且没有 uncertainty estimate 或 independent reproduction。它们证明在 SFT 条件下，使用发布数据与 benchmark score 提升相关；它们不证明 semantic correctness、verifier reliability、provenance completeness、license compatibility 或不存在 benchmark leakage。
