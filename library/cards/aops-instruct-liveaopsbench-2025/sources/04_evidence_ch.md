最直接的质量检查范围有限，但足够具体。10 名研究生对 LiveAoPSBench-0824 随机 10% 的样本（386 道题）做标注，每题由两人参照原始帖子判断。全部标注中，92% 被判为正确，5% 错误，3% 属于 no-answer。附录 A.2 还展示了原帖以间接方式给出答案时的人类分歧。这支持被抽样 benchmark 子集的最终答案效用，但不能验证每条 rationale、647,255 条训练记录或发布的来源权利（论文 §3.2、§4.5、附录 A.2）。

SFT 实验说明构造记录会改变被测模型。在 LiveAoPSBench/MATH/OlympiadBench/Omni-MATH 上，DeepSeekMath-7B-Instruct 从未做 SFT 时的 11.7/47.1/14.5/12.3 变为使用 AoPS-Instruct 后的 19.0/58.8/24.3/17.8；Mathstral-7B 从 15.4/56.3/21.2/15.9 变为 23.6/60.8/27.1/19.9。Llama-3.2-3B 与 1B 在论文报告的 AoPS-only 行中也有提升。这些是作者报告的三轮 SFT 结果，不是独立复现，也不是逐记录正确性审计（论文 Table 3）。

结果并非处处单调。把 Numina 加入 AoPS 会改善很多行，但 Mathstral 在 MATH 上的混合数据分数为 59.6，低于只用 AoPS 的 60.8；附录 Table 8 中多个 AIME24/AMC23 结果也出现持平或回退。重写消融中，Qwen 在 MATH、AMC23 和 OlympiadBench 上最强，但其 GSM8K 分数为 79.2，低于 Llama 重写的 81.1。因此，这些证据依赖模型、benchmark、数据混合与重写策略，不能上升为一般性数据质量保证（论文 Figure 5b、Tables 3 与 8）。

时间戳证据同样只是相关关系。与 Numina 的精确 10-gram 重叠率在五个连续四个月窗口中依次为 13.24%、11.65%、12.82%、9.92% 和 6.88%，被测模型在 2024 年题目上的分数也低于 2023 年。较新时间戳减少了直接暴露机会，但难度、主题混合、答案类型和模型 cutoff 的变化也会影响分数；substring matching 还无法发现改写题（论文 Table 2、Figure 1）。

artifact 核实了对象形态与规模：本次检查的 LiveAoPSBench 发布有 5,328 行 test 数据和五个字段，第三方 AoPS-Instruct 默认配置则恰有 647,255 行 train 数据及两条 message 的 schema。论文自己的 Figures 16 与 17 还记录了一个不完整重写和一个计数错误。因此，发布计数与下游增益支持流水线的实用性，而这些失败样例阻止我们把 benchmark 结果解释为每条入选推理轨迹都正确的证明。
