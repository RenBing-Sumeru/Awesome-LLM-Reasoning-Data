ICLR 官方记录确认 Spotlight status。Table 1 报告 10,398 条成功 trajectory，平均 12.1 steps，覆盖 127 个 website。论文报告 downstream gain：在 WebArena 上，使用 AgentTrek 的 Qwen2.5-7B-Instruct task success 为 10.46，32B model 为 22.40；在 ScreenSpot Web 上，使用 AgentTrek 的 Qwen2-VL-7B average 为 67.4，表中 base model 为 30.7（Tables 4–5）。这些均为作者报告结果，本 Card 未独立复现。

规模陈述无法互相对齐。10,398 个 success 除以 23,430 个 tutorial 等于 44.38%，但 Appendix C 使用 39.9% replay-success rate 推导每 1,000 条 verified trajectory 为 550.75 美元。Section 4 还写成“nearly 5,000 verified trajectories”，Appendix I 又写超过 10,000。10,398 是最清楚、重复的 headline，但不能把这些数字静默替换为同一个值。

当前官方 HF dataset 在 revision `32aabe6fb48d8e2e7dae1678e6ff05ba23725b2c` 下公开且无需 gated access。它只有一个 default configuration、一个 train split、52,594 rows、单一 `messages` 列、一个 1,808,828,438-byte JSON 文件，以及 430,739,136-byte auto-converted Parquet。Dataset card 称这些记录为 dialogue turns。Viewer sample 是 text-only system/user/assistant SFT message，包含 task、current AXTree、history、action space、名为 think 与 memory 的字段，以及一个 action。

52,594 个 turn 不能等同于 10,398 个 episode。没有 manifest 把它们映射到 trajectory ID、tutorial/source URL、website、task category、replay date、evaluator outcome、failure reason、6,000 条 text-training subset、10,000 条 vision-training subset 或 model。Screenshot、video、DOM/HTML、Playwright/network trace 与完整 multimodal serialization 也不在当前 HF payload 中。

Release evidence 同样不足以支持 construction reproduction。检查的 code head 只有三个 commit，没有 tag、GitHub Release 或检测到的 license；HF dataset 也未声明 license。论文证明 failure 存在——Appendix H 给出 expired-tutorial example——但没有公开 failed corpus 或 decision ledger。
