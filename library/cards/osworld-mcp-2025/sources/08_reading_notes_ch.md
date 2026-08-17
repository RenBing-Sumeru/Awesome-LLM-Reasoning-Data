应把论文与官方仓库结合阅读。论文定义 361 任务评测、158 工具构造、250/111 工具有益性分组、TIR/ACS 公式、三次运行协议和消融实验；仓库则揭示实际 observation 字段、按应用检索工具的行为、MCP client/server 配置、任务 ID 清单、可执行工具边界，以及对外部 OSWorld checkout 的依赖。在线项目页适合查看当前 leaderboard，但引用 2025 年实验时不能用持续更新的榜单替代论文表格。

复用环境或生成轨迹前，应记录：

- 论文版本及 OSWorld-MCP/OSWorld commit；VM provider、镜像 digest、快照、OS 和应用版本；
- 完整任务配置、初始化动作、期望状态 getter、metric 函数和合取规则；
- 158 个工具的精确 schema/代码、外部 server 版本、按应用检索与回退逻辑、工具描述顺序；
- 模型 API/版本、GUI scaffold、prompt、grounding 模型、temperature、动作/token 预算、seed、任务顺序与重试；
- 每个截图/应用 observation、工具请求/结果/错误、GUI 动作、终止报告、evaluator 输出、reset 结果，以及成功、失败、超时、非法调用和 verifier 异常的保留原因；
- 仓库/组件许可证、继承任务/fixture 来源、脱敏、凭据处理、网络策略和沙箱边界。

仍未解决的问题都是实质性审计缺口：没有完整论文运行轨迹、不可变环境包、训练安全划分、去污染报告、仓库根许可证或生产级 MCP 威胁模型。论文 ethics statement 能降低部分隐私疑问，却不能替代记录级来源、组件许可和对有副作用工具的安全审查。
