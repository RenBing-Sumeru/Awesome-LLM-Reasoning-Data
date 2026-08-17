现有 coding benchmark 多在静态仓库中验证局部代码或单元测试，却忽略后端开发的完整生命周期：agent 必须识别语言与框架、配置依赖、实现多处业务逻辑、编写 Dockerfile、启动服务并处理真实 HTTP 请求。局部 tests 通过不代表应用能够部署和对外服务。

ABC-Bench 构建可执行后端任务，让 agent 从仓库探索一直完成容器化部署，并由容器外部的端到端 API tests 判定。它评估的不是单个函数，而是具备环境配置、服务启动与接口行为的 agentic backend coding。
