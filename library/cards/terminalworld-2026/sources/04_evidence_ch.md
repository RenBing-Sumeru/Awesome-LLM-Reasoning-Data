论文使用 6 种 agent scaffold，在人工检查的 Verified-200 子集上评测 8 个模型。表 1 报告的最高任务通过率为 Claude Opus 4.7 搭配 Terminus-2 的 62.5%；各 model-agent 组合约为 49.0%–62.5%。这些是论文 Harbor、环境与 scaffold 设置下的作者报告结果，不能衡量训练价值、许可证清晰度、provenance 完整性或测试套件可靠性。

相较 benchmark 分数对数据质量的证明力，构建计数更能说明筛选强度：80,870 条源录制变为 9,492 个筛选候选、5,035 个零退出码重建环境，再变为 1,530 个通过 reference/no-op/partial validator 的任务。Verified-200 增加专家人工检查，但它有意优先选择多样、复杂、较长且使用非琐碎工具的任务，不是随机样本。因此，这 200 个任务上的性能不应被当作全部 1,530 个任务的无偏估计（论文第 3–4 节）。

论文第 4.1 节报告 1,280 个 unique command，其中 91% 不出现在 Terminal-Bench。该数字只支持 command vocabulary 更广，不能证明逐任务去重、下游 benchmark decontamination，或被测模型从未见过等价任务。每条发布指令还带有 Harbor canary，警告不得进入训练语料；但 canary 只是帮助之后检测，并不能证明此前已完成 decontamination。

论文第 5.4 节报告，人类 reference 与成功智能体执行之间的 command-set overlap 中位数只有 21.4%。这表明 outcome test 允许替代 action path，也说明不应把 reference solution 当作唯一正确轨迹；但它不能证明每条替代路径都安全，也不能证明测试完整覆盖语义。

失败证据表明，所测结果混合了智能体能力与基础设施可靠性。附录 C 将约 2.5%–5.5% 的模型级错误率部分归因于 Harbor/tmux race 与 container startup timeout。约 10% 的任务使用 end-of-life Ubuntu、CentOS 或 Debian image，导致第三方智能体安装错误率达到 4.5%–21.5%。因此必须分开报告 resolved rate、普通失败与 harness/environment error。

官方发布表面还提供了一个负面的复现证据：论文报告 18 个类别，稳定 GitHub README 报告 19 个，已检查的当前 `full` manifest 则包含 20 个不同 `terminal_domain`。由于没有不可变 release 将 arXiv v1 映射到当前 Git/HF 快照，这三个数字描述的是不同表面，而不是一个已经固定的 taxonomy。
