SWE-bench 类任务通常在已有项目测试入口中验证 patch；函数 benchmark 更不要求启动服务。ABC-Bench 的变化是把评测边界扩展到 repository exploration、环境配置、容器构建、服务启动和外部 API behavior，形成完整 backend lifecycle。

外部 tests 通过 HTTP 与应用交互，不要求候选代码匹配 gold implementation，也不直接暴露给 agent。其新意在于部署级 evaluation surface 与多框架数据，而不是提出新的 coding model 或普通 unit-test reward。
