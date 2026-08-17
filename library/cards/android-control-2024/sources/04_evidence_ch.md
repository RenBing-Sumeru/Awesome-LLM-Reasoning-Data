在 Random-500 IDD 上，微调后的 LT-all-r64 PaLM-2S 达到 71.5% HL 与 86.6% LL step accuracy。同一表中最强的 zero-shot 数值分别是 M3A/GPT-4 Turbo 的 42.1% HL，以及 AitW/PaLM-2L 的 56.7% LL（论文表 4，第 8 页）。附录 E.3 将 500 动作近似与完整测试比较：zero-shot PaLM-2L 在 Random-500 上为 35.2/43.0，在完整测试上为 35.0/42.7（HL/LL）；微调 PaLM-2S 则分别为 62.6/82.2 与 64.8/80.0（表 12，第 22 页）。

分布偏移仍然显著。在完整划分上，LT-all-r64 的 IDD 为 70.8% HL 和 83.2% LL，而 app-unseen、task-unseen 与 category-unseen 子集仅为 57.4–59.6% HL 和 76.8–78.5% LL。作者报告 OOD 差距会随训练数据增加而扩大（论文表 5 与第 4.5 节，第 9 页）。在 Random-500 上，Google 第一方 app 的 HL 准确率为 82.5%，第三方 app 则为 58.7%（附录 E.5，表 13，第 23 页）。

step accuracy 也会高估长时程可靠性。尽管报告的 step accuracy 位于 64–71% 区间，微调模型的 episode accuracy 从五步任务的 21.3% 降至六步任务的 7.6%；zero-shot 系统没有完成任何超过五步的任务。仅用于训练的 terminate 动作尤其困难，其 action-type accuracy 为 HL 38.6%、LL 67.5%（附录 E.1 与 E.4，表 8–9 及图 9 讨论，第 21–23 页）。

论文强调的规模目标是外推而不是实测。log-linear 拟合推算：达到 95% IDD step accuracy，LL 与 HL 分别需要 500K 和 1M 条 episode；达到五步 IDD HL episode 的 95% 完成率需要 2M；达到 95% OOD step accuracy，LL 与 HL 分别需要 10M 和 60M；达到五步 OOD HL episode 的 95% 完成率需要 150M（论文第 4.4–4.5 节，第 8–9 页）。这些估计依赖拟合区间，episode 完成率还依赖独立性假设；它们不表示论文实际采集或训练了这些规模的数据。

以上结果均由作者报告，已检查 artifact 中没有独立复现。它们支持两个限定结论：双粒度指令和更多域内示范能提高与参考动作的一致性，OOD 高层控制的扩展更慢；但不能据此证明逐记录轨迹质量、在线环境成功、性能只由数据规模导致、数据无污染或复用权利不受限制。
