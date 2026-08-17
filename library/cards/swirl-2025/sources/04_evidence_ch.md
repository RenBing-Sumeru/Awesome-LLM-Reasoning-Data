Table 1 评测使用 process-only HotPotQA 数据训练的 SWiRL，模型为 Gemma 2 27B，允许检索，并在每个数据集随机抽取 300 条由 GPT-4o 评分。论文报告 HotPotQA 准确率为 67.8，而 base Gemma 2 27B 为 58.6；CofCA 为 39.3 对 31.7；MuSiQue 为 43.6 对 35.4。表中具名既有方法结果引自 Wu et al. (2024)；这些都是作者报告结果，不是独立复现。（论文 Table 1 及 caption，pp.7–8）

跨任务研究使用另一组 300 条子样本，并依次在 GSM8K、HotPotQA、CofCA、BeerQA 与 MuSiQue 上报告：base 为 `[.65, .65, .54, .59, .45]`，在 GSM8K 上训练的 SWiRL 为 `[.79, .71, .56, .68, .49]`，在 HotPotQA 上训练的 SWiRL 为 `[.76, .73, .62, .68, .50]`。这支持论文 judge 与采样设置下的跨任务迁移，但无法区分增益究竟来自独立数据、重复前缀、reward model，还是未披露的 optimizer 细节。（论文 Table 2，p.9）

筛选消融对数据结论尤其重要。在 SWiRL 中，process-only 轨迹效果最好，而且会有意保留最终结果正确与错误的两类轨迹；除 MuSiQue 外，outcome-only 筛选通常甚至不如不筛选。Appendix C 中 SFT 的局部偏好相反：过程与结果交集优于 process-only，但各筛选策略下 SFT 仍低于 SWiRL。这说明筛选方式与训练目标存在交互，不证明过程标签天然高质量。（论文 §4.2 与 Figure 4，pp.8–9；Appendix C，Figure 8，p.24）

规模证据有明确边界。Figure 6 报告 100 条 HotPotQA 轨迹不足以稳健泛化，1,000 条开始出现增益，10,000 条进一步提升。Appendix B 报告 Gemma 2 2B 与 9B 在域内提升、域外表现不稳定，而 27B 在所测 QA 数据集上一致提升。这只是单一 recipe 的定性图表趋势，不是一般性 scaling law。（论文 §4.2，pp.9–10；Appendix B，Figure 7，p.23）

在由 100 个问题生成的 500 条轨迹上，Table 3 的过程标签分析报告：HotPotQA 从 82.5% 提升到 91.0%，GSM8K 从 87.5% 提升到 91.6%，指标在轨迹内和轨迹间做 macro-average。Appendix D 另在 100 条样本上审计 judge：Gemma 2 27B 在 HotPotQA 的 FPR/FNR 为 4%/1%；在 GSM8K 上，Gemma 2 27B 为 15%/0%，GPT-4o 为 0%/10%，Gemini 1.5 Pro 为 4%/0%，所列错误均涉及单位。小规模校准样本，加上 judge 在筛选、奖励和评测中的复用，仍存在相关误差风险。（论文 Table 3，p.10；Appendix D，Tables 4–5，p.25）

以上数字只建立论文报告的实验行为，不能认证逐条轨迹正确性、reward 校准、污染控制、许可证兼容性或未发布语料的质量。
