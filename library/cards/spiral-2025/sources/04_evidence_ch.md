按 Table 1 的评测设置，Qwen3-4B-Base 在 MATH500、AIME24、AIME25、OlympiadBench、AMC-23、Minerva Math、GPQA-Diamond 与 MMLU-Pro 八项平均分从 34.0 升至 multi-game SPIRAL 的 44.5；25k multi-game SFT baseline 为 39.7。Qwen3-8B-Base 从 39.5 升至 49.6，DeepSeek-R1-Distill-Qwen-7B 从 60.4 升至 61.8。AIME24/25 与 AMC23 使用 AVG@32，其余数学 benchmark 使用 PASS@1；评测 temperature 为 0.6、top-p 为 0.95。这些数字说明作者设置下模型发生了变化，并不证明每条生成 trajectory 都具有内在高质量。（论文 Table 1；Appendix D.3。）

v3 附录增加了 seed 14、42、100 的三随机种子检查。对 Qwen3-4B-Base，multi-game SPIRAL 平均分为 44.5 ± 0.5，multi-game SFT 为 39.6 ± 0.4。在复杂度更高的游戏变体上，Table 8 报告 SPIRAL 的 OOD 平均 win rate 为 36.1，SFT 为 18.4，base model 为 11.0。这支持论文所报种子范围内的可重复性以及向相近游戏机制的迁移，但不能外推到开放式或非零和 environment。（Appendix E.3–E.5、Tables 8 和 10。）

机制消融与 RAE 的预期作用一致。Figure 6 报告：移除 RAE 后，response length 在约 100 个 policy iteration 内从约 2,000 字符降至接近零，general-reasoning score 从 44% 降到 40%；保留 RAE 时，response length 维持约 1,300–1,500 字符，score 从 40% 升到 47%。Appendix Figure 9 报告无 RAE 时 math performance 在约 step 150 从 35% 跌至 12%，gradient 在 step 200 后接近零。这证明 RAE 影响训练稳定性，却不能证明更长文本就是 faithful reasoning。

对迁移机制的解释更弱。GPT-4.1 将 290 条 Kuhn Poker game trajectory 与 46,792 条数学 solution 分为三个由数据归纳出的 pattern。Appendix F 说明发现阶段每个 checkpoint 随机抽取 50 条 trajectory，之后做大规模分类与人工 spot check。这些标签和样例属于 judge-mediated post-hoc analysis；论文没有给出 blind human agreement 或 causal intervention，因而不能证明这些文本 pattern 导致了 benchmark 增益。

Artifact 证据强弱不一。官方仓库开放了训练/评测代码、TextArena integration、game-state dump 与 runnable command；核验的 main commit 为 `068b06f6afce2e45ae3eb5d8bf677e9d69c83642`，GitHub 未显示 tagged release。论文实验对应的在线 rollout batch、seed、reward、optimizer state 与完整 checkpoint lineage 没有被打包成 immutable per-run artifact。
