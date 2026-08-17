论文用 greedy Pass@1 与 Math-Verify 在数学、常识和科学 benchmark 上评估 CoVo；多个模型/数据组合有提升，但并非全面占优。对 Qwen2.5-3B-Instruct，CoVo 在 MATH-500 上得到 68.2，few-shot CoT、GRPO、Reinforce++ 与 TTRL 分别为 65.4、67.4、67.6 和 67.8。对 Llama-3.2-3B-Instruct，CoVo 的 MATH-500 为 51.2，低于 GRPO 的 51.8 和 Reinforce++ 的 51.6，但在列出方法中，其 OlympiadBench、GPQA 与 CommonsenseQA 分别以 19.6、32.1、74.4 居首。Qwen2.5-7B-Instruct 结果同样混合：CoVo 的 MATH-500 为 76.8，但 GSM8K 的 92.5 低于 TTRL 的 92.8，MMLU-Pro 的 57.0 低于 EMPO 的 57.4。（论文 Table 1；Appendix Table 6）

论文还直接检验了代理信号。在 MATH-500、MMLU、GPQA 和 CommonsenseQA 上，Table 2 中正确轨迹的平均 consistency 为 0.787–0.889，明显高于错误轨迹的 0.215–0.274；正确轨迹的平均 volatility 为 0.227–0.386，低于错误轨迹的 0.761–0.867。这些是在采样后借助 benchmark 正确性标签得到的相关性，支持代理在受测分布上的区分能力，但不能把训练奖励变成外部 verifier。（论文 Table 2）

Table 3 提供组件证据。对 Qwen2.5-3B-Instruct，向量内在奖励加 curiosity 在 MATH-500/GSM8K/AMC-23 上为 68.2/88.7/47.5；仅向量内在奖励为 68.0/88.4/42.5，仅 curiosity 为 61.8/80.6/32.5。对 Llama-3.2-3B-Instruct，三种设置分别为 51.2/79.6/25.0、51.6/79.5/22.5 与 46.2/69.5/15.0。联合奖励并非每个任务都最优，因此消融只能较窄地支持互补性，不能支持普遍提升。CoVo reward 计算每步耗时 49.22 秒，占实测训练步 24.6%；majority voting 为 4.38 秒/2.8%，ground-truth reward 为 2.06 秒/1.3%。（论文 Table 3；Appendix Table 8）

这些作者报告的分数说明训练流程可以改变被测任务准确率，但不能验证每个自奖励、证明 prompt 质量或去污染成效，也不能证明所有样本上的“一致”都等于“正确”。评估正确性另由 Math-Verify 和 benchmark 真值提供；已核验 artifact 中没有找到独立复现。

公开产物的完整度有限。官方代码库提供 OpenRLHF 实现和示例训练命令;官方 Hugging Face 仓库包含 README.md、train.jsonl 与 test.jsonl。但托管的数据构建器报告 schema cast 失败:train 记录的字段为 `problem` 和 `solution`,test 记录则为 `problem`、`answer` 和 `level`。尚未发现论文运行对应的轨迹、距离矩阵、答案分组、奖励、被过滤样本、随机种子、日志或检查点。
