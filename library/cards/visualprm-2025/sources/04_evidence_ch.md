论文与 TeX 源文件给出了精确构造数量：每个图问对四个初始解答、每个前缀 16 条 continuation、最多 12 个存储/合并步骤、约 40 万个回答样本和约 200 万个受监督步骤。它们也确认了 mc_i > 0 阈值、全步骤监督、所报告的优化器日程，以及 VisualProcessBench 独立的人工标注流程。

官方发布面较完整。VisualPRM400K 是无需申请即可访问的约 72.7 GB 仓库，包含 annotation 和分片 image 归档；其 dataset card 明确 expected accuracy 已转换为二元 conversation 标签。VisualPRM-8B 以 8B safetensors 权重发布。VisualProcessBench 是约 510 MB 的资产；其 test JSONL 可复核全部 2,866 行、来源计数、四类 policy model、26,950 个步骤，以及论文表格中的 16,585/7,691/2,674 标签总数。官方 InternVL 仓库后来还发布了构造与后处理脚本。

实验证据检验两类不同能力。VisualProcessBench 在排除 neutral 步骤后，用 macro F1 衡量二元步骤错误检测；VisualPRM 报告 overall F1 62.0。Best-of-N 实验则衡量在作者候选分布下，平均步骤分是否比对照方法更能选中正确完整回答。论文报告了 N=8 时七个视觉 benchmark 上的提升，并对两个 policy model 扩展到 N=128。

这些结果支持“学得的 scorer 在所评设置下有用”，但不能逐条验证自动训练标签、证明来源混合无污染、建立上游权利，或说明同一 scorer 对任意 generator 都已校准。论文自身把部分建模困难归因于自动数据噪声，而更严格的正例阈值会降低聚合结果，并没有解决标签真值问题。

发布核验还显示了版本边界。原始 VisualPRM400K 发布的是派生 conversation 标签；后续 VisualPRM400K-v1.1 增加来源与输入指令，VisualPRM400K-v1.1-Raw 才暴露 score、num_mc_correct 和 num_mc_total 字段。这些后续记录证明可以采用更丰富 schema，却不能证明原始版本的 raw rollout 已经发布。
