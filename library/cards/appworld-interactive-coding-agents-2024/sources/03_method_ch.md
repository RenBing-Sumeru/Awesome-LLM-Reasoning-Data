1. 输入：自然语言任务、初始世界状态、模拟用户、app/API 文档和 coding-agent scaffold。
2. 流程：agent 读取文档，写代码或工具调用，在 AppWorld 环境中执行，观察 API 返回，并在预算内迭代。
3. 输出：代码/动作、API trace、最终世界状态、任务成功标签和 collateral-damage 检查。
4. 反馈契约：AppWorld 用状态化和执行式单元测试评估成功与副作用。
5. 复现边界：固定 AppWorld package/data 版本、任务 split、API 文档、沙盒、模型 scaffold、执行预算和 evaluator 版本。
