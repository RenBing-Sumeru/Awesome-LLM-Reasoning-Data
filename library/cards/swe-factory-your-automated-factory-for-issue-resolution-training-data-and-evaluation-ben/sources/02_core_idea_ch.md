SWE-Factory 的核心贡献是一套三组件数据工厂：由四类 specialized agents 与 environment memory 构成 SWE-Builder；以标准 exit code 替代项目专用测试解析器；依据可靠执行信号自动验证 fail2pass。官方 SWE-Factory-Gym 进一步公开 2,809 个可训练 Python 修复实例。

单条任务包含 issue、base/gold commit 或 patch、容器环境、测试命令和 F2P/P2P 结果。接受规则要求环境构建成功、base 确实暴露目标失败、gold 修复后转为成功且无回归；这些执行字段可直接作为 agent 终局 reward，并支持从新仓库持续扩展数据。
