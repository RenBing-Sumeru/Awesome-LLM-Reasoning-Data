正确性受每题 verifier 和环境限制。文件型 scorer 可能漏掉替代有效解或未检查的语义质量；live-web 或安装软件任务会随着服务、包和命令行工具变化而漂移。

分数依赖 terminal scaffold、模型版本、reasoning effort、timeout、retry policy、setup determinism 和本地软件可用性。专家科学任务可能需要有许可或较重的工具，其再分发条款要单独检查。公开任务也有污染风险，如果要当 reward source，必须额外做 license、split 和 leakage 控制。
