主要证据是在论文 Qwen3 training setup 下由作者报告的。Table 1 给出的 overall benchmark average 从 base 到 SFT+RL 分别为：1.7B 从 16.27 到 19.74，4B 从 24.09 到 30.77，8B 从 29.23 到 33.40。直接 RL gain 小于完整 SFT+RL path，且更不稳定。这些结果说明完整 recipe 在所述 setup 下可以改善被评测的 tool use；它们不能把 environment synthesis、trajectory selection、reward code、optimizer 或 data volume 单独确定为原因。

reward ablation 提供更窄的机制证据。在固定 length penalty、让 alpha 取 0、0.3、0.5、0.7 与 1 时，alpha 0.5 在 BFCL multi-turn 上达到论文报告的峰值 41.38%；state-only 与 trace-only variant 都更差。这支持该实验中组合 action-reference 与 final-state signal，但不是对 false positive、false negative、masked argument、order invariance 或 reward hacking 的独立审计。

evaluation scope 并不完整。MCP-Atlas 结果因 connectivity constraint 只使用 36 个 server 中的 30 个、500 个 task 中的 291 个。因此，本 Card 不把这些分数推广到完整 benchmark，也不把 benchmark improvement 当作 public dataset 具有正确 lineage、完整 failure、充分 privacy control 或安全 license 的证据。

release evidence 必须按对象解读。论文报告 85 个 environment、842 个 tool、1,622 个 SFT conversation 和 953 个 RL conversation。固定 HF viewer 暴露 26,463 条 SFT-FILTERED row、53,412 条 SFT-ALL row 与 3,092 条 RL row。SFT-FILTERED card prose 写约 53,400，但 viewer 是 26,463；SFT-ALL card prose 写约 26,500，但 viewer 是 53,412。主 repository 与 collection 遵循和 viewer 一致的 mapping，而 model card 仍把 filtered data 写成 53.4k。这个 documentation conflict 未解决，不能自行调和。

论文与发布还在 SFT epoch 和 license 上冲突。论文报告 3 个 SFT epoch，并从 epoch 1 初始化 RL；当前 repository config 与 HF model card 写 1 个 epoch。HF dataset/model 与链接的 VeRL fork 声明 Apache-2.0；main repository 没有检测到 license，而论文称 artifact 使用 restrictive license。这些是 release-audit 发现，不是实验结果。

本 Card 没有进行独立复现。证据支持 executable environment、公开 row schema、reward input/code 和作者报告 training outcome 的存在；不能证明与 production service 语义等价、每条 selected trace 正确、failure retention 完整，或已完成法律与 privacy clearance。
