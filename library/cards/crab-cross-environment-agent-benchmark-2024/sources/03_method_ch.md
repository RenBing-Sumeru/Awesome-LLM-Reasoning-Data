1. 输入：自然语言任务、环境定义、可用 Python action、Ubuntu/Android 或其他配置环境的观察，以及 agent 通信设置。
2. 流程：用 decorator 定义 action，把 action 组合成环境，通过统一接口运行 agent，收集动作和观察，再评估 graph 节点。
3. 输出：episode 轨迹、completion ratio、graph evaluator 节点结果和 benchmark 级指标。
4. 反馈：任务专属 graph evaluator 和环境检查给成功信号；模型自述不是 verifier。
5. 复现需固定 CRAB 仓库版本、`crab-benchmark-v0` 任务集、evaluator graph、Python/runtime 依赖、设备或 VM 设置、通信设置、模型、脚手架、API 日期和时间预算。
