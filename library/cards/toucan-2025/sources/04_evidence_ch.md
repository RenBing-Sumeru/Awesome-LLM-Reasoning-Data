发布证据支持如下语料核算。在 HF revision `0df3cf37f2abefb380370cfb02eabea2a35ae782`，Kimi-K2 有 518,516 行、OSS 有 457,130 行、Qwen3 有 551,613 行，三个 full config 精确合计为论文所称的 **1,527,259 条轨迹**。HF 之所以报告 **1,646,546 个存储行**，只是因为同一发布还把 **119,287 行 SFT 子集**作为第四个 config 托管。把该子集与三个 full config 相加会重复计算被选中的行，不能称为 1,646,546 条唯一轨迹。四个配置都只有 `train` split。

论文报告 567,262 个 multi-turn conversation。SFT 子集由约 28.3K original、40K irrelevance、15.8K diversified 与 35.2K multi-turn 样本构成，精确行数核算后与托管配置一致。信息更丰富的 full schema 公开问题/响应评审与元数据，而六列 SFT schema 省略这些字段，因此下游用户无法仅从训练视图恢复全部选择信号。

任务 judge 的校准较有限：Kimi-K2 选择对照只使用 50 个带人工标注的样本，报告 Pearson correlation 0.264。公开代码使规则层可以审查，HF card 也澄清部分工具失败可以保留，但这两点都没有度量最终任务正确性。基于 substring 的目标工具匹配同样弱于语义验证或 environment-state 验证。

下游 SFT 结果为正，但应窄化解读。BFCL V3 overall score 在 Qwen2.5-7B 上从 55.10 变为 58.26，14B 从 57.69 变为 65.09，32B 从 61.73 变为 70.45。论文还报告 tau-bench 与 tau2-bench 平均结果提升，以及 MCP-Universe 上更好的模型规模/OSR 前沿。对 Qwen2.5-14B，渐进 BFCL mixture 分别为 single 60.16、加入 irrelevance 后 64.74、加入 diversification 后 64.56、加入 multi-turn 后 65.09，可见中间增量并非单调。这些作者报告的评测支持 SFT 配方在已测设置中的效用，但不能证明发布数据干净、评审正确、无污染、组件级权利完备或可精确回放。
