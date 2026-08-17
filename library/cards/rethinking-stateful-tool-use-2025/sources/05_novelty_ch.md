DialogTool 的贡献，是把传统任务型对话状态机与完整工具生命周期连接起来。它不仅问模型能否选对 API，还分别检查何时使用工具、如何选择 App/API、能否从历史补齐并格式化参数、执行后状态如何变化、工具结果如何进入回复，以及回复风格能否保持角色一致。

App→API→argument 层级既是 schema，也是实际选择策略；它缩小搜索空间，并模拟移动应用对功能的组织。transactional flag 与 Confirm action 又使工具调用取决于累积对话状态。VirtualMobile 的存储结果可为生成的 Python 工具提供可重复单元测试。

对 Track 6 而言，新意在于分层监督对象：对话/action 标签、schema、参数、环境迁移、输出、回复和异构 verifier，而非已发布轨迹数量。官方数据/代码与模型 rollouts 未核实，六项任务也没有统一 terminal reward。
