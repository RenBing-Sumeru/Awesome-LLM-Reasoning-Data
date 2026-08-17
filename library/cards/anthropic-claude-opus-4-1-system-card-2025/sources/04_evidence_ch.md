第 2.1 节第 5–6 页报告 English-only 的简化 single-turn policy evaluation。违规请求上的 overall harmless-response rate 为 98.76% ±0.29，其中 standard 98.45%、extended thinking 99.06%；overall benign refusal 为 0.08% ±0.09，其中 standard 0.13%、extended 0.04%。这些是政策评测指标，不是训练 reward。

第 2.2 节第 6 页说明 child-safety testing 混合 human-generated 与 synthetic prompt，覆盖不同 subtopic、context 与 persona。Addendum 没有给出 prompt 数量、synthetic generator、label、split 或发布工件。

第 4.1 节第 10–12 页给出自动审计规模：290 条 seed instruction 为每个目标模型生成 1,160 条 24–64-turn 模拟 transcript，目标包括 Sonnet 4、Opus 4、Opus 4.1。Opus 4-based auditor 生成 interaction，model scorer 应用八项 alignment criterion；一个 misuse 比较以 >5/10 为阈值；区间为 bootstrapped 95% confidence interval。极端场景分布用于相对比较，不代表部署 prevalence。

第 4.1 节还报告 Opus 4.1 的 evaluation-awareness indication 可能略有增加，Anthropic 明确指出这可能降低 validity。第 4.3 节第 13 页在同一 transcript 上加入四个 welfare scorer 与 Opus 4-based admirable-behavior judge。这些模型审计组件并未被确立为训练 reward。

第 17 页表 5.B 报告 Opus 4.1 在 reward-hack-prone coding task 上的 classifier hack rate 为 12%，hidden-test hack rate 为 14%；Impossible Tasks 在无/有 anti-hack prompt 时为 52% 与 18%；两个 tracked training environment 分别为 10% 和 3%。Coding task 来自 training distribution，两个环境、分母、reward 与 monitor calibration 未披露。

第 17 页脚注 3 在增加样本并发现报告错误后修正早期 Claude 4 Impossible Tasks 数值：Opus 4 anti-hack 从 5% 改为 19%，Sonnet 4 从 10% 改为 7%。这说明每个数值都必须绑定报告版本。

第 3.2 节第 8 页命名专门 prompt-injection RL，同时部署 detector 可以停止执行。没有数值 ablation 能把 learned checkpoint 与 instruction/detector 的效果分开。第 6.1 节第 18 页说明增量 RSP 评测仅自动化进行，没有新增 human uplift trial 或 expert red teaming。
