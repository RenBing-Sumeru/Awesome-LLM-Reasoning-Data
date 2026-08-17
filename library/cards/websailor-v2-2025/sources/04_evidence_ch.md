Table 1 在 BrowseComp-EN、BrowseComp-ZH、xbench-DeepSearch、GAIA 和 HLE 上评估 SFT 与 RL checkpoint。SFT 模型依次报告 24.4、28.3、61.7、66.0、23.9；RL 模型依次报告 35.3、44.1、73.7、74.1、30.6。这些是论文工具与 judge 设置下由作者报告的 pass@1 风格结果，并非独立复现（Table 1；§5.1）。

同一模型内部对比提供了最直接的支持：相对所列 SFT checkpoint，RL 在 BrowseComp-EN、BrowseComp-ZH、xbench-DeepSearch、GAIA 和 HLE 上分别增加 10.9、15.8、12.0、8.1 和 6.7 分。Figure 6 还报告，较简单的 xbench/GAIA 上 pass@3 增幅小于 pass@1，而 BrowseComp 上两者都更明显上升；这是对 sampling behavior 的解释，不是新 reasoning capability 的证明（§5.4，Figure 6）。

关于规模与预算，最终稿 §3.4 报告 SailorFog-QA-V2 有 3 万余条 instruction-tuning pair，graph component 平均约 30 个节点、平均 degree 2.5，结构覆盖 chain、cycle 和 dense cluster。§5.4 将 context 从 V1 的 32k 提高到 128k，把最大 ReAct 轮数提高到 100；近 90% 的正确样例在 64k 内完成。这些数字并没有给出完整轨迹数、rollout 尝试数、API 调用数或计算量。

证据限制很实质：论文没有 training-seed 方差，没有把 3 万余条 V2 corpus 与 V1 SailorFog-QA、IterBench 混合分离的 ablation，没有公开 reward audit、decontamination 分析或独立 simulator-to-live transfer 复现。V2 官方树从 2025-09-17 发布 commit 到检查的 2026-02-27 commit 始终只有 README 和两张图片，因此实验规模不等于公开发布规模。
