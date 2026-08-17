1. **一句话定位：** ABC-Bench 用 224 个跨 8 语言、19 框架的任务评测从仓库到容器化 API 服务的完整开发。
2. **方法抓手：** 选后端仓库、移除实现、写 instruction、构建隐藏外部 HTTP tests、部署后判分。
3. **数据抓手：** JSON 元数据与约 2.64GB task archives，字段含任务 ID、tags、类别和需求。
4. **证据锚点：** 多种 SOTA agents 仍不稳定，但 build/boot 失败需与代码逻辑失败分开。
5. **复用决定：** 适合部署级 agent 轨迹；必须固定基础设施并审计 hidden tests 是否接受等价实现。
