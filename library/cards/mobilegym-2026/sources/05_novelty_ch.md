既有移动基准通常在 fidelity、可控性与成本之间取舍。Emulator 系统提供截图和部分程序化 hook，但每实例往往需要数 GB 资源，也难以复制专有账户/后端状态；真机系统覆盖真实应用，却难以重置、开展安全在线 RL 或对隐藏状态做确定性验证。AppWorld 在 tool-oriented 模拟世界中展示 programmatic state evaluation，AndroidWorld 与 AndroidLab 则提供移动交互基准（论文 Related Work、表 1）。

MobileGym 的具体改变，是把可变移动世界表示为紧凑 JSON，并贯穿整个 pipeline 使用。同一状态表示可配置任务实例、为 GRPO group 分叉相同起点、执行任务特定终局检查，并做全环境 side-effect diff。Declarative EFSM navigation 与模块化 app contract 是让模拟器可分析、可扩展的工程机制；AnswerSheet 则把 query answer 写成 typed GUI state，而不是评判模型自由文本（论文 §3–§4；附录 B、F）。

对 reasoning-data 研究而言，新对象不只是 task prompt 或 transcript，而是一个可控 episode generator：隐藏状态和 verifier 输出可以与视觉 observation、action 一起序列化。同一 substrate 因而可服务于在线 agent RL、评测、失败收集、verifier 测试和按目标状态覆盖生成数据。

其中许多组件并非新发明：浏览器 UI、Playwright 动作执行、程序化检查、state diff、GRPO、vLLM rollout 和 shaped scalar reward 都有既有来源。论文的贡献是面向移动交互的系统集成与并行规模，以及一次有限的真机迁移研究。复用前仍需核验 task-check 覆盖、app fidelity、split 语义、release pin，以及当前代码是否复现论文时期行为，不能把全部增益直接归因于环境设计。
