1. 输入：任务指令、截图或 GUI 状态、平台元数据、目标元素或任务目标，以及被评测的 agent/model。
2. 流程：L1/L2 将答案或坐标与标注对齐；L3/L4 让 agent 在 GUI 中执行动作、接收 observation，并用任务成功条件检查。
3. 输出：分层 score record、交互任务的 action trace，以及按平台/层级汇总的结果。
4. 反馈契约：低层级依赖人工标注或 grounding check；高层级依赖 GUI 环境中的任务成功、效率和 runtime evaluator。
5. 复现边界：必须固定数据版本、平台、app/browser/OS 版本、分辨率、evaluator scripts、Docker/runtime 支持、账号状态、网络状态和 timeout。
