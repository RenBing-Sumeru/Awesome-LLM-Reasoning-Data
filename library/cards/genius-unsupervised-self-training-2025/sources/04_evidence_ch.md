在论文的 LLaMA3.1-8B-Instruct 设置下，七个 benchmark 的推理平均分从 base model 的 49.65 提升到 Magpie-25K 训练后的 57.08，以及 OpenHermes-2.5-32K 训练后的 56.90。Table 1 相应分块中最强的无监督 baseline 分别为 54.45 和 54.26。单项结果并不都是同等幅度的提升：例如，Magpie Genius 在 MATH 和 GPQA 上分别为 34.64、30.35，OpenHermes Genius 则为 34.42、34.82。这些是作者报告的模型结果，不是逐个 preference pair 的正确性测量。（论文 Table 1）

组件证据更有诊断价值。移除 foresight 后，Magpie 平均分从 57.08 降到 53.91，OpenHermes 从 56.90 降到 53.65，分别下降 3.17 和 3.25 分。把按分数分布采样替换为论文定义的 greedy 变体后，结果为 52.98 和 53.80，分别下降 4.10 和 3.10 分。在 foresight 数据固定时，ACO 为 57.08/56.90，DPO 为 55.51/55.73，ROPO 为 55.30/55.25。这些消融支持受测搜索与加权选择和其余实现的组合，但不能把 foresight 校准成正确概率，也不能证明 ACO 普遍优于其他目标。（Tables 3–4）

通用域和代码结果呈现出足以限制解释的混合现象。Table 2 报告两个 Genius 变体的 Arena-Hard 都从 30.31 升到 50.00，但 Magpie 的 MMLU-Pro 从 48.62 变为 48.44，OpenHermes 的 WikiBench 从 27.65 变为 27.00。Appendix D 报告 MBPP 从 69.65 升到 71.60/71.98，LiveCodeBench 从 19.50 升到 19.75/21.25。Figure 5 对受测 checkpoint 报告 AIME 2024 提升 6.67 分；Figure 6 只有 10K 量级的下采样训练曲线，作者也明确说明受到计算资源限制。（Table 2、Figure 5、§4.2、Appendix D Table 6）

Artifact 证据只支持部分复现。官方仓库公开了采样、偏好构造、ACO 训练和评测代码；官方 HF collection 公开了两个 LLaMA3.1-8B-Instruct checkpoint 和两个源查询数据集。两个模型页和两个源数据集页都声明 Apache-2.0。但 collection 没有提供经核验的 100K/128K 生成偏好快照，GitHub 也没有 tagged release；可见 quick-start 代码还存在本卡记录的过程数组长度与 prompt conditioning 交接问题。

在已确认 artifact 中没有找到独立复现。Appendix C 的 embedding-distance 分析显示源查询样本与 benchmark embedding 在平均意义上不同，但它不是逐条污染检测。因此，最强的有证据结论是：作者在其设置下报告了性能增益和有信息量的消融，并公开了相当一部分实现界面；这不等于每条构造偏好都正确、已校准、无污染或可直接复用。
