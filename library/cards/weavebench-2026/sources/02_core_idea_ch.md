WeaveBench 的贡献是把长时程混合接口任务设计与 trajectory-aware terminal judge 绑定：任务必须让 GUI 与 CLI/代码互为必要条件，成功与否依据完整交互和产出制品共同判断，而不是只检查最终文件。

构造表面和反馈表面都被明确规定。每个任务是通过 P1-P3 准入并安装在可回滚 Ubuntu VM 中的自包含环境包。评测期间，智能体接收截图和运行时工具响应，同时输出 GUI 动作以及 CLI、文件、代码、浏览器或其他工具调用。结束后，隔离在 host 侧的 OpenClaw judge 可重新获取任务规范、完整轨迹、交付物、图像、文件、日志、shell 检查和隐藏 ground-truth anchors。它输出逐 clause 的 `satisfied`/`partial`/`false` 证据、逐 artifact 正确性、带理由的八维分数、附轨迹原文证据的 hack flag，以及一个 [0,1] 标量（论文第 3.4 节；附录 B.2-B.5；官方 `AGENT_JUDGE.md` 与 judge prompt）。

这是 mixed verification contract，而非纯 programmatic oracle。judge 把环境检查与 shell/文件检查同对语义证据的 learned model judgment 结合起来。它能观察隔离评测侧可用的归档动作、文本、截图、交付物和 anchor-backed checks；它不能证明智能体意图，也不能消除 learned-judge bias，或保证 prompt、provider、model alias 与环境版本变化后判断稳定。若检测到 hack，分数置零；否则终分为八维平均分与 deliverable correctness 两者中的较小值。因此监督附着在完整 episode 上，最终形成 scalar reward，同时保留 clause、artifact、dimension 和 hack 细节作为过程证据。

最接近的基准脉络包括 OSWorld 及相关桌面智能体评测，它们已经提供 VM 支撑的交互和终局任务检查。WeaveBench 的具体变化是 P1-P3 准入规则，以及会检查轨迹捷径行为并重新获取异质证据的 active judge。论文的 outcome-only ablation 说明这一变化为何重要：去掉轨迹审计后，作者报告的 GPT-5.5 PassRate 从 33.3% 升至 53.5%，表明只看最终制品会接受一些被完整契约拒绝的行为。该结果支持在所报告设置下访问轨迹，但不证明 learned judge 已校准，也不证明基准数据质量高。
