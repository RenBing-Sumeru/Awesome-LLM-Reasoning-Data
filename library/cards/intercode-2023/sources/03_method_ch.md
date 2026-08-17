1. 输入：任务指令、环境定义、必要的初始文件/数据库/challenge 状态，以及 agent policy 或 prompting scaffold。
2. 流程：重置环境，向 agent 展示 observation，执行每个命令或代码 action，返回 stdout/stderr/result feedback，直到成功、失败、超时或耗尽 step budget。
3. 输出：完整 state-action-observation trace、必要时的最终答案或 artifact、环境日志和任务级分数。
4. 反馈契约：环境提供中间执行反馈；终止成功由任务特定 evaluator 检查，例如测试、数据库答案检查、命令结果或 challenge validator。
5. 复现边界：必须固定 InterCode release、Docker/runtime image、task split、依赖版本、step limit、timeout policy、prompt scaffold、parser，以及 public/private task 边界。
