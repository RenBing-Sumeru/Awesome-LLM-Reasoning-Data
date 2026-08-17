既有 tool-use benchmark 往往把成功简化为答案字符串、单次 API call 或短程独立 workflow。environment-agent benchmark 会加入状态与多轮执行，但对于 action/observation trace、target state、collateral change、failure 和 replay metadata 的暴露程度并不相同。相较于这一 baseline，ComplexMCP 把大规模 MCP interface、跨应用依赖、seeded perturbation、人工接受的参考轨迹，以及分别报告任务完成度和非预期变化的 final-state verifier 组合起来。

具体改变在于 evaluation object 与 feedback interface。一条 47-task release 中的记录把自然语言指令和 application set 绑定到 seed、成功人工参考 trace、嵌套目标环境状态及状态差分 metric。由于 verifier 不只检查请求目标，还惩罚 collateral modification，side effect 因而成为一等评测维度。

若单独看，各组件并非全新：ReAct、embedding-based tool retrieval、合成应用状态、程序化 final-state check 与人工 demonstration 都早于本工作。该 benchmark 的方向信号来自围绕 MCP-scale interdependent state 进行整合，并让 evaluator implementation 可检查。315-tool 的规模属于工程扩展，本身不能证明 trajectory data 更优。

release 还为 reasoning-data curation 提供了一个有用的负面经验。每个任务发布一条成功参考 episode，使 task semantics 与 tool path 可检查；但不发布全部成功／失败 evaluated rollout，就无法审计模型在 3 次 trial 中的行为。公开 target state 和 evaluator code 提高透明度的同时，也会增加 contamination 与 benchmark-specific optimization 风险。

复用前应核验 paper-era immutable release、完整 rollout retention、task/provider manifest、task row 与 generated output 的 rights、注入故障下的 replay behavior，以及对 fuzzy comparison、exclusion key、collateral-change accounting 和 prompt-injection exposure 的独立测试。benchmark performance 不能替代这些质量检查。
