论文的构造与评测 pipeline 可以在组件层复述，但无法依靠公开 bundle 做精确 replay。

1. **Server 搜集与过滤。** 从官方 MCP registry 与社区资源得到 369 个候选 server。三人用七天按可执行／稳定、无状态、文本输入输出三项条件筛选，保留 33 个 server 与 188 个工具。各 server 按上游说明配置，并通过第三方 `chatmcp/mcprouter` 统一接入；完整 inventory、版本、credential、MCP revision 与 router commit 未发布。
2. **类别与上下文构造。** 六类任务是单／多 server 与单次／并行／顺序调用的交叉。对选定工具，Claude 3.7 Sonnet 协助构造 user profile、scenario、objective、success criteria 与包括当前系统时间的上下文。多 server 选择带随机性，使暴露工具数维持在实际约 128 个上限附近；random seed 和逐题 server manifest 未披露。
3. **Query 合成与人工检查。** user-simulator prompt 生成一条符合角色、内容自足、目标明确且不提工具名或过程步骤的单轮请求。query 必须真实、有效，并可由所选确定性工具解决。人工核验生成材料，但 accepted/revised/rejected 数量及完整 adjudication rubric 未知。
4. **Reference answer 筛查。** 每个 query 生成 `K=5` 条 LLM execution trajectory，再由另一 LLM judge 计算 aggregate pass rate；低于 20% 的 case 交给专家诊断。专家可改写含糊／有缺陷的 query、完善 LLM answer，或从头编写 reference。最终概念记录是 query-reference-answer pair；时间敏感任务保存的是标注时刻结果。
5. **Agent 交互。** 主要设置使用公开的 ReAct prompt；兼容模型还评测 native tool calling。ReAct 依次追加 Thought、tool Action 与 Observation，native tool calling 则在结构化 call/result 间交替并以 final text 结束。由于部署的 tool description 与 Gemini parser 不兼容，Gemini native tool calling 被省略。
6. **预算与终止。** 每个 episode 最多 30 个 action，tool call 和文本 response 都计数。最大模型输出 8192 token；Claude 3.7 Sonnet 与 Gemini 2.5 Pro/Flash 的 thinking budget 为 8192；瞬时 API request 最多 retry 三次。temperature、top-p、每题重复数、seed、总 token budget、wall-clock timeout、tool timeout 与 cost cap 均未披露。
7. **判定与输出。** MCP-Eval 向 o3-mini-high 提供 user query、reference answer、final answer 与 rubric，得到 binary pass/fail。它不评分单次 call、transition、observation 使用或 environment state。论文输出是 aggregate Pass Rate、小规模 human-agreement study 与定性 error class。

精确复现还需 600 条记录、逐题 server/tool manifest、33 个 server 配置与 188 个 schema、API/model/judge revision、各角色 prompt 与 decoding setting、system time、seed、retry、原始 tool observation、final answer、judge request/response，以及带许可的不可变 environment image；当前没有核实到这些内容的作者官方 release。
