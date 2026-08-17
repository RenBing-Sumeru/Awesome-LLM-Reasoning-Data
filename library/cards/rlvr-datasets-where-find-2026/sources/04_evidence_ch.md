谱系结果覆盖面广，但目前主要由论文转述。论文报告 1,450,827 个规范化实例、20 个原子来源标签、超过 99.7% 已归属，以及相对 14 个数学基准的 36,148 个高置信泄漏实例。仓库虽提供规范化、精确匹配和语义匹配脚本，却没有最终谱系字典、出现列表、来源归属、embedding、匹配矩阵或作者决策，因此无法独立重算聚合结果。

下游 RLVR 结果支持研究内部比较。Average* 排除 Math500 后，DAPO++ 在 Qwen3-1.7B 上为 15.7，去污染 DAPO 为 15.0；在 Qwen3-8B 上分别为 29.6 和 29.3。去污染消融中，DeepScaleR-1.7B 从 14.1 升至 14.7，DAPO-1.7B 从 14.6 升至 15.0，DeepScaleR-8B 从 24.4 升至 26.1，DAPO-8B 从 29.4 升至 29.6。这些结果不能证明每条公开记录都正确、无污染、许可清晰或具有因果收益。

Q 仅在六个数据集上评估。它与 Average* 的 Spearman 相关在 1.7B 为 0.60、8B 为 0.94，而跨数据集 Average* 标准差分别为 0.59 和 2.17。Q 使用 Math500 派生特征，Math500 又用于 checkpoint 选择。因此，更强的 8B 相关性支持的是受规模与基准条件约束的排序代理，而非通用数据质量或独立 verifier。

公开文件可以直接核验。在 commit d048f53f7b7ab53b2b82f5e8d5f6323333e5e0c4，DAPO_Plus.parquet 大小为 3,507,245 bytes，SHA-256 为 3e6ecc481b4e9f51a53d210b27bff14fd9f12744ee88f5a40910f9ef0d68a2ab；包含 17,000 行、5 列、17,000 个唯一提示和索引、一个 train split、一个 data_source 值、一个 ability 值，以及 2,392 个不同标准答案字符串。文件没有逐记录谱系或 SCA 字段。一个原本为英文的提示含有孤立的中文指令标记；这是混合语言或文本噪声观察，不是字节级编码损坏的证据。

当前代码并非端到端复现包。Benchmark_Scoring/analyze_features.py 依赖未发布的 stage4_final.json，并在 800,000 条后停止；compute_scores.py 硬编码特征与 Math500 汇总。论文表 9 与 GRPO 脚本还在步数、mini-batch、KL、batch size 和评测设置上冲突。因此，文件存在与 benchmark 变化不能验证所声称的选择历史。
