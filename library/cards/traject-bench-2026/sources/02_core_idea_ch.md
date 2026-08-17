一句话贡献是：TRAJECT-Bench 将多工具自然语言任务与完整参数化的 parallel 或 sequential reference trajectory 绑定，并通过混合反馈契约分别检查 tool selection、argument use、dependency order、trajectory satisfaction 与 final-answer correctness。

核心机制从整理后的工具目录和两类轨迹结构开始。parallel reference 是一组输入预先确定、顺序无语义的 call；simple 与 hard query 用不同直接程度描述同一底层行为。sequential reference 则由 output-to-input compatibility、人工设计 template 与明确的相邻调用 binding 组成，因此后续 argument 依赖前一步输出。发布的一条 row 将该 reference 与 task metadata、final answer 绑定，使 predicted trajectory 能在多个层面被比较，而不是压缩为单一 success bit。

反馈契约是 mixed。程序化 metric 检查 reference tool name 的 Exact Match、Inclusion recall、对 prediction/reference 共同工具进行归一化参数比较的 Usage，以及 retrieval rate。parallel EM 忽略顺序，sequential EM 则要求顺序一致。Traj-Satisfy 默认由 Claude-4 判断，final-answer accuracy 也由 LLM judge 判断；ReAct 条件会真实执行工具并从 live API 获得 observation。这些组件可以观察命名 call、部分 argument、必要顺序、被 judge 判断的语义满足度与 answer equivalence；它们不能证明替代有效轨迹的语义等价性、reference plan 完整性、不可见副作用正确性、live output 稳定性或未固定 judge 的校准程度。

这些反馈不是训练 reward，而是附着在参考 state/action target 与完整 predicted trajectory 上的 evaluation label。Inclusion 本身不惩罚额外 call，Usage 只检查两个列表共有的工具，ReAct 正常停止也不是 terminal success predicate。这些边界很重要，因为模型可能在遗漏必要工具、加入冗余工具、利用精确名称或受 judge/API 行为影响的同时，在某个 submetric 上取得较高分。

accepted metadata 中最接近的对照包括 Toolathlon、$\tau^2$-Bench 与 MCP-AgentBench。Toolathlon 强调长程 application state 与任务专属 terminal evaluator；$\tau^2$-Bench 暴露双控制 user/agent state 与 component reward。TRAJECT-Bench 则以大规模 production-style API catalog 和参考多工具调用结构为核心，尤其区分 parallel independence 与 sequential dependency。该差异对 atlas 有用，但本身不能证明更真实、更强验证或更优训练数据。
