prior-work baseline 是 benchmark-specific orchestration：evaluator 在 data loading、environment setup、tool invocation、subject integration、stopping、scoring 与 report shape 中隐含了一组专用假设。AgentBeats 通过把 evaluator “agentify” 改变集成单元。judge agent 用 A2A 暴露 task management、用 MCP 暴露 tool/environment access，delegator 则连接独立开发的 judge 与 subject endpoint。

由此形成的 evaluation object 具有可复用外层 contract：参与方 mapping 与 configuration、judge 下发的 task、subject interaction、environment effect、terminal response/artifact/state、metric 与 result report。内部 action space 与 result JSON 仍由具体 judge 决定。因此这是 protocol 与 infrastructure 贡献，而不是所有 benchmark 已共享单一 data schema 或已校准 reward 的主张。

field study 为接口提供了经验范围：在 live competition snapshot 中登记了 12 个 category 的 298 个 judge agent 和 467 个 subject agent。coding case 进一步展示 judge 如何掌管隔离 container、提供 runtime injection 或 MCP remote shell、保留 artifact、运行 benchmark test，并比较 model-harness pairing。这两部分把接口设计连接到可观察的 episode 与 terminal-feedback behavior；同时，缺少冻结 inventory 与 run archive 仍限制审计。

AgentBeats 并没有分别发明 A2A、MCP、程序化 benchmark test、LLM judge、container、CI evaluation 或 agent registry。它围绕 judge-agent abstraction 组合这些组件，并在五种 deployment mode 中拆分 construction、registration 与 execution。因此，对 openness、standardization 或 reproducibility 的判断必须落到 artifact 层：通用 transport 不会自动使 task 开放、semantic judge 得到校准、remote service 可 reset 或输出拥有明确许可。

对指定 track 而言，方向价值在于使 episode schema 中的 environment 与 feedback owner 明确可见。复用前应核验每个 judge 能观察什么、termination 与 success 如何区分、哪种 metric 或 predicate 产生 score、哪些 failure 被保留、哪些 version 已固定。当前没有发布与 v2 准确绑定的 trajectory/log/result/replay manifest，旧 SDK 也已弃用，因此该贡献目前更适合作为 evaluation-design 与 audit reference，而不是可复用 data release。
