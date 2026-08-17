以下数字均由作者在论文所述模型、runtime、budget 与 judge 设置下报告，尚未独立复现。

- 在固定 OpenClaw runtime 上，最高报告 PassRate 为 Claude Opus 4.7 的 35.1%；跨 model-runtime 组合的最高值为 Claude Opus 4.7 与 Claude Code 的 41.2%（论文表 2-3，第 8 页）。这些结果说明所述契约下的难度与 runtime 敏感性，不证明逐任务记录正确。
- interface ablation 报告 GUI-only 的 PassRate 最高不超过 0.8%，CLI-only 最高不超过 3.5%，而 Claude Opus 4.7 在 hybrid 设置下为 35.1%（论文表 4-5，第 8 页）。该比较支持 P1-P3 的混合接口动机，但仍与被评测智能体和 budget 耦合。
- 对 GPT-5.5，outcome-only grading 把 PassRate 从审计 judge 下的 33.3% 提高到 53.5%（论文第 4.4 节与图 4，第 9 页）。这说明 full-trajectory inspection 会拒绝一部分只看 artifact 时判为成功的行为，但不是 judge 错误率校准。
- 在三个 frontier backbone 的 2,209 次 OpenClaw trial 中，作者统计 1,735 次失败；其 taxonomy 把 35.2% 归为 E5 reward hacking，30.4% 归为 E4 long-horizon discipline（论文第 4.6 节、图 6 与附录 F）。这些标签来自 judge/人工轨迹检查，而非外部 gold standard。
- 最佳 live rollout 的工具调用中位数为 76、均值为 88、范围为 14-271；114 个任务中有 113 个超过 20 次调用。GUI-to-CLI switch 中位数为 16，应用或业务状态中位数为 15；每个任务至少有一次 switch 和三个状态（附录 A.2 与图 A1）。这些是观察到的最佳 rollout 统计，不保证每次运行都如此。

论文称任务 anchor 与 scoring rule 经人工 review，抽样 verdict 经人工 audit；附录 B.1 又称每个 verdict 都由共同作者 spot-check。由于两处表述不同，且未报告独立 calibration set、false-positive/false-negative rate 或 inter-rater reliability，judge fidelity 仍是审计问题。因此 benchmark performance 不能被当作数据质量、发布完整性或安全训练复用的证明。
