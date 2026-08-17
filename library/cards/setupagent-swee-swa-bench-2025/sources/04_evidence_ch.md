ICML 最终论文报告 SWA-Bench 含 44 个仓库的 535 个实例，SWEE-Bench 含 366 个仓库的 885 个实例（论文 Table 1、§4.2、Appendix C Table 10 及仓库列表）。当前官方 Hub revisions 并不复现这些快照：SWA-Bench revision `9ce2651cf73f5cf691101ef5859ce3fccfc6cc24` 公开 450 行 test 数据，SWEE-Bench revision `012045a7367884b1e694c5840c409a9147daf58e` 公开 798 行。缺少的 85 行和 87 行没有公开 changelog 解释，因此论文规模与当前发布规模必须分开表述。

对 30 个 SWA 实例的人工审计发现：全部实例运行了目标测试，23 个完全采用参考命令，但只有 22 个环境配置完全正确。这直接说明 95% 测试阈值会接受不完美环境。论文报告 SetUpAgent 在 SWA 上的仓库与实例成功率分别为 28.6% 和 58.5%，在 SWEE 上分别为 21.6% 和 71.5%。对成功的 SWA 仓库，完整方法得到 44 个，而仅使用 CI/CD、仅使用文本、去掉迭代改进时分别为 33、15、11 个（论文 §4.3，p. 7；Tables 3–4，p. 8）。

评测结果具有版本敏感性。ArXiv v1 声称成功率最多下降 40%，并在 Table 6 报告 GPT-4o AutoCodeRover v2 在 SWA 上为 10.2%、在 SWE 上为 16.6%，即下降 6.4 个百分点或相对下降 38.6%。ICML/PMLR 最终版摘要把 headline 改为最多下降 60%；最终 Table 6 新增了 100 个采样实例上的 DeepSeek V3 结果：SWA 为 8%，SWE 为 26%。60% 是最终论文表述，40% 只属于 v1；两者都不能超出相应 agent、subset 和 harness 条件泛化。

关于 contamination，所有被评模型在知识截止时间之后的 SWA 任务上表现更低，但只有 GPT-4o 达到统计显著；SWEE 没有类似信号（论文 §5.4 与 Table 8，pp. 8–9）。这只是提示性分层，不是训练语料去污染证明。SetUpAgent 在 100 个 SWEE 候选仓库上重复三次，分别成功 27、27、26 个（Appendix A.1，Table 11）；它支持作者报告的重复性，但不是独立复现。

这些实验说明自动配置可以扩大评测面，而且 agent 排名或成功率会随仓库分布变化。它们不能认证每个发布环境，不能以 benchmark 性能证明数据质量，不能确立数据集 license，也不能解释当前 Hub 行与论文快照的差异。
