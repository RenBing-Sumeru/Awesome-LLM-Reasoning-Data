- 应核查的环境单元：由提示、Function Calling 工具动作、观察、奖励历史和终止信号组成的任务 worker 会话。
- 应核查的任务和来源边界：ALFWorld/WebShop 的直接输入；OS/KG/DB 使用 o3 与 Claude Sonnet 4 的 Self-Instruct；BIRD 仅增补 DB。
- 应核查的反馈契约：归一化环境奖励、二元整轨迹正确性，以及对超预算或异常终止施加的负 0.2。
- 依赖结果前的复用门槛：论文时期容器/数据/切分哈希、合成输入溯源、rollout 与评估器日志、队列/策略版本状态和污染审计。

