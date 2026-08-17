论文把 prior-work bottleneck 定义为 executable environment diversity 与 task feasibility 不足，而不只是 prompt 或 rollout 太少。EnvFactory 把构造单位从独立 trajectory 改为一条关联链：source research、state schema、executable MCP tool、dependency graph、initialized scenario、simulated multi-turn interaction、selected trace，以及 reward-ready state/reference record。

第一个具体变化是带多 agent 实现循环的 environment synthesis。Search 用在线来源为候选 environment 提供 grounding，Code 把 state 与 tool 具体实现出来，Test 检查 output 与 state transition。这样得到可复用的本地 execution substrate，但必须保留一个边界：generated test 验证的是 synthesized specification，不能证明与 original service 等价。

第二个变化是 topology-aware task construction。parameter similarity 与 LLM graph refinement 表示 tool dependency；recursive sampling 确保每个 required input 可由 user 或 earlier tool output 提供。它在 dialogue generation 前先针对 executable multi-tool chain 建立可行性，而不是让 generator 在没有显式 feasibility substrate 时直接编写看似合理的 trace。

第三个变化是公开的 mixed reward interface。RL row 带 reference call 和 initial/target state，reward code 组合 order-insensitive call coverage、exact final-state comparison 与 penalty。它比隐藏 learned judge 更可审计，但仍可能被 gaming 且具有 brittleness：masked argument、extra call、reordered call、intermediate side effect 与 serialization difference 都影响 verifier 能否观察到行为。

该工作没有发明 MCP、Python tool server、LLM code generation、simulated user、SFT、GRPO、reference-call checking 或 final-state reward。主要新意是把这些组件集成为 environment-first 的构造与发布 recipe，并配对 step-expanded SFT record 与 turn-level RL reward input。公开发布没有增加 rejected-candidate dataset、显式 process label、learned reward model 或 immutable replay package。

对 reasoning-data 研究而言，方向信号是 agent dataset 必须把 environment 与 feedback contract 和 transcript 一起审计。解释 scale 或 benchmark gain 前，复用检查应覆盖 source provenance、task feasibility、state isolation、reward semantics、failed-sample retention、row-unit conversion、split/contamination、privacy、rights 与 version binding。
