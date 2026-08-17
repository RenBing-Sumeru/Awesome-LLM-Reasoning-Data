最接近的 baseline 是 offline mobile-agent post-training：action-only demonstration、static screenshot、offline RL 或针对固定 record 的 DPO。这些方法能展示 expert behavior，却看不到 current policy 的 closed-loop error、recovery attempt 与 environment-dependent success；single-step GUI RL 也没有解决 50-turn interaction 的 credit assignment 与大规模 Android device 成本。

MobileRL 同时改变 data object 与 selection rule。其 RL record 是带 terminal outcome、length-sensitive reward、group-relative advantage、可能的 replay membership 和 task failure history 的 live screenshot/XML/action trajectory。AdaPR 让稀缺困难 success 再次进入 update；FCF 按重复全零 group 改变 task distribution；negative pruning 明确丢弃 low-advantage failure。因此，“dataset”不是静态文件，而是随 policy 与 verifier 演化的数据流。

反馈接口也有意保持异构：AndroidWorld 使用 executable rule-based check，AndroidLab training 使用从 proprietary-majority label 蒸馏出的 learned VLM judge。论文对 AndroidWorld 更平滑、AndroidLab reward 更不可靠的比较，使 verifier quality 成为方法的一部分，而不是隐藏的 benchmark 细节。

各组件并非都由本文首创：two-stage SFT、GRPO、experience replay、curriculum、length shaping、VLM judge、Dockerized emulator 与 bounding-box action 都有先例。贡献是将它们集成到昂贵的多轮 Android sampling，并显式按 task difficulty 调整。编排大量 AVD 是 systems contribution，不代表选中的 trajectory 没有 bias 或可以安全复用。

对 reasoning-data 研究而言，论文的重要方向信号是把常被隐藏的选择公开为研究对象：哪些 success 被 replay，哪些 failure/task 消失。复用前必须检查 selection-induced coverage loss、reward-model error、split/overlap control、replay/removal log、environment versioning 与 data rights。发布的 evaluation code 和 checkpoint 并未暴露这些训练时决定。
