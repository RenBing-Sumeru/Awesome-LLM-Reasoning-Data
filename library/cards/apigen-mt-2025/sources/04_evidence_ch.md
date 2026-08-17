收集证据建立在论文自身使用的模型与 tau-bench 衍生设置上。Table 1 报告 Phase-1 任务生成成功率为 70%，去掉 agentic feedback 后为 28%；Phase-2 模拟成功率为 67%；轨迹长度为 1–29 turn，平均包含 7 次 tool call 和 6 次 user turn。这些统计支持“迭代验证与模拟交互能够产生被接收 episode”的主张，但没有测量 verifier false-positive rate 或公开发布完整性。

论文的人类审计抽样了 200 条轨迹。Table 2 报告 query clarity 99.4%、sufficient information 70.2%、achievability 77.4%、fatal error 0%、erroneous step 0.75%、self-correction 0%、completion 99%。Appendix C.1 说明 professional expert 会检查 query 属性、plan、response、tool call、error 与 completion。sampling procedure、annotator 数量和资格、inter-annotator agreement 与 adjudication 均未披露，因此这些百分比是作者报告的 audit evidence，而不是独立校准后的标签。

历史模型结果表明完整训练配方可以产生有竞争力的工具使用模型。在日期为 2025-04-03 的 BFCL leaderboard snapshot 上，Table 3 报告 xLAM-2-70b-fc-r overall 78.19、multi-turn 75.12，xLAM-2-8b-fc-r overall 72.83、multi-turn 69.25，GPT-4o FC multi-turn 41.0。在至少五次 trial、default naive user、仅使用 think tool 且无 prompt optimization 的 tau-bench 条件下，Table 4 报告 xLAM-2-70b-fc-r 的 Retail 为 67.1、Airline 为 45.2、overall 为 56.2；GPT-4o overall 为 52.9，Claude 3.5 Sonnet (new) overall 为 60.1。这些是带明确条件的历史 benchmark result，不能证明公开 5k 子集单独造成了增益。

trajectory-length ablation 与 APIGen-MT 构造的联系更直接。在轨迹数量固定时，移除 reverse-recombination data 会使 Airline 从 45% 降到 33%，Retail 从 64% 降到 61%（Figure 3）。这支持更长的 recombined trajectory 在两个已测 domain 中提供有效多样性的主张，但不能把机制外推到其他 environment。

mixture evidence 限制了归因。Table 5 报告 Qwen-32B 的 Retail+Airline behavioral-cloning 条件在 BFCL 上为 65.0，base 为 57.8，而完整 xLAM mixture 达到 75.8。Appendix A.2 说明 APIGen-MT 会与 APIGen 和其他 xLAM/ActionStudio data 联合训练，Appendix B 还研究了最高 8k 的 APIGen-MT 规模。因此，在缺少 mixture 和 sample mapping 记录时，既不能把最终 xLAM 分数归因于 gated 5k 公开子集，也不能把 8k ablation 当成 5k release 的结果。

工件检查验证的是另一类证据：HF card 声明 5,000 条英文记录、gated access、CC-BY-NC-4.0、一个 `train` split 和 ShareGPT-like 字段；file pointer 固定了已检查 JSON 的 hash。检查也确认 construction-only 的 blueprint、ground truth、state diff、reward、verification log、failure、reset state 与 replay metadata 均未公开。benchmark performance 不能弥补这些发布缺口，也不能证明数据质量。
