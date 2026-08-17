最直接的证据是 Table 2 与 VRT 的等规模对比。在保留样本同为 0.59M、六个 benchmark 均使用贪心自然语言评测的条件下，Llama3-8B 的平均分从 VRT 35.2 提升到 Uniform 38.7、Prop2Diff 39.7；Mistral-7B 则从 VRT 34.3 提升到 Uniform 37.4、Prop2Diff 38.8。在 MATH 上，Prop2Diff 把 Llama3-8B 从 39.7 提升到 46.6，把 Mistral-7B 从 38.7 提升到 45.5。这些是作者在附录 B 所述训练/评测设置下报告的 SFT 结果，并非独立复现。

该结果有明确条件，并非普遍成立。DeepSeekMath-7B 的 VRT/Uniform/Prop2Diff 平均分为 48.3/49.2/49.4，Llama3-70B 为 48.5/49.1/49.3。Prop2Diff 在 GSM8K 上还低于 VRT：Llama3-8B 为 81.1 对 81.7，DeepSeekMath-7B 为 86.8 对 88.2，Llama3-70B 为 89.6 对 90.3。因此，作者报告的增益主要出现在通用 7–8B base 与较难 benchmark；对强模型、数学专用模型和较简单的 GSM8K，效果更小（论文 §4.2，Table 2）。

覆盖证据更直接对应预期的分布变化。附录 Table 4 报告两种 DART-Math 数据对 MATH 训练题的覆盖率均为 99.6%，同规模 VRT 为 84.9%，MetaMath-MATH-AnsAug 为 82.8%；Level-5 覆盖率分别为 99.1%、62.9% 和 48.9%。Figure 4 还显示，在小数据规模下取消“每题至少一条响应”的规则会使 GSM8K 下降约 8 分，而数据规模增大后差距缩小。

官方 artifact 也核实了发布对象：本次检查的 Hard 与 Uniform revision 分别提供 585,392 与 590,705 行双列 SFT 数据，pool/query-info 数据则暴露已接受响应的沿袭与采样统计。但它们不能证明所有 rationale 都正确、合规、多样或无污染。benchmark 增益支持所测试的预算分配配方，不是过程标签质量的证据。
