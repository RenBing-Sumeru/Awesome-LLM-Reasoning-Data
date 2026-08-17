阅读顺序建议先看论文，抓住 benchmark 动机、任务数量、frontier-agent 结果和 error analysis；再看仓库 README 与文档，确认安装、任务格式、dataset registry、CLI 调用和 leaderboard 提交流程。

最重要的记忆点是：Terminal-Bench 分数是完整 run configuration 的属性，不只是模型属性。只有 model name 而没有 harness version、dataset version、runtime、timeout 和 adapter，不足以比较。

需要保留的 unknown 包括 task license 细节、public/private split policy、未来任务新增如何对应论文报告的 Terminal-Bench 2.0，以及已释放轨迹是否足以 replay 且不会泄露 held-out tests。
