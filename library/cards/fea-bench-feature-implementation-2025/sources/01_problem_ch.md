仓库级代码 benchmark 多以修复已有 bug 为任务，但真实开发还包括根据需求新增类、API 或模块，并同步修改相关调用代码。新功能实现同时要求模型理解现有架构、补全新组件和编辑多个既有位置；用函数级生成或 bug-fix benchmark 无法准确衡量这种增量开发能力。

FEA-Bench 从真实 GitHub feature pull requests 构建可执行任务，将需求、base repository、金修改和相关单元测试绑定起来。候选实现必须在仓库环境中通过测试，因此该 benchmark 专门评估从自然语言功能需求到跨文件实现的能力。
