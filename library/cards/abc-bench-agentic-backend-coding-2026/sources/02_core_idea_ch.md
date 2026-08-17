ABC-Bench 公开 224 个实际后端任务，覆盖 8 种编程语言和 19 个框架；数据页以 JSON 提供 `task_id`、语言/框架 tags、任务类别和详细 instruction，并另行发布约 2.64GB 的 task archives。任务要求补全 API、数据访问或业务流程，同时在仓库根目录生成可构建 Dockerfile。

核心 verifier 从 agent 容器外启动请求，检查服务能否构建、运行以及 HTTP status、payload 和状态变化是否符合规范。这样 tests 对 agent 隐藏并跨实现判分，避免模型只针对可见断言修改代码。数据主要用于 backend agent evaluation，也能采集部署—测试—修正轨迹。
