benchmark 的构建覆盖 224 个任务、8 种语言和 19 个框架，明显超出单一 Python/pytest 设置；公开 archive、instructions 与 external tests 使完整部署链可重复执行。作者对多种先进模型/agents 进行统一评测，发现即使 state-of-the-art systems 也难以稳定完成这些 holistic tasks，说明 benchmark 尚未饱和。

这一证据支持“服务部署与外部 API 验证增加真实难度”，但论文摘要未给出一个可脱离 agent 配置解释的统一最佳百分比。结果还受 Docker 生成、依赖下载和启动等待策略影响，失败不能全归因于业务代码错误。
