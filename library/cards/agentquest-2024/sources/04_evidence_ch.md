最强证据是 NAACL demo 正式论文和 NEC Research 公开实现。论文把 AgentQuest 定位为 benchmark framework，而不是单个榜单分数；仓库提供了可检查的代码面，能看到支持的 benchmark、driver 和 metric 入口。

真正有用的证据在 episode 层：评测者可以检查一次运行是否经过有意义的环境状态、是否重复动作、是否达到 terminal success。聚合分数只有在 benchmark module、版本、prompt/scaffold 和运行预算一致时才可比较。

证据边界也要保留。公开代码说明框架可审计，但不自动证明所有 benchmark module 的许可证都可复用，也不说明 hidden split、API 稳定性，或依赖漂移后榜单数字仍然可比。
