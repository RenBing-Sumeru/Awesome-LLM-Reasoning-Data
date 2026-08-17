静态论文结果定义在 **999 场 completed game、49 个 unique model** 上（论文 §4、§6；冻结的 999-ID manifest）。在论文的 Bayesian Plackett-Luce 分析中，`openai/gpt-5.5` 的 posterior mean skill 为 5.64，之后是 3.10 的 `openai/gpt-5.2` 与 2.86 的 `openai/gpt-5.3-codex`（论文 Table 1、Figure 2）。这些是在特定 matchup schedule 与 ranking model 下由作者报告的 winner-model estimate，未经独立复现，也不能证明发布 trajectory 的质量。

behavioral audit 使用了 winner-only ranking 之外的信息。把分析限制在两名 finalist 来自不同 provider 的游戏及其 final-round vote 后，论文报告 juror 投给 same-provider finalist 的概率高 **8.3 个百分点**（论文 §7、Table 2、Figure 3）。该结果说明 provider composition 会影响 vote，也对不含 matchup-effect 项的 Plackett-Luce specification 构成压力信号；但它本身不能识别偏好的成因。

artifact 证据使论文集具有较具体的可审计边界。Dataset version 1.0.0 声明 999 个 game ID，manifest SHA-256 为 `73ee6cc97ada604830e933131b19ed81839049b19dfcc1a3c970a72dfce862ad`。公开 index 为每条冻结 log 提供直接 HTTPS URL，Croissant metadata 描述 schema、preprocessing、use case 与 CC BY 4.0 许可。已核验 sample log 暴露 game/player/stats/history object、私密/公开 visibility、parsed choice、reasoning-extraction failure、token/cost metadata 与 final selected player。这些发布事实支持审计，却不能证明被排除 failure 可以忽略，也不能证明 trace 适合训练。

replication archive 通过 GCS generation 与 SHA-256 `5b2c7c5262a46c65b51b659b9c3c0b4edb7eb8cf443cb6d2a4489d2d673e8b2d` 固定。其文档化 pipeline 会下载已发布 log，重新生成 posterior sample、metadata、CSV/JSON analysis、论文 macro、table、figure 与 appendix excerpt。本卡片没有重新运行完整 pipeline，ZIP 也明确不生成游戏。因此，现有证据建立的是 analysis replication 路径，而不是端到端 episode reproduction。

live benchmark 是另一条独立观察。2026 年 7 月 20 日直接获取 `rankings/latest.json` 时，源返回 **1,270 场游戏、62 条 ranking row，以及按官网至少 10 场规则保留的 59 条 row**；source timestamp 为 **2026-07-02 15:26:25.976235+00:00**。live site 把 top model 的 median skill 归一化为 1，按 25th-percentile skill 排名，并展示 50%/95% interval；这与论文 Table 1 按 posterior mean 排序不同。更早的 live 状态不能作为当前证据。
